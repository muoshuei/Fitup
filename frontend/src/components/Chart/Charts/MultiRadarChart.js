import { useEffect, useState } from "react";
import * as d3 from "d3"
import ChartHelper from "../module/ChartHelper";
import DataProcessor from "../module/DataProcessor";
import { Parts, PartsEnum } from "../Enums/ChartEnum";
const MultiRadarChart = ({data}) => {

    useEffect(()=>{
        draw(DataProcessor.parseToAccuracyDataV2(data.records));
    },[])
    
    return (
        <div className="svg-container">
            <svg id="svg0"></svg>
            <svg id="svg1"></svg>
            <svg id="svg2"></svg>
            <svg id="svg3"></svg>
            <svg id="svg4"></svg>
            {/* <div>
                {params.action !== "" ? 
                filteredData[params.action]?.map((e => <div>{e.avg_accuracy} | {e.exercise_id}</div>)) 
                : Object.keys(filteredData).map(
                    (k, i)=>
                        filteredData[k].map(e => 
                            <div>{e.avg_accuracy} | {e.exercise_id}</div>
                        )
                    
                )}
            </div> */}
            
        </div>
    )
}

const draw = (data) => {
    ChartHelper.clearChart();
    Object.keys(data).forEach((k, i)=>{
        const RADIUS = 95;
        const TOTAL = Parts[i].actions.length;
        const ARC = 2 * Math.PI;
        const pointsnum = [];
        for(let i = 0; i < TOTAL; i++){
            pointsnum.push(0);
        }
        data[i].map(e=>{
            const idx = Parts[i].abbr.indexOf(e.exercise_id);
            pointsnum[idx] = e.avg_accuracy;
        })
        let points = ""
        pointsnum.map((f, i)=>{
            let x = RADIUS * (f * 0.8 + 0.2) * Math.cos(((i+1) / TOTAL - 1 / 4) * ARC);
            let y = RADIUS * (f * 0.8 + 0.2) * Math.sin(((i+1) / TOTAL - 1 / 4) * ARC);
            points += x + ',' + y + ' ';
        })
        const WIDTH = 415;
        const HEIGHT = 400;
        const svg = d3.select(`#svg${k}`);
        svg.attr('class', 'radarchart')
            .attr('width',WIDTH)
            .attr('height',HEIGHT);

        const radarpointer = { //坐標軸的資料
            fieldNames: Parts[i].actions,              
        };
        //會用到的數
        const LEVEL = 5; //五角形個數

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
                let x = r * Math.cos((i / TOTAL - 1 / 4) * ARC);
                let y = r * Math.sin((i / TOTAL - 1 / 4) * ARC);
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
                        .attr('transform', "translate(" + (WIDTH/2 - 10) + ',' + (HEIGHT/2 - 20) + ')');
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
            .attr('transform', "translate(" + (WIDTH/2 - 10) + ',' + (HEIGHT/2 - 20) + ')');

        //各部位正確率文字xy計算
        let textpoint = [];
        for(let i = 1; i <= TOTAL; i++) {
            let r = RADIUS + 50;
            let x = r * Math.cos((i / TOTAL - 1 / 4) * ARC);
            let y = r * Math.sin((i / TOTAL - 1 / 4) * ARC);
            textpoint.push({
                x: x,
                y: y
            });
        }
        //各部位正確率文字
        let states = svg.append('g')
                        .attr('class', 'text')
                        .attr('transform', "translate(" + (WIDTH/2 - 10) + ',' + (HEIGHT/2 - 20) + ')');
        states.selectAll('text')
            .data(textpoint)
            .enter()
            .append('text')
            .attr('x', function(d) {
                return d.x - 30;
            })
            .attr('y', function(d) {
                return d.y ;
            })
            .text(function(d, i) {
                return radarpointer.fieldNames[i];
            }).style('font-size', '20px');

        svg.append('polygon')
            .attr('class', 'accuratepolygon')
            .attr('points', points)
            .attr('fill', '#0c4a60b7')
            .attr('stroke', '#5dc5e8')
            .attr('transform', "translate(" + (WIDTH/2 - 10) + ',' + (HEIGHT/2 - 20) + ')');
        //各部位正確率(數值)
        let states1 = svg.append('g')
                        .attr('class', 'text')
                        .attr('transform', "translate(" + (WIDTH/2 - 10) + ',' + (HEIGHT/2 - 20) + ')');
        states1.selectAll('text')
                .data(textpoint)
                .enter()
                .append('text')
                .style('WIDTH', '50px')
                .attr('x', function(d) {
                    return d.x - 30;
                })
                .attr('y', function(d) {
                    return d.y + 20;
                })
                .text(function(d,i) {
                    return (Math.round(pointsnum[i] * 10000) / 100) + '%';
                })
                .style('font-size', '20px');
        svg.append("text")
        .attr("x",25)
        .attr("y",50)
            .attr("text-anchor", "middle")
        .attr('class', 'yText')
        .style("font-size", "32px")
        .text(Parts[k].name);
        }
    )

}
export default MultiRadarChart;