export const ChartEnum = {
    Curve: 0,
    Bar: 1,
    Radar: 2,
    Hist: 3,
    MultiRadar: 4
}

export const IntervalEnum = {
    Today: 0,
    ThisYear: 1,
    ThisMonth: 2,
    ThisWeak: 3,
    LatestMonth: 4,
    LatestWeak: 5
}

export const Intervals = [
    {
        name: "今天",
    },
    {
        name: "今年",
    },
    {
        name: "這個月",
    },
    {
        name: "這周",
    },
    {
        name: "最近一個月",
    },
    {
        name: "最近一周",
    }
]

export const PartsEnum = {
    Abs: 0,
    Arm: 1,
    Chest: 2,
    Leg: 3,
    Shoulder: 4
}

export const Parts = [
    {
        name: "腹",
        abbr: ["ab1", "ab2", "ab3", "ab4", "ab5"],
        actions: ['仰臥起坐', '棒式', '登山式', '單車式捲腹', '仰臥抬腿'],
    },
    {
        name: "手",
        abbr: ["ar1", "ar2", "ar3", "ar4", "p1"],
        actions: ['二頭彎舉', '三頭屈伸', '錘式彎舉', '俯身啞鈴臂屈伸', '伏地挺身'],
    },
    {
        name: "胸",
        abbr: ["c1", "c2", "c3", "c4", "c5", "p1"],
        actions: ['啞鈴臥推', '啞鈴上夾胸', '窄距上斜胸推', '仰臥屈臂上拉', '平躺啞鈴飛鳥', '伏地挺身'],
    },
    {
        name: "腿",
        abbr: ["l1", "l2", "l3", "l4", "l5"],
        actions: ['深蹲', '前跨蹲', '羅馬尼亞硬舉(啞鈴)', '啞鈴保加利亞單腿蹲', '俯臥啞鈴腿彎舉'],
    },
    {
        name: "肩",
        abbr: ["p1", "s1", "s2", "s3", "s4", "s5", "s6","s7"],
        actions: [ '伏地挺身','啞鈴肩推', '啞鈴前平舉', '啞鈴側平舉', '俯身啞鈴飛鳥', '直立划船', '阿諾肩推', '過頭前平舉'],
    },
]

export const Colors = [
    '#FF0000',
    '#FF7300',
    '#FFBF00',
    '#22C32E',
    '#00BFFF',
    '#002FA7',
    '#6633CC',
    '#FF0DA6',
    '#000000',
    '#808080'
]

export const errorPercentage = 0.45;