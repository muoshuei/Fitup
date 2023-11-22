import { useEffect, useState } from "react";
import * as d3 from "d3";
import ChartHelper from "../module/ChartHelper";
import { IntervalEnum, Intervals, Parts, PartsEnum } from "../Enums/ChartEnum";
import DataProcessor from "../module/DataProcessor";
const INTERVALS = [
    IntervalEnum.LatestWeak,
    IntervalEnum.LatestMonth
]
const Histogram = ({data}) => {
    const [params, setParams] = useState({
        interval: IntervalEnum.LatestWeak,
        parts: PartsEnum.Abs,
        action: "ab1",
    });
    const [filteredData, setFilteredData] = useState({});
    const handleChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        if(name === "parts" || name === "interval"){
            value = Number(value);
        }
        if(name === "parts"){
            setParams({...params, [name]: value, "action": Parts[value].abbr[0]});
        }
        else{
            setParams({...params,  [name]: value});
        }
        
    }
    useEffect(()=>{
        const fd = DataProcessor.parseToTimeData(data.records, params.interval, params.parts);
        setFilteredData(fd);
        draw(fd, params.interval, params.parts, params.action);
    },[])
    useEffect(()=>{
        const fd = DataProcessor.parseToTimeData(data.records, params.interval, params.parts);
        setFilteredData(fd);
        draw(fd, params.interval, params.parts, params.action);
    }, [params.interval, params.action]);
    return (
        <div>
            <div className="params-topbar">
                <div>時間: </div>
                <select name="interval" onChange={handleChange}>
                    {INTERVALS.map((e)=><option value={e} key={"interval" + e}>{Intervals[e].name}</option>)}
                </select>
                <div>部位: </div>
                <select name="parts" onChange={handleChange}>
                {Object.keys(PartsEnum).map(
                        (k, i)=><option value={i} key={"part" + i}>{Parts[i].name}</option>
                    )}
                </select>
                <div>訓練動作: </div>
                <select name="action" onChange={handleChange}>
                    {/* <option value={""}>全部</option> */}
                    {Object.keys(Parts[params.parts].actions).map(
                        (k, i)=><option value={Parts[params.parts].abbr[i]} key={"action" + i}>{Parts[params.parts].actions[i]}</option>
                    )}
                 </select>
            </div>
            <div className="svg-container">  
                <svg></svg>
            </div>
            
            {/* <div>
                {params.action !== "" ? 
                    filteredData[params.action]?.map((e => <div>{e.total_time} | {e.date} | {e.exercise_id}</div>)) 
                    : filteredData[""]?.map(e => 
                        <div>{e.total_time} | {e.date} | {e.exercise_id}</div>
                    )   }
            </div> */}
        </div>
    )
}
const draw = (data, interval, parts, action) => {
    ChartHelper.clearChart();
    let width = 1200; //長條圖寬度
    let height = 600; //長條圖高度
    let padding = 30; //內距:上左右下
    let max = 0;

    //TODO: fix how max is obtained
    Object.keys(data).forEach(e => {
        for(let i = 0; i < data[e].length; i++){
            if(Number(data[e][i].total_time) > max){
                max = Number(data[e][i].total_time);
            }
        }
    })
    
    max = Math.ceil(max / 10) * 10;
    drawDimension(width, height, padding, interval, max);
    drawData(data, interval, parts, action, width, height, padding, max);
}
const drawDimension = (width, height, padding, interval, max) => {              
    // height = height + (max * 40); //圖表高度
    let xAxisWidth = width - (padding * 8); //x軸長度
    let yAxisWidth = height - (padding * 8); //y軸長度
    let timedata = [];
    if(interval === IntervalEnum.LatestMonth){
        for(let i = 29; i >= 1; i--){
            timedata.push(i);
        }
        timedata.push("今");
    }
    else if(interval === IntervalEnum.LatestWeak){
        for(let i = 6; i >= 1; i--){
            timedata.push(i);
        }
        timedata.push("今");
    }
    
    let svg = d3.select('svg');
    //圖表設定
    svg.attr('class', 'histogram') //class名稱
    .attr('width', width) //寬度
    .attr('height', height) //長度
    .style('padding', padding + 'px'); //內距
    
    //x軸定義
    let xScale = d3.scaleBand()
    .rangeRound([0, xAxisWidth]) //值域
    .domain(timedata);  //定義域
    //y軸定義
    let yScale = d3.scaleLinear()
    .range([yAxisWidth, 0]) //值域
    .domain([0, max])  //定義域
    .nice();
    
    //畫出x軸
    let xAxis = d3.axisBottom(xScale) 
    .tickSize(10);
    //新增x軸
    svg.append("g")
    .call(xAxis)
    .attr("class", "xAxis")
    .attr("transform", "translate(" + (padding * 3) + "," + (height - (padding * 5)) + ")")
    .selectAll('text')
    .style('font-family', '微軟正黑體') //x軸字體設定
    .style('font-size', 20)
    .style('font-weight', 'bold')                
    //x軸標示
    svg.append("text")
    .attr("x", xAxisWidth + 130)
    .attr("y", yAxisWidth + 100)
    .attr("text-anchor", "middle")
    .attr('class', 'xText')
    .style("font-size", "25px")
    .text("日(前)");
    //畫出y軸
    let yAxis = d3.axisLeft(yScale) 
    .ticks(10).tickSize(-xAxisWidth);
    //新增y軸
    svg.append("g")
    .call(yAxis)
    .attr("class", "yAxis")
    .attr("transform", "translate(" + (padding * 3) + "," + (padding * 3) + ")")
    .selectAll('text')
    .style('font-family', '微軟正黑體') //y軸字體設定
    .style('font-size', 20);
    //y軸標示
    svg.append("text")
    .attr("x", 100)
    .attr("y", 60)
    .attr("text-anchor", "middle")
    .attr('class', 'yText')
    .style("font-size", "25px")
    .text("運動時長\(秒\)");
    
}
const drawData = (data, interval, parts, action, width, height, padding, max) => {
    let svg = d3.select('svg');
    let fituptime = []
    let timedata = [];
    let barWidth = 30;
    let sum = 0;
    if(interval === IntervalEnum.LatestMonth){
        for(let i = 1; i <= 30; i++){
            timedata.push(i);
            fituptime.push(0);
        }
        barWidth = 30;
        data[action]?.forEach(e => {
            const dateString = e.date;
            const date = new Date(dateString);
            const dateCurrent = new Date();
            const timeDifference = dateCurrent - date;
            const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            fituptime[29 - daysDifference] = e.total_time;
            sum += Number(e.total_time);
        });
        svg.append("text")
        .attr("x", width / 2)
        .attr("y", 50)
        .attr("text-anchor", "middle")
        .attr('class', 'yText')
        .style("font-size", "32px")
        .text(`三十日共做${Math.round(sum/60*100)/100}分鐘`);
    }
    else if(interval === IntervalEnum.LatestWeak){
        for(let i = 1; i <= 7; i++){
            timedata.push(i);
            fituptime.push(0);
        }
        barWidth = 130;
        data[action]?.forEach(e => {
            const dateString = e.date;
            const date = new Date(dateString);
            const dateCurrent = new Date();
            const timeDifference = dateCurrent - date;
            const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            fituptime[6 - daysDifference] = e.total_time;
            sum += Number(e.total_time);
        });
        svg.append("text")
        .attr("x", width / 2)
        .attr("y", 50)
        .attr("text-anchor", "middle")
        .attr('class', 'yText')
        .style("font-size", "32px")
        .text(`七天共做${Math.round(sum/60*100)/100}分鐘`);
    }
    
    let xAxisWidth = width - (padding * 8); //x軸長度
    //x軸定義
    let xScale = d3.scaleBand()
    .rangeRound([0, xAxisWidth]) //值域
    .domain(timedata);  //定義域
    let yAxisWidth = height - (padding * 8); //y軸長度
    let rate = yAxisWidth / max;
    let yScale = d3.scaleLinear()
    .range([yAxisWidth, 0]) //值域
    .domain([0, max])  //定義域
    .nice();
    let space = 0;
    if(parts == PartsEnum.Shoulder) {
        space = 100;
    }
    else if(parts == PartsEnum.Chest) {
        space = 110;
    }
    else {
        space = 118;
    }
    let bar = svg.selectAll('rect') // 畫出長條圖 
    .data(fituptime) //設定資料
    .join('rect') //加入rect                
    .attr('class', 'bartime') //調整rect的css屬性
    .attr('fill', '#abdff1')
    .attr('x', function(d, i) { //x座標
        return xScale(timedata[i]) + (padding * 3);
    })
    .attr('y', function(d) { //y座標
        return yAxisWidth - (d * rate) + (padding * 3) ;
    })
    .attr('height', function(d){ //Bar高度
        return d * rate;
    })
    .attr('width', function(d){
        return barWidth;
    }
    );
    bar.on('mouseover', handleMouseOver)
    .on('mouseleave', handleMouseLeave);
    function handleMouseOver(d, i) {
        let rectX = Number(d3.select(this).attr('x'));
        let rectY = Number(d3.select(this).attr('y'));
        let width = Number(d3.select(this).attr('width'))
        d3.select(this)
        .attr('fill', '#ff1') //變色       

        svg.append('text') // 加上文字標籤
        .attr('class', 'infoText')
        .attr("x", function() {
            return rectX + width/2;
        }) //x座標
        .attr('y', function() {
            return rectY - 10;
        }) //Y座標                        
        .style('fill', '#000')
        .style('font-size', '18px')
        .style('font-weight', 'bold')
        .style("text-anchor", 'middle')
        .text(d.target.__data__);
    }
    function handleMouseLeave() {
        d3.select(this)
        .attr('fill', '#abdff1');
        // 移除文字標籤
        svg.select('.infoText').remove();
    }
    if(!data[action]){
        svg.append("text")
        .attr("x", width / 2)
        .attr("y", height / 2)
        .attr("text-anchor", "middle")
        .attr('class', 'yText')
        .style("font-size", "32px")
        .text("無資料");
    }
}
export default Histogram;