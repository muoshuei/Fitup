import { useEffect, useState } from "react";
import { IntervalEnum, Intervals, PartsEnum, Parts, Colors } from "../Enums/ChartEnum";
import * as d3 from "d3"
import ChartHelper from "../module/ChartHelper";
import "../NewChart.css";
import { fetchCurveData } from "../../../apis/chart";
import DataProcessor from "../module/DataProcessor";
const INTERVALS = [
    IntervalEnum.ThisMonth,
    IntervalEnum.LatestMonth,
    IntervalEnum.ThisYear
]
const CurveChart = ({data}) => {

    const [params, setParams] = useState({
        interval: IntervalEnum.ThisMonth,
        parts: PartsEnum.Abs,
        action: "",
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
        const fd = DataProcessor.parseToAccuracyData(data.records, params.interval, params.parts);
        setFilteredData(fd);
        draw(fd, params.interval, params.action);

    },[params.interval, params.parts]);
    useEffect(()=>{
        draw(filteredData, params.interval, params.action);

    }, [params.action]);
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
                    <option value={""}>全部</option>
                    {Object.keys(Parts[params.parts].actions).map(
                        (k, i)=><option value={Parts[params.parts].abbr[i]} key={"action" + i}>{Parts[params.parts].actions[i]}</option>
                    )}
                </select>
            </div>
            <svg></svg>
            <div>
                {params.action !== "" ? 
                filteredData[params.action]?.map((e => <div>{e.avg_accuracy} | {e.date} | {e.exercise_id}</div>)) 
                : Object.keys(filteredData).map(
                    (k, i)=>
                        filteredData[k].map(e => 
                            <div>{e.avg_accuracy} | {e.date} | {e.exercise_id}</div>
                        )
                    
                )}
            </div>
            
        </div>
    )
}

const draw = (data, interval, action) =>{
    ChartHelper.clearChart();
    let width = 1200;
    let height = 600;
    let padding = 30;
    drawDimension(width, height, padding, interval);
    drawData(data, interval, action, width, height, padding);
}
const drawDimension = (width, height, padding, interval) =>　{
    
    let xAxisWidth = width - (padding * 8);
    let yAxisWidth = height - (padding * 8);
    let timedata = [];
    switch(interval){
        case IntervalEnum.ThisMonth:
            for(let i = 1; i <= 30; i++){
                timedata.push(i);
            }
            break;
        case IntervalEnum.LatestMonth:
            for(let i = 1; i <= 30; i++){
                timedata.push(i);
            }
    }
    

    let svg = d3.select('svg');
    //設定x比例尺
    let xScale = d3.scaleBand() //x比例尺
    .rangeRound([0, xAxisWidth]) //值域
    .domain(timedata);  //定義域
    //設定y比例尺
    let yScale = d3.scaleLinear() 
    .range([yAxisWidth, 0]) //值域
    .domain([0, 100])  //定義域
    .nice();
    //圖表class修改
    svg.attr('class', 'linechart')
    .attr('width', width) //寬度
    .attr('height', height) //長度
    .style('padding', padding + 'px');
    //畫出x軸
    let xAxis = d3.axisBottom(xScale) 
    .ticks().tickSize(-yAxisWidth);
    //新增x軸
    svg.append("g")
    .call(xAxis)
    .attr("class", "xAxis")
    .attr("transform", "translate(" + (padding * 3) + "," + (height - (padding * 5)) + ")")
    .selectAll('text')
    .style('font-family', '微軟正黑體') //x軸字體設定
    .style('font-size', 20);
    //x軸標示
    svg.append("text") 
    .attr("x", xAxisWidth + 130)
    .attr("y", yAxisWidth + 100)
    .attr("text-anchor", "middle")
    .attr('class', 'xText')
    .style("font-size", "25px")
    .text("日期");
    //畫出y軸
    let yAxis = d3.axisLeft(yScale) 
    .ticks().tickSize(-xAxisWidth);
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
    .attr("x", 110)
    .attr("y", 60)
    .attr("text-anchor", "middle")
    .attr('class', 'yText')
    .style("font-size", "25px")
    .text("正確率\(%\)");
}
const drawData = (data, intervalEnum, action, width, height, padding) => {
    let xAxisWidth = width - (padding * 8);
    let yAxisWidth = height - (padding * 8);
    let svg = d3.select('svg');
    //設定x比例尺
    let xScale = d3.scaleBand() //x比例尺
    .rangeRound([0, xAxisWidth])
    .domain([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]); //值域
    //設定y比例尺
    let yScale = d3.scaleLinear() 
    .range([yAxisWidth, 0]) //值域
    .domain([0, 100])  //定義域
    .nice();
    switch(intervalEnum){
        case IntervalEnum.ThisMonth:{
            //畫出折線
            if(action !== ""){
                const lineData = [];
                const line = d3.line()
                .x(
                    (d, i)=>{
                        const date = new Date(data[action][i].date).getDate();
                        return xScale(date) + padding * 4 - 14;
                    }
                ).y(
                    (d, i)=>{
                        return (100 - (data[action][i].avg_accuracy*100)) * 3.6 + (padding * 3.2);
                    }
                );
                for(let i = 0; i < data[action]?.length; i++){
                    lineData.push({
                        x: Number(new Date(data[action][i].date).getDate()),
                        y: Number(data[action][i].avg_accuracy * 100)
                    })
                }
                svg.append('path')
                .attr('id', 'L0')
                .attr('d', line(lineData))
                .attr('fill', 'none')
                .attr('stroke', Colors[Number(action.substring(action.length - 1)) - 1])
                .attr('stroke-width', '3px');  
            }
            else{
                for(const [idx, [k, v]] of Object.entries(Object.entries(data))){
                    const lineData = [];
                    const line = d3.line()
                    .x(
                        (d, i)=>{
                            const date = new Date(v[i].date).getDate();
                            return xScale(date) + padding * 4 - 14;
                        }
                    ).y(
                        (d, i)=>{
                            return (100 - (v[i].avg_accuracy*100)) * 3.6 + (padding * 3.2);
                        }
                    );
                    for(let i = 0; i < v?.length; i++){
                        lineData.push({
                            x: Number(new Date(v[i].date).getDate()),
                            y: Number(v[i].avg_accuracy * 100)
                        })
                        
                    }
                    svg.append('path')
                    .attr('id', k)
                    .attr('d', line(lineData))
                    .attr('fill', 'none')
                    .attr('stroke', Colors[idx])
                    .attr('stroke-width', '3px');  
                }
            }
            break;
                      
        }
        case IntervalEnum.LatestMonth:{
            //畫出折線
            if(action !== ""){
                const lineData = [];
                const line = d3.line()
                .x(
                    (d, i)=>{
                        const date = new Date(data[action][i].date).getDate();
                        return xScale(date) + padding * 4 - 14;
                    }
                ).y(
                    (d, i)=>{
                        return (100 - (data[action][i].avg_accuracy*100)) * 3.6 + (padding * 3.2);
                    }
                );
                for(let i = 0; i < data[action]?.length; i++){
                    lineData.push({
                        x: Number(new Date(data[action][i].date).getDate()),
                        y: Number(data[action][i].avg_accuracy * 100)
                    })
                }
                svg.append('path')
                .attr('id', 'L0')
                .attr('d', line(lineData))
                .attr('fill', 'none')
                .attr('stroke', Colors[Number(action.substring(action.length - 1)) - 1])
                .attr('stroke-width', '3px');  
            }
            else{
                for(const [idx, [k, v]] of Object.entries(Object.entries(data))){
                    const lineData = [];
                    const line = d3.line()
                    .x(
                        (d, i)=>{
                            const date = new Date(v[i].date).getDate();
                            return xScale(date) + padding * 4 - 14;
                        }
                    ).y(
                        (d, i)=>{
                            return (100 - (v[i].avg_accuracy*100)) * 3.6 + (padding * 3.2);
                        }
                    );
                    for(let i = 0; i < v?.length; i++){
                        lineData.push({
                            x: Number(new Date(v[i].date).getDate()),
                            y: Number(v[i].avg_accuracy * 100)
                        })
                        
                    }
                    svg.append('path')
                    .attr('id', k)
                    .attr('d', line(lineData))
                    .attr('fill', 'none')
                    .attr('stroke', Colors[idx])
                    .attr('stroke-width', '3px');  
                }
            }
            break;
        }
        case IntervalEnum.ThisYear:{
            break;
        }
    }
}
export default CurveChart;