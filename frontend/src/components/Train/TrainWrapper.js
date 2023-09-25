import { useEffect, useState } from "react";
import Train from "./Train";
import { Link, useLocation, useNavigate } from "react-router-dom";
import fitnessMenu from "../../local-json/fitnessmenu.json"
import "./TrainWrapper.css";
import LogoImage from '../assets/fitup3.png';
import { timeDays } from "d3";


function TrainWrapper(props){
    const [index, setIndex] = useState(0);
    const [achieved, setAchieved] = useState(false);
    const [time, setTime] = useState(30);

    const data = useLocation();
    const programListId = data.state ? data.state.programListId : "default";
    const programList = fitnessMenu[programListId] ? fitnessMenu[programListId].order : fitnessMenu["default"].order;
    
    const navigate = useNavigate();

    const handleAchieved = (restTime) => {
        setAchieved(true);
        setTime(restTime);
    }

    const handleNext = () => {
        if(index < programList.length){
            setIndex((index) => index + 1);            
        }
    }
    const handlePrev = () => {
        if(index > 0 && index < programList.length){
            setIndex((index) =>　index - 1);
        }
    }
    
    useEffect(()=>{
        if(programListId === "default")
            navigate("/program/mine");
    });
    
    useEffect(() => {
        if(achieved){
            const timer = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
          }, 1000);
            return () => clearInterval(timer); 
        }
        return () => {};
    }, [achieved]);

    useEffect(()=>{
        if(time <= 0){
            handleNext();
            setAchieved(false);
            setTime(30);

        } 
    },[time])
    useEffect(()=>{
        if(index >= programList.length){
            navigate("/program/mine");
            return;
        }
    },[index])
    return (
        <div className="train_wrapper_container">
            <div className="topbar">
                <Link to="/" className="logo_image_container">
                    <img src={LogoImage} className="logo_image" alt="Logo" />
                </Link>
                {fitnessMenu[programListId].name}
            </div>
            <div className="train_container">
                {programList
                ? <Train key={index} exerciseId={programList.length === 0 ? "default" : programList[index]} handleAchieved={handleAchieved}/>
                : <Train key={index} exerciseId={"s2_1"} handleAchieved={handleAchieved}></Train>}
            </div>
            <div className="bottombar">
                {index !== 0 ? <button onClick={handlePrev}>上個動作</button> : <></>}
                <div>{index}/{programList.length}</div>
                {index === programList.length - 1 
                ? <Link to="/program/new">回到菜單頁面</Link>
                : <></>}
            </div>

            {achieved 
            ? 
            <div className="train_overlay">
                <div className="train-spinning-timer">
                </div>
                <div className="train-timer-text">
                        <b>{time}</b>
                </div>
            </div>
            :
            <></>
            }
            
            
        </div>
    );
}
export default TrainWrapper;