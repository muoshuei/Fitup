import { ChartEnum } from "./Enums/ChartEnum";
import CurveImage from "./images/curve_chart.png";
import BarImage from "./images/bar_chart.png";
import RadarImage from "./images/curve_chart.png";
import HistImage from "./images/bar_chart_2.png";
const ChartNavbar = ({handleOnTypeChange}) => {
    const sideTabs = [
        {
            type: ChartEnum.Curve,
            text: "動作正確率"
        },
        {
            type: ChartEnum.Hist,
            text: "運動時長統計",
        },
        {
            type: ChartEnum.Radar,
            text: "各部位動作平均正確率",
        },
        {
            type: ChartEnum.Bar,
            text: "運動組數統計",
        },
    ]
    return (
    <div className="chart-sidetab">
        {sideTabs.map((e)=>
        <div 
        key={e.type} 
        onClick={()=>handleOnTypeChange(e.type)}
        className="chart-sidetab-element"
        >
            <div>{e.text}</div>
        </div>)}
    </div>
    )
}
export default ChartNavbar;