import * as d3 from 'd3';      
import * as Cons from './Constdata.js';
// export const timechange = (setTimeType) => { //時間改變
//     //移除圖表
//     d3.select('svg').selectAll('*').remove();
//     //時間改變
//     setTimeType(d3.select('#time').property('value'));
// }
//身體部位改變
export const bodypartchange = () => {
    //訓練動作選項改變
    let selectedOption = d3.select('#bodypart').property('value');
    let options = Cons.actions[selectedOption] || [];
    d3.select('#action').selectAll('option').remove();
    d3.select('#action').selectAll('option')
    .data(options)
    .enter()
    .append('option')
    .attr('value', d => d)
    .text(d => d);
}
//動作改變
export const actionchange = (charttype) => {
    let actiontype = d3.select('#action').property('value');
    let svg = d3.select('.chart').select('svg');
    if(charttype == 'curve') {
        if(actiontype == '全部') {
            svg.selectAll('path')
            .style('visibility', 'visible');
            svg.selectAll('polygon')
            .style('visibility', 'visible');
            svg.selectAll('text')
            .style('visibility', 'visible');
        }
        else {
            actioninfohide();
            selectedinfoshow(d3.select('#action').property('selectedIndex'));
        }
    }
    else {
        //移除圖表
        d3.select('svg').selectAll('*').remove();
    }
}
//取得日期
export function getdatedata(setThisYear, setThisMonth, setThisWeekday, setToday, setMonthday) {
    let td = new Date();
    let newDate = {
        year: td.getFullYear(),
        month: td.getMonth(),
        weekday: td.getDay(),
        day: td.getDate()
    };
    setThisYear(newDate.year); //Year
    setThisMonth(newDate.month); //Month
    setThisWeekday(newDate.weekday); //Weekday
    setToday(newDate.day); //Date
    let updatedMonth = newDate.month;
    if((updatedMonth%4 == 0 && updatedMonth%100 != 0) || updatedMonth%400 == 0) {
        setThisMonth(12);
        updatedMonth = 12;
    }
    switch (updatedMonth) {
        case 0:
            setMonthday(Cons.month[0]);
            break;
        case 1:
            setMonthday(Cons.month[1]);
            break;
        case 2:
            setMonthday(Cons.month[2]);
            break;
        case 3:
            setMonthday(Cons.month[3]);
            break;
        case 4:
            setMonthday(Cons.month[4]);
            break;
        case 5:
            setMonthday(Cons.month[5]);
            break;
        case 6:
            setMonthday(Cons.month[6]);
            break;
        case 7:
            setMonthday(Cons.month[7]);
            break;
        case 8:
            setMonthday(Cons.month[8]);
            break;
        case 9:
            setMonthday(Cons.month[9]);
            break;
        case 10:
            setMonthday(Cons.month[10]);
            break;
        case 11:
            setMonthday(Cons.month[11]);
            break;
        case 12:
            setMonthday(Cons.month[12]);
            break;
    }
}
//取得動作資料
export function getacttime(bodyparttype, actiontype) {
    let action1 = 0; //肩膀
    let action2 = action1 + Cons.year[0] * 8; //胸
    let action3 = action1 + Cons.year[0] * 14; //手
    let action4 = action1 + Cons.year[0] * 19; //腹
    let action5 = action1 + Cons.year[0] * 25; //腿
    if(bodyparttype == 'shoulder') {
        if(actiontype == '全部') {
            return action1;
        }
        else if(actiontype == '啞鈴肩推') {
            return action1;
        }
        else if(actiontype == '啞鈴前平舉') {
            return action1 + Cons.year[0];
        }
        else if(actiontype == '啞鈴側平舉') {
            return action1 + Cons.year[0] * 2;
        }
        else if(actiontype == '俯身啞鈴飛鳥') {
            return action1 + Cons.year[0] * 3;
        }
        else if(actiontype == '直立划船') {
            return action1 + Cons.year[0] * 4;
        }
        else if(actiontype == '阿諾肩推') {
            return action1 + Cons.year[0] * 5;
        }
        else if(actiontype == '過頭前平舉') {
            return action1 + Cons.year[0] * 6;
        }
        else if(actiontype == '伏地挺身') {
            return action1 + Cons.year[0] * 7;
        }
    }
    else if(bodyparttype == 'chest') {
        if(actiontype == '全部') {
            return action2;
        }
        else if(actiontype == '臥推') {
            return action2;
        }
        else if(actiontype == '伏地挺身') {
            return action2 + Cons.year[0];
        }
        else if(actiontype == '啞鈴上夾胸') {
            return action2 + Cons.year[0] * 2;
        }
        else if(actiontype == '窄距上斜胸推') {
            return action2 + Cons.year[0] * 3;
        }
        else if(actiontype == '寬臂伏地挺身') {
            return action2 + Cons.year[0] * 4;
        }
        else if(actiontype == '鑽石伏地挺身') {
            return action2 + Cons.year[0] * 5;
        }
    }
    else if(bodyparttype == 'arm') {
        if(actiontype == '全部') {
            return action3;
        }
        else if(actiontype == '伏地挺身') {
            return action3;
        }
        else if(actiontype == '二頭彎舉') {
            return action3 + Cons.year[0];
        }
        else if(actiontype == '三頭屈伸') {
            return action3 + Cons.year[0] * 2;
        }
        else if(actiontype == '三頭肌徒手撐體(反向伏地挺身)') {
            return action3 + Cons.year[0] * 3;
        }
        else if(actiontype == '拖曳式彎舉') {
            return action3 + Cons.year[0] * 4;
        }
    }
    else if(bodyparttype == 'abs') {
        if(actiontype == '全部') {
            return action4;
        }
        else if(actiontype == '仰臥起坐') {
            return action4;
        }
        else if(actiontype == '棒式') {
            return action4 + Cons.year[0];
        }
        else if(actiontype == '登山式') {
            return action4 + Cons.year[0] * 2;
        }
        else if(actiontype == '單車式捲腹') {
            return action4 + Cons.year[0] * 3;
        }
        else if(actiontype == '大字仰臥手摸對側足踝') {
            return action4 + Cons.year[0] * 4;
        }
        else if(actiontype == '派克捲腹') {
            return action4 + Cons.year[0] * 5;
        }
    }
    else if(bodyparttype == 'leg') {
        if(actiontype == '全部') {
            return action5;
        }
        else if(actiontype == '深蹲') {
            return action5;
        }
        else if(actiontype == '前跨蹲') {
            return action5 + Cons.year[0];
        }
        else if(actiontype == '寬蹲') {
            return action5 + Cons.year[0] * 2;
        }
        else if(actiontype == '後跨蹲') {
            return action5 + Cons.year[0] * 3;
        }
        else if(actiontype == '跪姿後抬左右腳') {
            return action5 + Cons.year[0] * 4;
        }
        else if(actiontype == '墊腳') {
            return action5 + Cons.year[0] * 5;
        }
    }
    return action1;
}
//取得今年到今天為止總共是幾天
export function gettodays(thisyear, thismonth, today) {
    let daysum = 0;
    if((thisyear%4 == 0 && thisyear%100 != 0) || thisyear%400 == 0) {
        if(thismonth == 12) {
            daysum = Cons.month[0] + today;
        }
        else if(thismonth > 0) {
            for(let i = 0;i < thismonth; i++) {
                daysum+= Cons.month[i];                            
            }
            daysum += 1;
        }
        daysum += today;
    }
    else {
        for(var i = 0;i < thismonth; i++) {
            daysum+= Cons.month[i];
        }
        daysum += today;
    }
    return daysum;
}
//移除運動時數的字樣
export function removefittimetext() {
    d3.select('.info').select('.todaytime').remove();
    d3.select('.info').select('.avgtime').remove();
}
//動作改變的小function
function actioninfohide() {
    let svg = d3.select('.chart').select('svg');
    for(let i = 1; i < 13; i++) {
        svg.select('#L' + i)
        .style('visibility', 'hidden');
        svg.select('#P' + i)
        .style('visibility', 'hidden'); 
        svg.select('#T' + i)
        .style('visibility', 'hidden');                
    }                
}
//動作改變的小function
function selectedinfoshow(SelectedNum) {
    let svg = d3.select('.chart').select('svg');
    svg.select('#L' + SelectedNum)
    .style('visibility', 'visible');
    svg.select('#P' + SelectedNum)
    .style('visibility', 'visible');
    if(d3.select('#bodypart').property('value') == 'arm' && SelectedNum == 4) {
        svg.select('#T' + SelectedNum)
        .style('visibility', 'visible');
        svg.select('#T' + (SelectedNum + 1))
        .style('visibility', 'visible');
    }
    else if(d3.select('#bodypart').property('value') == 'arm' && SelectedNum == 5) {
        svg.select('#T' + (SelectedNum + 1))
        .style('visibility', 'visible');
    }
    else {
        svg.select('#T' + SelectedNum)
        .style('visibility', 'visible');
    }
}