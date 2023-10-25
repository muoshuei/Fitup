import { useEffect, useState } from "react";
import * as d3 from "d3";
import { IntervalEnum, Intervals, PartsEnum, Parts } from "../Enums/ChartEnum";
import ChartHelper from "../module/ChartHelper";
import DataProcessor from "../module/DataProcessor";
const INTERVALS = [
    IntervalEnum.Today,
    IntervalEnum.ThisWeak,
    IntervalEnum.LatestWeak,
    IntervalEnum.ThisMonth,
    IntervalEnum.LatestMonth,
    IntervalEnum.ThisYear
]
const BarChart = ({data}) => {
    const [params, setParams] = useState({
        interval: IntervalEnum.Today,
        parts: PartsEnum.Abs,
    });
    const [filteredData, setFilteredData] = useState({});
    const handleChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
         if(name == "parts" || name == "interval"){
            value = Number(value);
         }
        setParams({...params,  [name]: value});
    }
    useEffect(()=>{
        const fd = DataProcessor.parseToCountData(data.records);
        setFilteredData(fd);
        draw(fd, params.interval, params.parts);
    }, [params.interval, params.parts]);
    return (
        <div>
            <div className="params-topbar">
                <div>時間: </div>
                <select name="interval" onChange={handleChange}>
                    {INTERVALS.map((e)=><option value={e}>{Intervals[e].name}</option>)}
                </select>
                <div>部位: </div>
                <select name="parts" onChange={handleChange}>
                    {Object.keys(PartsEnum).map(
                        (k, i)=><option value={i}>{Parts[i].name}</option>
                    )}
                </select>
            </div>
            <svg></svg>
            <div>
                {data.records.map((e)=><div>{e.total_count} | {e.exercise_id}</div>)}
            </div>
            
        </div>
    )
}

const draw = (data, interval, parts) => {
    ChartHelper.clearChart();
    let width = 1200; //長條圖寬度
    let height = 720; //長條圖高度
    let padding = 30; //內距
    let max = 0;
    for(let i = 0; i < data.length; i++){
        if(data.total_count >  max){
            max = data.total_count;
        }
            
    }
    drawDimension(width, height, padding, interval, parts, max);
    drawData(data, interval, parts, width, height, padding, max);
}
const drawDimension = (width, height, padding, interval, parts, max) => {
    let xAxisWidth = width - (padding * 14); //x軸長度
    let yAxisWidth = height - (padding * 8); //y軸長度
    let actionname = Parts[parts].actions;
    let svg = d3.select('svg');

    svg.attr('class', 'barchart') //class名稱
    .attr('width', width) //寬度
    .attr('height', height) //長度
    .style('padding', padding + 'px'); //內距        
    let xScale = d3.scaleLinear(); //x比例尺
    let yScale = d3.scaleBand(); //y比例尺
    //x軸定義
    xScale.rangeRound([0, xAxisWidth]) //值域
    .domain([0, max]) //定義域
    .nice();  
    //y軸定義
    yScale.rangeRound([0, yAxisWidth]) //值域
    .domain(actionname);  //定義域
    //畫出x軸
    let xAxis = d3.axisBottom(xScale) 
    .tickSize(10);
    //新增x軸
    svg.append("g")
    .call(xAxis)
    .attr("class", "xAxis")
    .attr("transform", "translate(" + (padding * 7) + "," + (height - (padding * 5)) + ")")
    .selectAll('text')
    .style('font-family', '微軟正黑體') //x軸字體設定
    .style('font-size', 20)
    .style('font-weight', 'bold')                
    //x軸標示
    svg.append("text")
    .attr("x", xAxisWidth + 250)
    .attr("y", yAxisWidth + 100)
    .attr("text-anchor", "middle")
    .attr('class', 'xText')
    .style("font-size", "25px")
    .text("組數");
    //畫出y軸
    let yAxis = d3.axisLeft(yScale);
    //新增y軸
    svg.append("g")
    .call(yAxis)
    .attr("class", "yAxis")
    .attr("transform", "translate(" + (padding * 7) + "," + (padding * 3) + ")")
    .selectAll('text')
    .style('font-family', '微軟正黑體') //y軸字體設定
    .style('font-size', 20);
    //y軸標示
    svg.append("text")
    .attr("x", 210)
    .attr("y", 80)
    .attr("text-anchor", "middle")
    .attr('class', 'yText')
    .style("font-size", "25px")
    .text("動作名稱");
}
const drawData = (data, interval, parts, width, height, padding, max) => {
    let svg = d3.select('svg');
    let xAxisWidth = width - (padding * 14); //x軸長度
    let yAxisWidth = height - (padding * 8); //y軸長度
    let xScale = d3.scaleLinear(); //x比例尺
    let yScale = d3.scaleBand(); //y比例尺
    //x軸定義
    xScale.rangeRound([0, xAxisWidth]) //值域
    .domain([0, max]) //定義域
    .nice();  
    //y軸定義
    yScale.rangeRound([0, yAxisWidth]) //值域
    .domain(['A', 'B', 'C', 'D']);  //定義域

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
    .data([50,100,20,50]) //設定資料
    .join('rect') //加入rect                
    .attr('class', 'barsets') //調整rect的css屬性
    .attr('fill', '#abdff1')
    .attr('x', function(d) { //x座標
        return 0 + padding * 7;
    })
    .attr('y', function(d, i) { //y座標
        return yScale(['A', 'B', 'C', 'D'][i]) + space;
    })
    .attr('width', function(d) {
        return d * 10;})
    .attr('height', 240 / 4);
}
export default BarChart;