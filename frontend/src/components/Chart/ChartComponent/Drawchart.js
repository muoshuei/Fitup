import * as d3 from 'd3';
import * as Src from './Script.js';
import * as Cons from './Constdata.js';
export const Curve = () => { //選擇折線圖
    //其他按鈕變色
    d3.select('#accuracy').style('background-color', '#0f0c05');
    d3.select('#totaltime').style('background-color', '#0c4a60');
    d3.select('#avg_accuracy').style('background-color', '#0c4a60');
    d3.select('#totalsets').style('background-color', '#0c4a60');
    //清除圖表
    d3.select('svg').selectAll('*').remove();
    //改變時間選項
    d3.select('.select').selectAll('*')
    .style('visibility', 'visible');
    d3.select('#time').selectAll('option').remove();
    d3.select('#time').selectAll('option')
    .data(Cons.times.運動正確率)
    .enter()
    .append('option')
    .attr('value', function(d, i) {
        return Cons.timesvalue['運動正確率'][i];
    })
    .text(d => d);
    //改變圖表名字
    d3.select('#chartname').text('動作正確率');
    //移除運動時數的字樣
    Src.removefittimetext();
};
export const Bartime = () => { //選擇長條圖(運動時長)
    //其他按鈕變色
    d3.select('#accuracy').style('background-color', '#0c4a60');
    d3.select('#totaltime').style('background-color', '#0f0c05');
    d3.select('#avg_accuracy').style('background-color', '#0c4a60');
    d3.select('#totalsets').style('background-color', '#0c4a60');
    //清除圖表
    d3.select('svg').selectAll('*').remove();
    //改變時間選項
    d3.select('.select').selectAll('*')
    .style('visibility', 'visible');
    d3.select('#time').selectAll('option').remove();
    d3.select('#time').selectAll('option')
    .data(Cons.times.運動時長)
    .enter()
    .append('option')
    .attr('value', function(d, i) {
        return Cons.timesvalue['運動時長'][i];
    })
    .text(d => d);
    //改變圖表名字
    d3.select('#chartname').text('運動時長統計');
    //移除運動時數的字樣
    Src.removefittimetext();
};
export const Radar = () => { //選擇雷達圖
    //其他按鈕變色
    d3.select('#accuracy').style('background-color', '#0c4a60');
    d3.select('#totaltime').style('background-color', '#0c4a60');
    d3.select('#avg_accuracy').style('background-color', '#0f0c05');
    d3.select('#totalsets').style('background-color', '#0c4a60');
    //清除圖表
    d3.select('svg').selectAll('*').remove();
    //改變時間選項
    d3.select('.select').selectAll('*')
    .style('visibility', 'hidden');
    //改變圖表名字
    d3.select('#chartname').text('各部位動作平均正確率');
    //移除運動時數的字樣
    Src.removefittimetext();
};
export const Barsets = () => { //選擇長條圖(運動組數)
    //其他按鈕變色
    d3.select('#accuracy').style('background-color', '#0c4a60');
    d3.select('#totaltime').style('background-color', '#0c4a60');
    d3.select('#avg_accuracy').style('background-color', '#0c4a60');
    d3.select('#totalsets').style('background-color', '#0f0c05');
    //清除圖表
    d3.select('svg').selectAll('*').remove();
    //改變時間選項
    d3.select('.select').selectAll('*')
    .style('visibility', 'visible');
    d3.select('.select').select('#action')
    .style('visibility', 'hidden');
    d3.select('.select').select('.text1')
    .style('visibility', 'hidden');
    d3.select('#time').selectAll('option').remove();
    d3.select('#time').selectAll('option')
    .data(Cons.times.運動組數)
    .enter()
    .append('option')
    .attr('value', function(d, i) {
        return Cons.timesvalue['運動組數'][i];
    })
    .text(d => d);
    //改變圖表名字
    d3.select('#chartname').text('運動組數統計');
    //移除運動時數的字樣
    Src.removefittimetext();
};
//繪製折線圖
export function drawCurvechart(thisyear, thismonth, today, monthday, timetype, bodyparttype, CurveData) {
    let width = 1440; //長條圖寬度
    let height = 720; //長條圖高度
    let padding = 30; //內距:上左右下
    let xAxisWidth = width - (padding * 8) - 240; //x軸長度
    let yAxisWidth = height - (padding * 8); //y軸長度
    let xScale, yScale;
    let todays = Src.gettodays(thisyear, thismonth, today);
    let actiontime = Src.getacttime(bodyparttype, '全部');
    let actionnum = d3.select('#action').selectAll('option').nodes().length;
    let line, points;
    let timedata = [];
    let svg = d3.select('.chart').select('svg');
    //取得動作選項文字
    let optionsText = d3.selectAll("#action option")
    .nodes().map((option) => option.textContent);
    switch(timetype) {
        case 'month':
            timedata.push(0);
            for(let j = 1; j <= monthday; j++) {
                timedata.push(j);
            }
            drawcurvexy(xAxisWidth, yAxisWidth, width, height, padding, timedata);
            break;
        case 'lastmonth':
            for(let j = 1; j <= 30; j++) {
                timedata.push(j);
            }
            drawcurvexy(xAxisWidth, yAxisWidth, width, height, padding, timedata);
            break;
        case 'year':
            for(let j = 1; j <= 12; j++) {
                timedata.push(j);
            }
            drawcurvexy(xAxisWidth, yAxisWidth, width, height, padding, timedata);
            break;
    }
    //設定x比例尺
    xScale = d3.scaleBand() //x比例尺
    .rangeRound([0, xAxisWidth]) //值域
    .domain(timedata);  //定義域
    //設定y比例尺
    yScale = d3.scaleLinear() 
    .range([yAxisWidth, 0]) //值域
    .domain([0, 100])  //定義域
    .nice();
    
    for(let j = 0; j < actionnum-1; j++) {
        let data = []; 
        let actiontimesum = actiontime + Cons.year[0] * j;
        let CurveData2 = [];
        for(let k = 0; k < 365; k++) {
            CurveData2.push(CurveData[actiontimesum+k]);
        }
        switch(timetype) {
            case 'month':
                data.push({
                        x: timedata[0],
                        y: CurveData2[todays-today]
                });
                for(let k = todays-today; k < todays; k++) {
                    data.push({
                        x: timedata[k-(todays-today)+1],
                        y: CurveData2[k]
                    })                                
                }
                //線上的點資料抓取
                line = d3.line()
                .x(function (d, i) {
                    return xScale(data[i].x) + (padding * 4) - 14;
                })
                .y(function (d, i) {
                    return (100 - (data[i].y)) * 4.8 + (padding * 3);
                });
                //畫出折線
                svg.append('path')
                .attr('id', 'L' + (j + 1))
                .attr('d', line(data))
                .attr('fill', 'none')
                .attr('stroke', Cons.color[j])
                .attr('stroke-width', '5px');
                //訓練動作文字標示
                svg.append('text')
                .attr('id', 'T' + (j + 1))
                .text(optionsText[j + 1])
                .attr("text-anchor", "left")
                .attr('x', xAxisWidth + 150)
                .attr('y', 120 + (30 * j))
                .style('font-size', '25px');                
                //訓練動作顏色標示
                points = (xAxisWidth + 120) + ',' + (98 + (30 * j)) + ' ' + (xAxisWidth + 145) + ',' + (98 + (30 * j)) + ' ' + (xAxisWidth + 145) + ',' + (123 + (30 * j)) + ' ' + (xAxisWidth + 120) + ',' + (123 + (30 * j));
                    svg.append('polygon')
                    .attr('id', 'P' + (j + 1))
                    .attr('points', points)
                    .attr('stroke', Cons.color[j])
                    .attr('fill', Cons.color[j]);
                break;
            case 'lastmonth':
                for(let k = todays-30; k < todays; k++) {
                    data.push({
                        x: timedata[k-(todays-30)],
                        y: CurveData2[k]
                    })                                
                }
                //線上的點資料抓取
                line = d3.line() 
                .x(function (d, i) {
                    return xScale(data[i].x) + (padding * 4) - 14;
                })
                .y(function (d, i) {
                    return (100 - (data[i].y)) * 4.8 + (padding * 3);
                });
                //畫出折線
                svg.append('path') 
                .attr('id', 'L' + (j + 1))
                .attr('d', line(data))
                .attr('fill', 'none')
                .attr('stroke', Cons.color[j])
                .attr('stroke-width', '5px');
                //訓練動作文字標示
                svg.append('text')
                .attr('id', 'T' + (j + 1))
                .text(optionsText[j + 1])
                .attr("text-anchor", "left")
                .attr('x', xAxisWidth + 150)
                .attr('y', 120 + (30 * j))
                .style('font-size', '25px');                
                //訓練動作顏色標示
                points = (xAxisWidth + 120) + ',' + (98 + (30 * j)) + ' ' + (xAxisWidth + 145) + ',' + (98 + (30 * j)) + ' ' + (xAxisWidth + 145) + ',' + (123 + (30 * j)) + ' ' + (xAxisWidth + 120) + ',' + (123 + (30 * j));
                svg.append('polygon')
                .attr('id', 'P' + (j + 1))
                .attr('points', points)
                .attr('stroke', Cons.color[j])
                .attr('fill', Cons.color[j]);                
                break;
        }
    }
}
//繪製時間長條圖
export function drawBartimechart(thisyear, thismonth, today, thisweekday, monthday, timetype, bodyparttype, actiontype, BartimeData) {
    let width = 1000; //長條圖寬度
    let height = 240; //長條圖高度
    let padding = 30; //內距
    let timedata = []; //天數
    let fituptime = []; //運動時數
    let todays = Src.gettodays(thisyear, thismonth, today);
    let actiontime = Src.getacttime(bodyparttype, actiontype);
    let BartimeData1 = [];
    let svg = d3.select('.chart').select('svg');
    //傳入資料
    if(actiontype == '全部') {
        for(let j = 0; j < 365; j++) {
            BartimeData1.push(0);
        }
        let actionnum = d3.select('#action').selectAll("option").size();
        for(let i = 0; i < actionnum-1; i++) {
            let actiontimesum = actiontime + Cons.year[0] * i;
            for(let j = 0; j < 365; j++) {
                BartimeData1[j] += BartimeData[actiontimesum+j];
            }
        }
    }
    else {
        for(let i = actiontime; i < actiontime + 365; i++) {
            BartimeData1.push(BartimeData[i]);
        }
    }

    //日期、繪圖輸入
    if(timetype == 'week') { //這週
        if((today-thisweekday-1) < 0) {
            for(let i = 0; i < thisweekday; i++) {
                timedata.push((thismonth) + '/' + (Cons.month[thismonth-1]-thisweekday+1+i) + '\n' + Cons.week[i]); 
            }
            for(let i = 0; i < Cons.week.length-thisweekday; i++) {
                timedata.push((thismonth + 1) + '/' + (today+i) + '\n' + Cons.week[thisweekday+i]); 
            }
            for(let i = todays-thisweekday-1; i < todays; i++) {
                fituptime.push(BartimeData1[i]);                        
            }
        }
        else {
            for(let i = 0; i < Cons.week.length; i++) {
                timedata.push((thismonth + 1) + '/' + (today - thisweekday + i) + '\n' + Cons.week[i]); 
            }
            for(let i = todays-thisweekday-1; i < todays; i++) {
                fituptime.push(BartimeData1[i]);                        
            }
        }
    }
    else if(timetype == 'lastweek') { //過去7天
        for(let i = todays-Cons.week.length; i < todays; i++) {
            fituptime.push(BartimeData1[i]); 
        }
        if((today-Cons.week.length+1) <= 0) {
            let weekcount = [];
            let startweekday = Cons.week.length-(thisweekday+1);
            for(let i = 0; i < startweekday; i++) {
                weekcount.push(Cons.week[thisweekday+1+i]); 
            }
            for(let i = 0; i < Cons.week.length-startweekday; i++) {                        
                weekcount.push(Cons.week[i]); 
            }
            for(let i = 0; i < Cons.week.length-today; i++) {
                timedata.push(thismonth + '/' + (Cons.month[thismonth - 1]-today+i) + '\n' + weekcount[i]);
            }
            for(let i = Cons.week.length-today; i < Cons.week.length; i++) {
                timedata.push((thismonth+1) + '/' + (i-(Cons.week.length-today)+1) + '\n' + weekcount[i]);
            }
        }
        else {
            let startweekday = Cons.week.length-(thisweekday+1);
            for(let i = 0; i < startweekday; i ++) {
                timedata.push((thismonth + 1) + '/' + (today - 6 + i) + '\n' + Cons.week[thisweekday+1+i]); 
            }
            for(let i = 0; i < Cons.week.length-startweekday; i++) {                        
                timedata.push((thismonth + 1) + '/' + (today - thisweekday + i) + '\n' + Cons.week[i]); 
            }
        }
    }
    else if(timetype == 'month'){ //這個月
        width = 1400;
        for(let i = 1; i <= monthday; i++) {
            timedata.push(i);
        }
        for(let i = todays-today; i < todays; i++) {
            fituptime.push(BartimeData1[i]);
        }
    }
    else if(timetype == 'lastmonth') { //過去30天
        width = 1400;
        for(let i = 1; i <= 30; i++) {
            timedata.push(i);
        }
        for(let i = todays-30; i < todays; i++) {
            fituptime.push(BartimeData1[i]);
        }
    }
    else if(timetype == 'year') { //今年
        for(let i = 1; i <= Cons.month.length-1; i++) {
            timedata.push(i);
        }
    }
    let max = 0; //計算圖表高度
    for(let i = 0; i < fituptime.length; i++) {
        if(fituptime[i] > max) {
            max = fituptime[i];
        }
    }
    for(let i = 0; i < fituptime.length; i++) {
        fituptime[i] = Math.round(fituptime[i] * 10) / 10;
    }
    max = Math.ceil(max) + 1;                
    height = height + (max * 40); //圖表高度
    //圖表設定
    svg.attr('class', 'barchart') //class名稱
    .attr('width', width) //寬度
    .attr('height', height) //長度
    .style('padding', padding + 'px'); //內距
    //x, y軸長度設定
    let xAxisWidth = width - (padding * 8); //x軸長度
    let yAxisWidth = height - (padding * 8); //y軸長度
    let xScale = d3.scaleBand(); //x比例尺
    let yScale = d3.scaleLinear(); //y比例尺
    let selecttext = d3.select('#bodypart').select(':checked').text(); //選擇部位文字
    //x軸定義
    xScale.rangeRound([0, xAxisWidth]) //值域
    .domain(timedata);  //定義域
    //y軸定義
    yScale.range([yAxisWidth, 0]) //值域
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
    if(timetype == 'week' || timetype == 'lastweek') {
        //加入時間長條
        let bar = svg.selectAll('rect') // 畫出長條圖 
        .data(fituptime) //設定資料
        .join('rect') //加入rect                
        .attr('class', 'barweektime') //調整rect的css屬性
        .attr('fill', '#abdff1')
        .attr('x', function(d, i) { //x座標
            return xScale(timedata[i]) + (padding * 2) + 55;
        })
        .attr('y', function(d) { //y座標
            return yAxisWidth - (d * 40) + (padding * 3) ;
        })
        .attr('height', function(d){ //Bar高度
            return d * 40;
        });
        //加入時間文字
        let fittime = svg.append('g')
        .attr('class', 'fittime')
        fittime.selectAll('text')
        .data(fituptime) //設定資料
        .enter()
        .append('text') //加入時數
        .attr('x', function(d, i) { //x座標
            return xScale(timedata[i]) + padding * 4 - 6;
        })
        .attr('y', function(d) { //y座標
            return yAxisWidth - (d * 40) + (padding * 3) - 5;
        })
        .style('font-size', '18px')
        .text(function (d) {
            return d + '小時';
        })
        .style('background-color', 'black');
        d3.select('.info').select('.todaytime').remove();
        d3.select('.info').select('.avgtime').remove();                    
        if(timetype == 'week') {                        
            let avgtime = 0;
            for(let i = 0; i < thisweekday + 1; i++) {
                avgtime += fituptime[i];
            }
            avgtime = Math.round(avgtime / (thisweekday+1) * 100) / 100;                        
            if(actiontype == '全部') {
                let todaytime = d3.select('.info').append('text')
                .attr('class', 'todaytime')
                .text('今日' + selecttext + '部訓練動作的總運動時長:' + fituptime[thisweekday] + '小時');
                let avgtimes = d3.select('.info').append('text')
                .attr('class', 'avgtime')
                .text('這週' + selecttext + '部訓練動作的每日平均運動時長:' + avgtime + '小時');    
            }
            else {
                let todaytime = d3.select('.info').append('text')
                .attr('class', 'todaytime')
                .text('今日' + selecttext + '部-' + actiontype + '的運動時長:' + fituptime[thisweekday] + '小時');
                let avgtimes = d3.select('.info').append('text')
                .attr('class', 'avgtime')
                .text('這週平均每日' + selecttext + '部-' + actiontype + '的運動時長:' + avgtime + '小時');
            }                        
        }
        else {
            let avgtime = 0;
            for(let i = 0; i < Cons.week.length; i++) {
                avgtime += fituptime[i];
            }
            avgtime = Math.round(avgtime / Cons.week.length * 100) / 100;
            if(actiontype == '全部') {
                let todaytime = d3.select('.info').append('text')
                .attr('class', 'todaytime')
                .text('今日' + selecttext + '部訓練動作的總運動時長:' + fituptime[6] + '小時');
                let avgtimes = d3.select('.info').append('text')
                .attr('class', 'avgtime')
                .text('最近一週' + selecttext + '部訓練動作的每日平均運動時長:' + avgtime + '小時');    
            }
            else {
                let todaytime = d3.select('.info').append('text')
                .attr('class', 'todaytime')
                .text('今日' + selecttext + '部-' + actiontype + '的運動時長:' + fituptime[6] + '小時');
                let avgtimes = d3.select('.info').append('text')
                .attr('class', 'avgtime')
                .text('最近一週平均每日' + selecttext + '部-' + actiontype + '的運動時長:' + avgtime + '小時');
            }                        
        }
    }
    else if(timetype == 'month' || 'lastmonth'){ 
        let bar = svg.selectAll('rect') // 畫出長條圖 
        .data(fituptime) //設定資料
        .join('rect') //加入rect                
        .attr('class', 'barmonthtime') //調整rect的css屬性
        .attr('fill', '#abdff1')
        .attr('x', function(d, i) { //x座標
            return xScale(timedata[i]) + padding * 3 + 6;
        })
        .attr('y', function(d) { //y座標
            return yAxisWidth - (d * 40) + (padding * 3);
        })
        .attr('height', function(d){ //Bar高度
            return d * 40;
        });
        d3.select('.info').select('.todaytime').remove();
        d3.select('.info').select('.avgtime').remove();
        bar.on('mouseover', handleMouseOver)
        .on('mouseleave', handleMouseLeave);
        if(timetype == 'month') {
            let avgtime = 0;
            for(let i = 0; i < today; i++) {
                avgtime += fituptime[i];
            }
            avgtime = Math.round(avgtime / today * 100) / 100;
            if(actiontype == '全部') {
                let todaytime = d3.select('.info').append('text')
                .attr('class', 'todaytime')
                .text('今日' + selecttext + '部訓練動作的總運動時長:' + fituptime[today-1] + '小時');
                let avgtimes = d3.select('.info').append('text')
                .attr('class', 'avgtime')
                .text('這個月' + selecttext + '部訓練動作的每日平均運動時長:' + avgtime + '小時');    
            }
            else {
                let todaytime = d3.select('.info').append('text')
                .attr('class', 'todaytime')
                .text('今日' + selecttext + '部-' + actiontype + '的運動時長:' + fituptime[today-1] + '小時');
                let avgtimes = d3.select('.info').append('text')
                .attr('class', 'avgtime')
                .text('這個月平均每日' + selecttext + '部-' + actiontype + '的運動時長:' + avgtime + '小時');
            }  
        }
        else {
            let avgtime = 0;
            for(let i = 0; i < 30; i++) {
                avgtime += fituptime[i];
            }
            avgtime = Math.round(avgtime / 30 * 100) / 100;
            if(actiontype == '全部') {
                let todaytime = d3.select('.info').append('text')
                .attr('class', 'todaytime')
                .text('今日' + selecttext + '部訓練動作的總運動時長:' + fituptime[30-1] + '小時');
                let avgtimes = d3.select('.info').append('text')
                .attr('class', 'avgtime')
                .text('最近一個月' + selecttext + '部訓練動作的每日平均運動時長:' + avgtime + '小時');    
            }
            else {
                let todaytime = d3.select('.info').append('text')
                .attr('class', 'todaytime')
                .text('今日' + selecttext + '部-' + actiontype + '的運動時長:' + fituptime[30-1] + '小時');
                let avgtimes = d3.select('.info').append('text')
                .attr('class', 'avgtime')
                .text('最近一個月平均每日' + selecttext + '部-' + actiontype + '的運動時長:' + avgtime + '小時');
            }  
        }
    }
    else if(timetype == 'year') {
        d3.select('.info').select('.todaytime').remove();
        d3.select('.info').select('.avgtime').remove();
    }
    function handleMouseOver(d, i) {
        let rectX = +d3.select(this).attr('x');
        if(timetype == 'month') rectX -= 15; 
        let rectY = +d3.select(this).attr('y');
        d3.select(this)
        .attr('fill', '#ff1') //變色       

        svg.append('text') // 加上文字標籤
        .attr('class', 'infoText')
        .attr("x", function() {
            return rectX + 30;
        }) //x座標
        .attr('y', function() {
            return rectY - 10;
        }) //Y座標                        
        .style('fill', '#000')
        .style('font-size', '18px')
        .style('font-weight', 'bold')
        .style("text-anchor", 'middle')
        .text(d.target.__data__ + '小時');
    }
    function handleMouseLeave() {
        d3.select(this)
        .attr('fill', '#abdff1');
        // 移除文字標籤
        svg.select('.infoText').remove();
    }
}
//繪製雷達圖(運動時長)
export function drawRadarchart(radius, total, arc, fivepoint, fivepointnum, CurveData) { //繪製雷達圖(運動時長)
    let width = 1000;
    let height = 650;
    let svg = d3.select('.chart').select('svg');
    svg.attr('class', 'radarchart')
    .attr('width',width)
    .attr('height',height);
    let radarpointer = { //坐標軸的資料
        fieldNames: ['肩','胸','手','腹','腿'],
        value: [CurveData[0],CurveData[1],CurveData[2],CurveData[3],CurveData[4]]                
    };
    //會用到的數
    let level = 5; //五角形個數
    //網軸的範圍，坐標軸
    let rangeMin = 0;
    var rangeMax = 100;
    //網軸的五角形的座標
    let polygons = {
        webs: [],
        webPoints: []
    };
    for(let k = level ; k > 0 ; k--) { //從小到大，五邊形
        let webs = '',
                webPoints = [];
        let r = radius/level * k;
        for(let i= 1; i <= total ; i++) { //指標的數量
            let x = r * Math.cos((i / 5 - 1 / 4) * arc);
            let y = r * Math.sin((i / 5 - 1 / 4) * arc);
            webs += x + ',' + y + ' ';
            webPoints.push({
                x: x,
                y: y
            });
        }
        polygons.webs.push(webs);
        polygons.webPoints.push(webPoints);
    }
    //繪製網軸
    let webs = svg.append('g')
    .attr('class', 'webs')
    .attr('transform', "translate(" + (width/2 - 30) + ',' + (height/2 - 20) + ')');
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
    .attr('transform', "translate(" + (width/2 - 30) + ',' + (height/2 - 20) + ')');
    //各部位正確率文字xy計算
    let textpoint = [];

    for(let i = 1; i <= total; i++) {
        let r = radius + 50;
        let x = r * Math.cos((i / 5 - 1 / 4) * arc);
        let y = r * Math.sin((i / 5 - 1 / 4) * arc);
        textpoint.push({
            x: x,
            y: y
        });
    }
    //各部位正確率文字
    let states = svg.append('g')
    .attr('class', 'text')
    .attr('transform', "translate(" + (width/2 - 30) + ',' + (height/2 - 20) + ')');
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
    })
    //正確率
    let accuracy = svg.append('polygon')
    .attr('class', 'accuratepolygon')
    .attr('points', fivepoint)
    .attr('fill', '#0c4a60b7')
    .attr('stroke', '#5dc5e8')
    .attr('transform', "translate(" + (width/2 - 30) + ',' + (height/2 - 20) + ')');
    //各部位正確率(數值)
    let states1 = svg.append('g')
    .attr('class', 'text')
    .attr('transform', "translate(" + (width/2 - 30) + ',' + (height/2 - 20) + ')');
    states1.selectAll('text')
    .data(textpoint)
    .enter()
    .append('text')
    .style('width', '65px')
    .attr('x', function(d) {
        return d.x - 30;
    })
    .attr('y', function(d) {
        return d.y + 40;
    })
    .text(function(d,i) {
        return fivepointnum[i] + '%';
    })
    .style('font-size', '20px');
}

export function drawBarsetschart(thisyear, thismonth, today, thisweekday, monthday, timetype, bodyparttype, BarsetsData) { //繪製長條圖(運動組數)
    let width = 1200; //長條圖寬度
    let height = 720; //長條圖高度
    let padding = 30; //內距
    let actionname = actname(bodyparttype);
    let fitupsets = []; //運動組數
    let todays = Src.gettodays(thisyear, thismonth, today);
    let actionnum = d3.select('#action').selectAll('option').nodes().length - 1;
    let actiontime = gettime(bodyparttype);
    let svg = d3.select('.chart').select('svg');
    //繪圖輸入
    if(timetype == 'today') {
        for(let i = 0; i < actionname.length; i++) {
            let sum = BarsetsData[actiontime+today+Cons.year[0]*i];
            fitupsets.push(sum);
        }
    }
    if(timetype == 'week') { //這週
        for(let i = actiontime; i < actiontime + Cons.year[0] * actionnum; i = i + Cons.year[0]) {
            let sum = 0;
            for(let j = i + today - (thisweekday + 1); j < i + todays; j++) {
                sum += BarsetsData[j];
            }
            fitupsets.push(sum);
        }
    }
    else if(timetype == 'lastweek') { //過去7天

    }
    else if(timetype == 'month'){ //這個月

    }
    else if(timetype == 'lastmonth') { //過去30天

    }
    else if(timetype == 'year') { //今年
    //         //判斷是否為閏年
    // if((thisyear%4 == 0 && thisyear%100 != 0) || thisyear%400 == 0) {
    //     for(let i = actiontime; i < actiontime + Cons.year[0] + 1; i++) { //多一天
    //         BarsetsData1.push(BarsetsData[i]);
    //     }
    // }
    // else {
    //     for(let i = actiontime; i < actiontime + Cons.year[0]; i++) {
    //         BarsetsData1.push(BarsetsData[i]);
    //     }
    // }
    }
    //圖表設定
    svg.attr('class', 'barchart') //class名稱
    .attr('width', width) //寬度
    .attr('height', height) //長度
    .style('padding', padding + 'px'); //內距
    //x, y軸長度設定
    let xAxisWidth = width - (padding * 14); //x軸長度
    let yAxisWidth = height - (padding * 8); //y軸長度
    let xScale = d3.scaleLinear(); //x比例尺
    let yScale = d3.scaleBand(); //y比例尺
    let selecttext = d3.select('#bodypart').select(':checked').text(); //選擇部位文字
    let max = 0;
    for(let i = 0; i < fitupsets.length; i++) {
        if(fitupsets[i] > max) {
            max = fitupsets[i];
        }
    }   
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
    let space = 0;
    if(bodyparttype == 'shoulder') {
        space = 100;
    }
    else if(bodyparttype == 'chest') {
        space = 110;
    }
    else {
        space = 118;
    }

    let bar = svg.selectAll('rect') // 畫出長條圖 
    .data(fitupsets) //設定資料
    .join('rect') //加入rect                
    .attr('class', 'barsets') //調整rect的css屬性
    .attr('fill', '#abdff1')
    .attr('x', function(d) { //x座標
        return 0 + padding * 7;
    })
    .attr('y', function(d, i) { //y座標
        return yScale(actionname[i]) + space;
    })
    .attr('width', function(d) {
        return d * 10;})
    .attr('height', 240 / actionnum);
}

function gettime(bodyparttype) {
    let action1 = 0; //肩膀
    let action2 = action1 + Cons.year[0] * 8; //胸
    let action3 = action1 + Cons.year[0] * 14; //手
    let action4 = action1 + Cons.year[0] * 19; //腹
    let action5 = action1 + Cons.year[0] * 25; //腿
    if(bodyparttype == 'shoulder') {
        return action1;
    }
    else if(bodyparttype == 'chest') {
        return action2;
    }
    else if(bodyparttype == 'arm') {
        return action3;
    }
    else if(bodyparttype == 'abs') {
        return action4;
    }
    else if(bodyparttype == 'leg') {
        return action5;
    }
    return action1;
}

function actname(bodyparttype) {
    if(bodyparttype == 'shoulder') {
        let array = [];
        for(let i = 1; i < Cons.actions.shoulder.length; i++) {
            array.push(Cons.actions.shoulder[i]);
        }
        return array;
    }
    else if(bodyparttype == 'chest') {
        let array = [];
        for(let i = 1; i < Cons.actions.chest.length; i++) {
            array.push(Cons.actions.chest[i]);
        }
        return array;
    }
    else if(bodyparttype == 'arm') {
        let array = [];
        for(let i = 1; i < Cons.actions.arm.length; i++) {
            array.push(Cons.actions.arm[i]);
        }
        return array;
    }
    else if(bodyparttype == 'abs') {
        let array = [];
        for(let i = 1; i < Cons.actions.abs.length; i++) {
            array.push(Cons.actions.abs[i]);
        }
        return array;
    }
    else if(bodyparttype == 'leg') {
        let array = [];
        for(let i = 1; i < Cons.actions.leg.length; i++) {
            array.push(Cons.actions.leg[i]);
        }
        return array;
    }
    else {
        return null;
    }
}

function drawcurvexy(xAxisWidth, yAxisWidth, width, height, padding, timedata) {
    let svg = d3.select('.chart').select('svg');
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