import React, {useState, useRef, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Chart.css';
import * as d3 from 'd3';
import * as Draw from './Drawchart.js';
import * as Cons from './Constdata.js';
import * as Src from './Script.js';
const Chart = () => {    

    const choosechart = () => {
        //移除圖表
        d3.select('svg').selectAll('*').remove();
        //時間、部位、動作改變
        timetype = d3.select('#time').property('value');
        bodyparttype = d3.select('#bodypart').property('value');
        actiontype = d3.select('#action').property('value');
        if(charttype == 'curve') {
            Draw.drawCurvechart(thisyear, thismonth, today, monthday, timetype, bodyparttype, CurveData);
        }
        else if(charttype == 'bartime') {
            Draw.drawBartimechart(thisyear, thismonth, today, thisweekday, monthday, timetype, bodyparttype, actiontype, BartimeData);
        }
        else if(charttype == 'radar'){
            Draw.drawRadarchart(radius, total, arc, fivepoint, fivepointnum, CurveData);
        }
        else if(charttype == 'barsets'){
            Draw.drawBarsetschart(thisyear, thismonth, today, thisweekday, monthday, timetype, bodyparttype, BarsetsData);
        }
    }

    let charttype ='curve'; //圖形種類
    let timetype = 'month'; //時間種類        
    let bodyparttype = 'shoulder'; //部位選擇
    let actiontype = '全部'; //動作選擇

    //取得日期
    const [thisyear, setThisYear] = useState(0);
    const [thismonth, setThisMonth] = useState(0);
    const [thisweekday, setThisWeekday] = useState(0);
    const [today, setToday] = useState(0);
    const [monthday, setMonthday] = useState(0);
    
    //動作正確率隨機亂數值(最大為100%，數值取到小數點後第二位)
    let CurveData = []; //11680    
    for(let i = 0; i < 11680; i++) {
        let RandNum = Math.round(Math.random() * 100 * 100) / 100;
        CurveData.push(RandNum);
    } 

    //運動時長隨機亂數值(最大為12小時，數值取到小數點後第一位)
    let BartimeData = []; //11680
    for(let i = 0;i < 11680; i++) {
        let RandNum = Math.floor(Math.round(Math.random() * 12 * 10)) / 10;
        BartimeData.push(RandNum);
    }

    //運動組數隨機亂數值(最大為60組)
    let BarsetsData = []; //11680
    for(let i = 0;i < 11680; i++) {
        let RandNum = Math.floor(Math.round(Math.random() * 60));
        BarsetsData.push(RandNum);
    }

    //各部位正確率(先以隨機值代替)    
    const radius = 200; //半徑 
    const total = 5; //指標的數量，即fieldNames的數量
    const arc = 2 * Math.PI; //弧度
    let fivepoint = '';
    let fivepointnum = [];
    for(let i = 1; i <= Cons.total; i++) {
        let rand = Math.round(Math.random() * 100 * 100) / 10000;
        let x = Cons.radius * rand * Math.cos((i / 5 - 1 / 4) * Cons.arc);
        let y = Cons.radius * rand * Math.sin((i / 5 - 1 / 4) * Cons.arc);
        fivepoint += x + ',' + y + ' ';
        fivepointnum.push(parseFloat((rand * 100).toFixed(2)));
    }
    useEffect(() => {
        Src.getdatedata(setThisYear, setThisMonth, setThisWeekday, setToday, setMonthday);
        Draw.Curve();
        Draw.drawCurvechart(thisyear, thismonth, today, monthday, timetype, bodyparttype, CurveData);
    }, [])
    return (
        <div>
            {/*圖表*/}
            <div class="top"> {/*圖表類型選擇*/}
                <button1>
                    <button id="accuracy" style={{backgroundColor: '#0f0c05'}} onClick={() => {
                        charttype = 'curve';
                        Draw.Curve();
                        choosechart();
                    }}>動作正確率</button>
                    <button id="totaltime" onClick={() => {
                        charttype = 'bartime';
                        Draw.Bartime();
                        choosechart();
                    }}>運動時長統計</button>
                    <button id="avg_accuracy" onClick={() => {
                        charttype = 'radar';
                        Draw.Radar();
                        choosechart();
                    }}>各部位動作平均正確率</button>
                    <button id="totalsets" onClick={() => {
                        charttype = 'barsets';
                        Draw.Barsets()
                        choosechart();
                    }}>運動組數統計</button>
                </button1>
            </div>
            <div class="select"> {/*時間、部位、動作選擇*/}
                <select1>
                    <text class="chart-text">時間:</text>
                    <select id="time" onChange={() => {                        
                        choosechart();                        
                    }}>
                        <option value="month">這個月</option>
                        <option value="lastmonth">最近一個月</option>
                        <option value="year">今年</option>
                    </select>
                    <text class="chart-text">訓練部位:</text>
                    <select id="bodypart" onChange={() => {                        
                        Src.bodypartchange();
                        choosechart();
                    }}>
                        <option value="shoulder">肩</option>
                        <option value="chest">胸</option>
                        <option value="arm">手</option>
                        <option value="abs">腹</option>
                        <option value="leg">腿</option>                
                    </select>
                    <text class="chart-text1">訓練動作:</text>
                    <select id="action" onChange={() => {                        
                        if(charttype == 'curve') {
                            Src.actionchange(charttype);
                        } 
                        else if(charttype == 'bartime'){
                            choosechart();
                        }
                        else if(charttype == 'barsets'){
                            choosechart();
                        }
                    }}>
                        <option value="全部">全部</option>
                        <option value="啞鈴肩推">啞鈴肩推</option>
                        <option value="啞鈴前平舉">啞鈴前平舉</option>
                        <option value="啞鈴側平舉">啞鈴側平舉</option>
                        <option value="俯身啞鈴飛鳥">俯身啞鈴飛鳥</option>
                        <option value="直立划船">直立划船</option>
                        <option value="阿諾肩推">阿諾肩推</option>
                        <option value="過頭前平舉">過頭前平舉</option>
                        <option value="伏地挺身">伏地挺身</option>
                    </select>
                </select1>
            </div>
            <div class="info"> {/*圖表名稱*/}
                <text id="chartname" style={{fontSize: '40px'}}>動作正確率</text>
            </div>
            <div class="chart"> {/*繪製圖表*/}
                <svg></svg>       
            </div>           
        </div>
    );

}

export default Chart;