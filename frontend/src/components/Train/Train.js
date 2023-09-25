import { React, useEffect, useRef, useState } from 'react';
import { Pose } from '@mediapipe/pose';
import './Train.css';

import {
    drawConnectors,
    drawLandmarks,
  } from '@mediapipe/drawing_utils';
import exerciseMap from '../../local-json/exercise.json';
import exerciseDetails from '../../local-json/exercisecoint.json';
import AccuracyManager from './modules/AccuracyManager';
import ExerciseCountManager from './modules/ExerciseCountManager';

import AngleCalculator from './modules/AngleCalculator';
import ExerciseParser from './modules/ExerciseParser';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { sendTrainData } from '../../apis/train';



const accuracyManager = new AccuracyManager();
const exerciseCountManager = new ExerciseCountManager();
const angleCalculator = new AngleCalculator();
const parser = new ExerciseParser();

    
function Train(props){
    const [inputVideoReady, setInputVideoReady] = useState(false);
    const [active, setActive] = useState(false);
    const [timerState, setTimerState] = useState("");
    const [lines, setLines] = useState([]);
    const [data, setData] = useState(
        {
            timer:"",
            exerciseCount:0,
            accuracy: 1,
            angleArray: [],
            messageArray: [],
        }
    );
    
    const navigate = useNavigate();

    const detail = 
    exerciseDetails[props.exerciseId] 
    ? exerciseDetails[props.exerciseId].detail
    : exerciseDetails["default"].detail;
    const requireCount = detail.count;
    const name = props.exerciseId ? parser.parse(props.exerciseId)[0] : "s1"; 
    const lookupMap = exerciseMap[name];
    const inputVideoRef = useRef(null);
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const startButton = useRef(null);
    const pauseButton = useRef(null);
    const resetButton = useRef(null);
    const leaveButton = useRef(null);

    const ssu = new SpeechSynthesisUtterance();
    const handleSpeak = (msg) => {
        ssu.text = msg;
        if(!window.speechSynthesis.speaking){
            window.speechSynthesis.speak(ssu);
            console.log("speak");
        }
        ssu.text = "";
    }

    useEffect(() => {
        exerciseCountManager.setBounds(lookupMap.counterBounds.lb, lookupMap.counterBounds.ub);
        let tmplines = [];
        for(let i = 0; i < lookupMap.parts.length; i++){
            let partLines = [];
            partLines.push([lookupMap.parts[i].joints[0], lookupMap.parts[i].joints[1]]);
            partLines.push([lookupMap.parts[i].joints[1], lookupMap.parts[i].joints[2]]);
            tmplines.push(partLines);
        }
        setLines(tmplines);
    }, []);
    useEffect(()=>{
        if(data.exerciseCount >= requireCount){
            props.handleAchieved(30);
            handlePause();
            handleSave();
        }
    }, [data.exerciseCount])

    useEffect(() => {
        if (!inputVideoReady) {
            return;
        }
        if (inputVideoRef.current && canvasRef.current) {
            contextRef.current = canvasRef.current.getContext('2d');
            const constraints = {
                video: { width: { min: 1280 }, height: { min: 720 } },
            };
            navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
                if (inputVideoRef.current) {
                inputVideoRef.current.srcObject = stream;
                }
                sendToMediaPipe();
            });

            const pose = new Pose({locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
            }});
            pose.setOptions({
                modelComplexity: 1,
                smoothLandmarks: true,
                enableSegmentation: true,
                smoothSegmentation: true,
                minDetectionConfidence: 0.5,
                minTrackingConfidence: 0.5
            });
            pose.onResults(onResults);

            const sendToMediaPipe = async () => {
                if (inputVideoRef.current) {
                    if (!inputVideoRef.current.videoWidth) {
                        console.log(inputVideoRef.current.videoWidth);
                        requestAnimationFrame(sendToMediaPipe);
                    } else {
                        await pose.send({ image: inputVideoRef.current });
                        requestAnimationFrame(sendToMediaPipe);
                    }
                }
            };
        }
    }, [active, inputVideoReady]);

    const onResults = (results) => {
        if (canvasRef.current && contextRef.current) {
            contextRef.current.save();
            contextRef.current.clearRect(
                0, 0, canvasRef.current.width,canvasRef.current.height
            );
            contextRef.current.drawImage(
                results.image, 0, 0, canvasRef.current.width, canvasRef.current.height
            );
            if (results.poseLandmarks && !accuracyManager.isPausing()) {
                const landmarks = results.poseLandmarks.filter((item,index) => lookupMap.joints.includes(index));
                let angles = [];
                let messages = [];
                for(let i = 0; i < lookupMap.parts.length; i++){       
                  const angle = angleCalculator.calculate(results.poseWorldLandmarks, lookupMap.parts[i]);
                  angles.push(angle);
                }
                drawConnectors(contextRef.current, results.poseLandmarks, lookupMap.connections, {
                    color: '#48d1cc', lineWidth: 12,
                });
                drawLandmarks(contextRef.current, landmarks, {
                    color: '#e6e6fa', lineWidth: 40, radius: 6
                });
                let correct = true;
                for(let i = 0; i < lookupMap.parts.length; i++){
                    const ub = lookupMap.parts[i].ub;
                    const lb = lookupMap.parts[i].lb;
                    const angle = angles[i];
                    const correction = lookupMap.parts[i].correction;
                    
                    if(angle < lb || angle > ub){
                      drawConnectors(
                        contextRef.current, 
                        results.poseLandmarks, 
                        lines[i],
                        {color: '#ff0000', lineWidth: 20}
                      );
                      let msg = ''
                      if(correction.type === 1){
                        msg = correction.message;
                      }
                      else if(correction.type === 2){
                        msg = angle > ub ? correction.ubMessage : correction.lbMessage;
                      }
                      messages.push(msg);
                      correct = false;
                      handleSpeak(msg);
                    }
                }
                accuracyManager.correct = correct;
                setData(
                    {
                        timer: accuracyManager.exerciseTimer.display(),
                        exerciseCount: exerciseCountManager.count,
                        accuracy: accuracyManager.getAccuracy(),
                        angleArray: accuracyManager.exerciseTimer.pausing ? data.angleArray: angles,
                        messageArray: accuracyManager.exerciseTimer.pausing ? data.messageArray: messages,
                    }
                );
                accuracyManager.update();
                exerciseCountManager.check(angles);
            }
        }
        contextRef.current.restore();
    }
    const handleStart = ()=>{
        startButton.current.disabled = true;
        pauseButton.current.disabled = false;
        resetButton.current.disabled = false;
        if(!active){
            setActive(true);
            accuracyManager.reset();
            exerciseCountManager.reset();
        }
        accuracyManager.start();
        setTimerState("偵測中..");
    }
    const handlePause = () => {
        startButton.current.disabled = false;
        pauseButton.current.disabled = true;
        resetButton.current.disabled = false;
        startButton.current.innerText = "繼續偵測";
        accuracyManager.pause();
        setTimerState("暫停");
    }
    const handleReset = ()=>{
        startButton.current.disabled = false;
        pauseButton.current.disabled = true;
        resetButton.current.disabled = true;
        startButton.current.innerText = "開始偵測";
        accuracyManager.reset();
        exerciseCountManager.reset();
        setTimerState("重置");
    }
    const handleSave = async () => {
        const dateObject = new Date();
        const user_id = Cookies.get('user_id');
        const year = dateObject.getFullYear()
        const month = String(dateObject.getMonth()+1).padStart(2,"0")
        const date = String(dateObject.getDate()).padStart(2, '0')
        // 将从 Cookie 中读取的数据反序列化为 JSON 对象
        const obj = {
            accuracy: accuracyManager.getAccuracy(),
            time: accuracyManager.getTotalTimeInSeconds(),
            count: exerciseCountManager.count,
            date: `${year}-${month}-${date}`, 
            exercise_id: name,
            user_id: user_id
        };
        sendTrainData(obj)
    }
    return (
        <div>
            <video autoPlay ref={(e1) => {
                inputVideoRef.current = e1;
                if(active)
                    setInputVideoReady(!!e1);
            }} hidden={true}/>
            <div className="display_panel">
                <div className="canvas_panel">
                    <canvas ref={canvasRef} width={1280} height={720}></canvas>
                </div>
                <div className="right_panel">
                    <div className='top_right_bar'>
                        
                    </div>
                    
                    <DataPanel name={lookupMap.name} timerState={timerState} parts={lookupMap.parts} data={data} detail={detail}></DataPanel>
                    <div className = "button-panel">
                        <button className="btn btn-primary btn_custom" ref={startButton} id="start" onClick={handleStart}>開始偵測</button>
                        <button className="btn btn-secondary btn_custom" ref={pauseButton} id="pause" onClick={handlePause}>暫停偵測</button>
                        <button className="btn btn-danger btn_custom" ref={resetButton} id="reset" onClick={handleReset}>　重置　</button>
                        <button className="btn btn-warning btn_custom" ref={leaveButton} id="leave" onClick={()=>{navigate('/program/new')}}>離開偵測</button>
                        <button className="btn btn-danger btn_custom" id="save" onClick={handleSave}>　重置　</button>
                    </div>
                </div>
                
            </div>
        
        </div>
    )
}
function DataPanel({name, timerState, parts, data, detail}){
    return (
        <div className="data_panel">
            <div className="font">{name}  {detail.count}下</div>
            <div className="font" id="  timer_state">{timerState}</div>
            <div className="font" id="angle_display">
                {parts.map((e, index) => 
                <div key = {index}>
                    {e.name}角度:{data.angleArray.length === 0 ? 0 : data.angleArray[index].toFixed(0)}
                </div>)}
            </div>    
            <div className="font" id="time_display">運動時間: {data.timer}</div>
            <div className="font" id="exercise_count">{data.exerciseCount}下</div>
            <div className="font" id="accuracy_display">準確度: {(data.accuracy*100).toFixed(2)} %</div>
            <div className="exercise_hints">
                { 
                (data.messageArray.length === 0)
                ?
                <div className="font" id="exercise">
                    {"動作正確"}
                </div>
                :
                <div className="font_warning" id="wrong_exercise">
                    {data.messageArray.map((e, index) => <div key = {index}>{e}</div>)}
                </div>
                }
            </div>  
        </div>
    );
}

export default Train;