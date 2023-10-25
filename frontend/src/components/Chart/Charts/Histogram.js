import { useEffect, useState } from "react";
import * as d3 from "d3";
import ChartHelper from "../module/ChartHelper";
import { IntervalEnum, Intervals, Parts, PartsEnum } from "../Enums/ChartEnum";
import DataProcessor from "../module/DataProcessor";
const INTERVALS = [
    IntervalEnum.ThisWeak,
    IntervalEnum.LatestWeak,
    IntervalEnum.ThisMonth,
    IntervalEnum.LatestMonth,
    IntervalEnum.ThisYear
]
const Histogram = ({data}) => {
  const [params, setParams] = useState({
    interval: IntervalEnum.thisMonth,
    parts: PartsEnum.Abs,
    actionType: 0,
  });
  const handleChange = (e) => {
    const [name, value] = [e.target.name, e.target.value];
      setParams({...params,  [name]: value})
  }
  useEffect(()=>{
      draw(DataProcessor.parseToCountData(data.records), params.interval);
  }, [params.interval, params.parts, params.actionType]);
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
              <div>訓練動作: </div>
              <select name="action" onChange={handleChange}>
                    {Object.keys(Parts[params.parts].actions).map(
                        (k, i)=><option value={i}>{Parts[params.parts].actions[i]}</option>
                    )}
                </select>
          </div>
          
          <svg></svg>
          <div>
              {data.records.map((e)=><div>{e.total_time} | {e.date} | {e.exercise_id}</div>)}
          </div>
      </div>
  )
}
const draw = (data, params) => {
    ChartHelper.clearChart();
    let width = 1200; //長條圖寬度
    let height = 600; //長條圖高度
    let padding = 30; //內距:上左右下
    let interval = IntervalEnum.ThisMonth;
    drawDimension(width, height, padding, interval);
    drawData();
}
const drawDimension = (width, height, padding, interval) => {

    let max = 0;
    max = Math.ceil(max) + 1;                
    height = height + (max * 40); //圖表高度
    let xAxisWidth = width - (padding * 8); //x軸長度
    let yAxisWidth = height - (padding * 8); //y軸長度
    let timedata = [];
    for(let i = 1; i <= 30; i++){
        timedata.push(i);
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
    .text("日期");
    //畫出y軸
    let yAxis = d3.axisLeft(yScale) 
    .ticks(max).tickSize(-xAxisWidth);
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
    .text("運動時長\(小時\)");
}
const drawData = () => {

}
export default Histogram;