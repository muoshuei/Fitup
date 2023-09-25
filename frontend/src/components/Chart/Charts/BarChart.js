import { useEffect, useState } from "react";
import * as d3 from "d3";
import { IntervalEnum, Intervals, PartsEnum, Parts, ActionEnum } from "../Enums/ChartEnum";
import ChartHelper from "../module/ChartHelper";
const BarChart = ({data}) => {
    const [params, setParams] = useState({
        interval: IntervalEnum.thisMonth,
        parts: PartsEnum.Abs,
        actionType: ActionEnum.ALL,
    });
    const handleChange = (e) => {
        setParams({...params})
    }
    const getParsedData = (data) => {
        
    }
    useEffect(()=>{
        // draw(getParsedData(data))
    }, [params.interval, params.parts, params.actionType]);
    return (
        <div>
            <div>BarChart</div>
            <div className="params-topbar">
                <div>時間: </div>
                <select onChange={handleChange}>
                    {Object.keys(IntervalEnum).map(
                        (k, i)=><option value={i}>{Intervals[i].name}</option>
                    )}
                </select>
                <div>部位: </div>
                <select>
                    {Object.keys(PartsEnum).map(
                        (k, i)=><option value={i}>{Parts[i].name}</option>
                    )}
                </select>
                <div>訓練動作: </div>
                <select>
                    {Object.keys(IntervalEnum).map(
                        (k, i)=><option value={i}>{Intervals[i].name}</option>
                    )}
                </select>
            </div>
            <div>
                {data.records.map((e)=><div>{e.total_count} | {e.exercise_id}</div>)}
            </div>
            <svg></svg>
        </div>
    )
}

// const draw = (data, params) => {
//     ChartHelper.clearChart();
//     const WIDTH = 1000; //長條圖寬度
//     const HEIGHT = 240; //長條圖高度
//     const PADDING = 30; //內距
//     const YEAR = 365;
//     const WEEK = 7;
//     let timedata = []; //天數
//     let fituptime = []; //運動時數
//     // let todays = Src.gettodays(thisyear, thismonth, today);
//     const todays = 262; // 0919
//     // let actiontime = Src.getacttime(bodyparttype, actiontype);
//     const actiontime = 20;
//     let BartimeData1 = [];
//     const svg = d3.select('svg');
//     //傳入資料
//     if(params.actiontype == '全部') {
//         for(let j = 0; j < 365; j++) {
//             BartimeData1.push(0);
//         }
//         let actionnum = d3.select('#action').selectAll("option").size();
//         for(let i = 0; i < actionnum-1; i++) {
//             let actiontimesum = actiontime + YEAR * i;
//             for(let j = 0; j < 365; j++) {
//                 BartimeData1[j] += BartimeData[actiontimesum+j];
//             }
//         }
//     }
//     else {
//         for(let i = actiontime; i < actiontime + 365; i++) {
//             BartimeData1.push(BartimeData[i]);
//         }
//     }

//     //日期、繪圖輸入
//     if(timetype == 'week') { //這週
//         if((today-thisweekday-1) < 0) {
//             for(let i = 0; i < thisweekday; i++) {
//                 timedata.push((thismonth) + '/' + (Cons.month[thismonth-1]-thisweekday+1+i) + '\n' + Cons.week[i]); 
//             }
//             for(let i = 0; i < Cons.week.length-thisweekday; i++) {
//                 timedata.push((thismonth + 1) + '/' + (today+i) + '\n' + Cons.week[thisweekday+i]); 
//             }
//             for(let i = todays-thisweekday-1; i < todays; i++) {
//                 fituptime.push(BartimeData1[i]);                        
//             }
//         }
//         else {
//             for(let i = 0; i < Cons.week.length; i++) {
//                 timedata.push((thismonth + 1) + '/' + (today - thisweekday + i) + '\n' + Cons.week[i]); 
//             }
//             for(let i = todays-thisweekday-1; i < todays; i++) {
//                 fituptime.push(BartimeData1[i]);                        
//             }
//         }
//     }
//     else if(timetype == 'lastweek') { //過去7天
//         for(let i = todays-Cons.week.length; i < todays; i++) {
//             fituptime.push(BartimeData1[i]); 
//         }
//         if((today-Cons.week.length+1) <= 0) {
//             let weekcount = [];
//             let startweekday = Cons.week.length-(thisweekday+1);
//             for(let i = 0; i < startweekday; i++) {
//                 weekcount.push(Cons.week[thisweekday+1+i]); 
//             }
//             for(let i = 0; i < Cons.week.length-startweekday; i++) {                        
//                 weekcount.push(Cons.week[i]); 
//             }
//             for(let i = 0; i < Cons.week.length-today; i++) {
//                 timedata.push(thismonth + '/' + (Cons.month[thismonth - 1]-today+i) + '\n' + weekcount[i]);
//             }
//             for(let i = Cons.week.length-today; i < Cons.week.length; i++) {
//                 timedata.push((thismonth+1) + '/' + (i-(Cons.week.length-today)+1) + '\n' + weekcount[i]);
//             }
//         }
//         else {
//             let startweekday = Cons.week.length-(thisweekday+1);
//             for(let i = 0; i < startweekday; i ++) {
//                 timedata.push((thismonth + 1) + '/' + (today - 6 + i) + '\n' + Cons.week[thisweekday+1+i]); 
//             }
//             for(let i = 0; i < Cons.week.length-startweekday; i++) {                        
//                 timedata.push((thismonth + 1) + '/' + (today - thisweekday + i) + '\n' + Cons.week[i]); 
//             }
//         }
//     }
//     else if(timetype == 'month'){ //這個月
//         WIDTH = 1400;
//         for(let i = 1; i <= monthday; i++) {
//             timedata.push(i);
//         }
//         for(let i = todays-today; i < todays; i++) {
//             fituptime.push(BartimeData1[i]);
//         }
//     }
//     else if(timetype == 'lastmonth') { //過去30天
//         WIDTH = 1400;
//         for(let i = 1; i <= 30; i++) {
//             timedata.push(i);
//         }
//         for(let i = todays-30; i < todays; i++) {
//             fituptime.push(BartimeData1[i]);
//         }
//     }
//     else if(timetype == 'year') { //今年
//         for(let i = 1; i <= Cons.month.length-1; i++) {
//             timedata.push(i);
//         }
//     }
//     let max = 0; //計算圖表高度
//     for(let i = 0; i < fituptime.length; i++) {
//         if(fituptime[i] > max) {
//             max = fituptime[i];
//         }
//     }
//     for(let i = 0; i < fituptime.length; i++) {
//         fituptime[i] = Math.round(fituptime[i] * 10) / 10;
//     }
//     max = Math.ceil(max) + 1;                
//     HEIGHT = HEIGHT + (max * 40); //圖表高度
//     //圖表設定
//     svg.attr('class', 'barchart') //class名稱
//     .attr('width', WIDTH) //寬度
//     .attr('height', HEIGHT) //長度
//     .style('padding', PADDING + 'px'); //內距
//     //x, y軸長度設定
//     let xAxisWIDTH = WIDTH - (PADDING * 8); //x軸長度
//     let yAxisWIDTH = HEIGHT - (PADDING * 8); //y軸長度
//     let xScale = d3.scaleBand(); //x比例尺
//     let yScale = d3.scaleLinear(); //y比例尺
//     let selecttext = d3.select('#bodypart').select(':checked').text(); //選擇部位文字
//     //x軸定義
//     xScale.rangeRound([0, xAxisWIDTH]) //值域
//     .domain(timedata);  //定義域
//     //y軸定義
//     yScale.range([yAxisWIDTH, 0]) //值域
//     .domain([0, max])  //定義域
//     .nice();
//     //畫出x軸
//     let xAxis = d3.axisBottom(xScale) 
//     .tickSize(10);
//     //新增x軸
//     svg.append("g")
//     .call(xAxis)
//     .attr("class", "xAxis")
//     .attr("transform", "translate(" + (PADDING * 3) + "," + (HEIGHT - (PADDING * 5)) + ")")
//     .selectAll('text')
//     .style('font-family', '微軟正黑體') //x軸字體設定
//     .style('font-size', 20)
//     .style('font-weight', 'bold')                
//     //x軸標示
//     svg.append("text")
//     .attr("x", xAxisWIDTH + 130)
//     .attr("y", yAxisWIDTH + 100)
//     .attr("text-anchor", "middle")
//     .attr('class', 'xText')
//     .style("font-size", "25px")
//     .text("日期");
//     //畫出y軸
//     let yAxis = d3.axisLeft(yScale) 
//     .ticks(max).tickSize(-xAxisWIDTH);
//     //新增y軸
//     svg.append("g")
//     .call(yAxis)
//     .attr("class", "yAxis")
//     .attr("transform", "translate(" + (PADDING * 3) + "," + (PADDING * 3) + ")")
//     .selectAll('text')
//     .style('font-family', '微軟正黑體') //y軸字體設定
//     .style('font-size', 20);
//     //y軸標示
//     svg.append("text")
//     .attr("x", 100)
//     .attr("y", 60)
//     .attr("text-anchor", "middle")
//     .attr('class', 'yText')
//     .style("font-size", "25px")
//     .text("運動時長\(小時\)");
//     if(timetype == 'week' || timetype == 'lastweek') {
//         //加入時間長條
//         let bar = svg.selectAll('rect') // 畫出長條圖 
//         .data(fituptime) //設定資料
//         .join('rect') //加入rect                
//         .attr('class', 'barweektime') //調整rect的css屬性
//         .attr('fill', '#abdff1')
//         .attr('x', function(d, i) { //x座標
//             return xScale(timedata[i]) + (PADDING * 2) + 55;
//         })
//         .attr('y', function(d) { //y座標
//             return yAxisWIDTH - (d * 40) + (PADDING * 3) ;
//         })
//         .attr('HEIGHT', function(d){ //Bar高度
//             return d * 40;
//         });
//         //加入時間文字
//         let fittime = svg.append('g')
//         .attr('class', 'fittime')
//         fittime.selectAll('text')
//         .data(fituptime) //設定資料
//         .enter()
//         .append('text') //加入時數
//         .attr('x', function(d, i) { //x座標
//             return xScale(timedata[i]) + PADDING * 4 - 6;
//         })
//         .attr('y', function(d) { //y座標
//             return yAxisWIDTH - (d * 40) + (PADDING * 3) - 5;
//         })
//         .style('font-size', '18px')
//         .text(function (d) {
//             return d + '小時';
//         })
//         .style('background-color', 'black');
//         d3.select('.info').select('.todaytime').remove();
//         d3.select('.info').select('.avgtime').remove();                    
//         if(timetype == 'week') {                        
//             let avgtime = 0;
//             for(let i = 0; i < thisweekday + 1; i++) {
//                 avgtime += fituptime[i];
//             }
//             avgtime = Math.round(avgtime / (thisweekday+1) * 100) / 100;                        
//             if(actiontype == '全部') {
//                 let todaytime = d3.select('.info').append('text')
//                 .attr('class', 'todaytime')
//                 .text('今日' + selecttext + '部訓練動作的總運動時長:' + fituptime[thisweekday] + '小時');
//                 let avgtimes = d3.select('.info').append('text')
//                 .attr('class', 'avgtime')
//                 .text('這週' + selecttext + '部訓練動作的每日平均運動時長:' + avgtime + '小時');    
//             }
//             else {
//                 let todaytime = d3.select('.info').append('text')
//                 .attr('class', 'todaytime')
//                 .text('今日' + selecttext + '部-' + actiontype + '的運動時長:' + fituptime[thisweekday] + '小時');
//                 let avgtimes = d3.select('.info').append('text')
//                 .attr('class', 'avgtime')
//                 .text('這週平均每日' + selecttext + '部-' + actiontype + '的運動時長:' + avgtime + '小時');
//             }                        
//         }
//         else {
//             let avgtime = 0;
//             for(let i = 0; i < Cons.week.length; i++) {
//                 avgtime += fituptime[i];
//             }
//             avgtime = Math.round(avgtime / Cons.week.length * 100) / 100;
//             if(actiontype == '全部') {
//                 let todaytime = d3.select('.info').append('text')
//                 .attr('class', 'todaytime')
//                 .text('今日' + selecttext + '部訓練動作的總運動時長:' + fituptime[6] + '小時');
//                 let avgtimes = d3.select('.info').append('text')
//                 .attr('class', 'avgtime')
//                 .text('最近一週' + selecttext + '部訓練動作的每日平均運動時長:' + avgtime + '小時');    
//             }
//             else {
//                 let todaytime = d3.select('.info').append('text')
//                 .attr('class', 'todaytime')
//                 .text('今日' + selecttext + '部-' + actiontype + '的運動時長:' + fituptime[6] + '小時');
//                 let avgtimes = d3.select('.info').append('text')
//                 .attr('class', 'avgtime')
//                 .text('最近一週平均每日' + selecttext + '部-' + actiontype + '的運動時長:' + avgtime + '小時');
//             }                        
//         }
//     }
//     else if(timetype == 'month' || 'lastmonth'){ 
//         let bar = svg.selectAll('rect') // 畫出長條圖 
//         .data(fituptime) //設定資料
//         .join('rect') //加入rect                
//         .attr('class', 'barmonthtime') //調整rect的css屬性
//         .attr('fill', '#abdff1')
//         .attr('x', function(d, i) { //x座標
//             return xScale(timedata[i]) + PADDING * 3 + 6;
//         })
//         .attr('y', function(d) { //y座標
//             return yAxisWIDTH - (d * 40) + (PADDING * 3);
//         })
//         .attr('HEIGHT', function(d){ //Bar高度
//             return d * 40;
//         });
//         d3.select('.info').select('.todaytime').remove();
//         d3.select('.info').select('.avgtime').remove();
//         bar.on('mouseover', handleMouseOver)
//         .on('mouseleave', handleMouseLeave);
//         if(timetype == 'month') {
//             let avgtime = 0;
//             for(let i = 0; i < today; i++) {
//                 avgtime += fituptime[i];
//             }
//             avgtime = Math.round(avgtime / today * 100) / 100;
//             if(actiontype == '全部') {
//                 let todaytime = d3.select('.info').append('text')
//                 .attr('class', 'todaytime')
//                 .text('今日' + selecttext + '部訓練動作的總運動時長:' + fituptime[today-1] + '小時');
//                 let avgtimes = d3.select('.info').append('text')
//                 .attr('class', 'avgtime')
//                 .text('這個月' + selecttext + '部訓練動作的每日平均運動時長:' + avgtime + '小時');    
//             }
//             else {
//                 let todaytime = d3.select('.info').append('text')
//                 .attr('class', 'todaytime')
//                 .text('今日' + selecttext + '部-' + actiontype + '的運動時長:' + fituptime[today-1] + '小時');
//                 let avgtimes = d3.select('.info').append('text')
//                 .attr('class', 'avgtime')
//                 .text('這個月平均每日' + selecttext + '部-' + actiontype + '的運動時長:' + avgtime + '小時');
//             }  
//         }
//         else {
//             let avgtime = 0;
//             for(let i = 0; i < 30; i++) {
//                 avgtime += fituptime[i];
//             }
//             avgtime = Math.round(avgtime / 30 * 100) / 100;
//             if(actiontype == '全部') {
//                 let todaytime = d3.select('.info').append('text')
//                 .attr('class', 'todaytime')
//                 .text('今日' + selecttext + '部訓練動作的總運動時長:' + fituptime[30-1] + '小時');
//                 let avgtimes = d3.select('.info').append('text')
//                 .attr('class', 'avgtime')
//                 .text('最近一個月' + selecttext + '部訓練動作的每日平均運動時長:' + avgtime + '小時');    
//             }
//             else {
//                 let todaytime = d3.select('.info').append('text')
//                 .attr('class', 'todaytime')
//                 .text('今日' + selecttext + '部-' + actiontype + '的運動時長:' + fituptime[30-1] + '小時');
//                 let avgtimes = d3.select('.info').append('text')
//                 .attr('class', 'avgtime')
//                 .text('最近一個月平均每日' + selecttext + '部-' + actiontype + '的運動時長:' + avgtime + '小時');
//             }  
//         }
//     }
//     else if(timetype == 'year') {
//         d3.select('.info').select('.todaytime').remove();
//         d3.select('.info').select('.avgtime').remove();
//     }
//     function handleMouseOver(d, i) {
//         let rectX = +d3.select(this).attr('x');
//         if(timetype == 'month') rectX -= 15; 
//         let rectY = +d3.select(this).attr('y');
//         d3.select(this)
//         .attr('fill', '#ff1') //變色       

//         svg.append('text') // 加上文字標籤
//         .attr('class', 'infoText')
//         .attr("x", function() {
//             return rectX + 30;
//         }) //x座標
//         .attr('y', function() {
//             return rectY - 10;
//         }) //Y座標                        
//         .style('fill', '#000')
//         .style('font-size', '18px')
//         .style('font-weight', 'bold')
//         .style("text-anchor", 'middle')
//         .text(d.target.__data__ + '小時');
//     }
//     function handleMouseLeave() {
//         d3.select(this)
//         .attr('fill', '#abdff1');
//         // 移除文字標籤
//         svg.select('.infoText').remove();
//     }
// }
export default BarChart;