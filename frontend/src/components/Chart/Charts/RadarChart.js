import { useEffect, useState } from "react";
import * as d3 from "d3"
import ChartHelper from "../module/ChartHelper";
import DataProcessor from "../module/DataProcessor";
const RadarChart = ({data}) => {
    useEffect(()=>{
        draw(DataProcessor.parseToAvgAccuracyData(data.records));
    },[])
    
    return (
        <div className="svg-container">
            <svg></svg> 
        </div>
    )
}

const draw = (data) => {
    ChartHelper.clearChart();
    const RADIUS = 200;
    const TOTAL = 5;
    const ARC = 2 * Math.PI;
    
    const fivepointnum = [0,0,0,0,0];

    data.map(e=>{
        fivepointnum[e.part_id - 1] = e.accuracy;
    })
    let fivepoint = ""
    fivepointnum.map((f, i)=>{
        let x = RADIUS * (f * 0.8 + 0.2) * Math.cos(((i+1) / 5 - 1 / 4) * ARC);
        let y = RADIUS * (f * 0.8 + 0.2) * Math.sin(((i+1) / 5 - 1 / 4) * ARC);
        fivepoint += x + ',' + y + ' ';
    })
    const WIDTH = 1000;
    const HEIGHT = 650;
    const svg = d3.select('svg');
    svg.attr('class', 'radarchart')
        .attr('width',WIDTH)
        .attr('height',HEIGHT);

    const radarpointer = { //坐標軸的資料
        fieldNames: ['腹','手','胸','腿','肩'],              
    };
    //會用到的數
   const LEVEL = 5; //五角形個數
    const errorPercentage = 0.35;
    //網軸的五角形的座標
    let polygons = {
        webs: [],
        webPoints: []
    };
    for(let k = LEVEL ; k > 0 ; k--) { //從小到大，五邊形
        let tmpWebs = '';
        let tmpWebPoints = [];
        let r = RADIUS/LEVEL * k;
        for(let i= 1; i <= TOTAL ; i++) { //指標的數量
            let x = r * Math.cos((i / 5 - 1 / 4) * ARC);
            let y = r * Math.sin((i / 5 - 1 / 4) * ARC);
            tmpWebs += x + ',' + y + ' ';
            tmpWebPoints.push({
                x: x,
                y: y
            });
        }
        polygons.webs.push(tmpWebs);
        polygons.webPoints.push(tmpWebPoints);
    }
    //繪製網軸
    const webs = svg.append('g')
                    .attr('class', 'webs')
                    .attr('transform', "translate(" + (WIDTH/2 - 30) + ',' + (HEIGHT/2 - 20) + ')');
    webs.selectAll('polygon')
        .data(polygons.webs)
        .enter()
        .append('polygon')                    
        .attr('points', function(d) {
            return d;
        })                
    //新增軸線
    let lines = svg.append('g')
                    .attr('class', 'lines');
    //繪製軸線
    lines.selectAll('line')
        .data(polygons.webPoints[0])
        .enter()
        .append('line')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', function(d) {
            return d.x;
        })
        .attr('y2', function(d) {
            return d.y;
        })
        .attr('stroke', 'black')
        .style('stroke-dasharray', '10 5')
        .attr('transform', "translate(" + (WIDTH/2 - 30) + ',' + (HEIGHT/2 - 20) + ')');

    //各部位正確率文字xy計算
    let textpoint = [];
    for(let i = 1; i <= TOTAL; i++) {
        let r = RADIUS + 50;
        let x = r * Math.cos((i / 5 - 1 / 4) * ARC);
        let y = r * Math.sin((i / 5 - 1 / 4) * ARC);
        textpoint.push({
            x: x,
            y: y
        });
    }
    //各部位正確率文字
    let states = svg.append('g')
                    .attr('class', 'text')
                    .attr('transform', "translate(" + (WIDTH/2 - 30) + ',' + (HEIGHT/2 - 20) + ')');
    states.selectAll('text')
        .data(textpoint)
        .enter()
        .append('text')
        .attr('x', function(d) {
            return d.x - 15;
        })
        .attr('y', function(d) {
            return d.y + 15;
        })
        .text(function(d, i) {
            return radarpointer.fieldNames[i];
        }).attr('class', function(d, i){
            if(fivepointnum[i] <= errorPercentage) return 'chart-red-text';
        });

    svg.append('polygon')
        .attr('class', 'accuratepolygon')
        .attr('points', fivepoint)
        .attr('fill', '#0c4a60b7')
        .attr('stroke', '#5dc5e8')
        .attr('transform', "translate(" + (WIDTH/2 - 30) + ',' + (HEIGHT/2 - 20) + ')');
    //各部位正確率(數值)
    let states1 = svg.append('g')
                    .attr('class', 'text')
                    .attr('transform', "translate(" + (WIDTH/2 - 30) + ',' + (HEIGHT/2 - 20) + ')');
    states1.selectAll('text')
            .data(textpoint)
            .enter()
            .append('text')
            .style('WIDTH', '65px')
            .attr('x', function(d) {
                return d.x - 30;
            })
            .attr('y', function(d) {
                return d.y + 40;
            })
            .text(function(d,i) {
                return (Math.round(fivepointnum[i] * 10000) / 100) + '%';
            })
            .style('font-size', '20px')
            .attr('class', function(d, i){
                if(fivepointnum[i] <= errorPercentage) return 'chart-red-text';
            });
}
export default RadarChart;