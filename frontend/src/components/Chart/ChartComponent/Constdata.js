//星期
export const week = ['(日)', '(一)', '(二)', '(三)', '(四)', '(五)' , '(六)'];
//各月份天數 (month[12]為二月閏年天數)
export const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//一年的天數 平年/閏年
export const year = [365, 366];
//各部位動作
export const actions = { 
    shoulder: ['全部', '啞鈴肩推', '啞鈴前平舉', '啞鈴側平舉', '俯身啞鈴飛鳥', '直立划船', '阿諾肩推', '過頭前平舉', '伏地挺身'],
    chest: ['全部', '啞鈴臥推', '啞鈴上夾胸', '窄距上斜胸推', '仰臥屈臂上拉', '平躺啞鈴飛鳥', '伏地挺身'],
    arm: ['全部', '二頭彎舉', '三頭屈伸', '錘式彎舉', '俯身啞鈴臂屈伸', '伏地挺身'],
    abs: ['全部', '仰臥起坐', '棒式', '登山式', '單車式捲腹', '仰臥抬腿'],
    leg: ['全部', '深蹲', '前跨蹲', '羅馬尼亞硬舉(啞鈴)', '啞鈴保加利亞單腿蹲', '俯臥啞鈴腿彎舉']
};
//各圖表時間選項
export const times = { 
    運動正確率: ['這個月', '最近一個月', '今年'],
    運動時長: ['這週', '最近一週', '這個月', '最近一個月', '今年'],
    運動組數: ['今天', '這週', '最近一週', '這個月', '最近一個月', '今年']
};
//各圖表時間選項value
export const timesvalue = { 
    運動正確率: ['month', 'lastmonth', 'year'],
    運動時長: ['week', 'lastweek', 'month', 'lastmonth', 'year'],
    運動組數: ['today', 'week', 'lastweek', 'month', 'lastmonth', 'year']
};
//雷達圖半徑
export const radius = 200;
//雷達圖指標的數量，即fieldNames的數量 
export const total = 5;
//弧度
export const arc = 2 * Math.PI;
//折線顏色
export const color = ['#FF0000' ,'#FF7300', '#FFBF00', '#22C32E', '#00BFFF', '#002FA7', '#6633CC', '#FF0DA6', '#000000', '#808080'];