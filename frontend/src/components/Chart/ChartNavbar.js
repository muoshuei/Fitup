import { useState } from "react";
import { ChartEnum } from "./Enums/ChartEnum";
const ChartNavbar = ({handleOnTypeChange}) => {
    const [selected, setSelected] = useState(-1);
    const sideTabs = [
        
        {
            type: ChartEnum.Hist,
            text: "運動時長統計",
        },
        {
            type: ChartEnum.Radar,
            text: "各部位動作平均正確率",
        },
        {
            type: ChartEnum.MultiRadar,
            text: "動作正確率"
        },
        {
            type: ChartEnum.Bar,
            text: "運動組數統計",
        },
    ]
    const handleSelect = (type) => {
        setSelected(type);
    }
    return (
    <div className="chart-sidetab">
        {sideTabs.map((e, i)=>
        <div 
        key={e.type} 
        onClick={()=>{
            handleOnTypeChange(e.type);
            handleSelect(e.type);
        }}
        className={`${selected===e.type?"chart-sidetab-element-selected":"chart-sidetab-element"}`}
        >
            {e.text}
        </div>)}
    </div>
    )
}
export default ChartNavbar;