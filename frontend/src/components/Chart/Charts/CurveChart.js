import { useEffect, useState } from "react";
import { IntervalEnum, Intervals, PartsEnum, Parts } from "../Enums/ChartEnum";
import ChartHelper from "../module/ChartHelper";
import "../NewChart.css";
import { fetchCurveData } from "../../../apis/chart";

const CurveChart = ({data}) => {

    const [params, setParams] = useState({
        interval: IntervalEnum.thisMonth,
        parts: PartsEnum.Abs,
        actions: [],
    });
    const handleChange = (e) => {
        setParams({...params})
    }
    
    return (
        <div>
            <div>CurveChart</div>
            <div className="params-topbar">
                <div>時間: </div>
                <select onChange={handleChange}>
                    {Object.keys(IntervalEnum).map(
                        (k, i)=><option value={i}>{Intervals[i].name}</option>
                    )}
                </select>
                <div>部位: </div>
                <select>
                    {Object.keys(PartsEnum).map(
                        (k, i)=><option value={i}>{Parts[i].name}</option>
                    )}
                </select>
                <div>訓練動作: </div>
                <select>
                    {Object.keys(IntervalEnum).map(
                        (k, i)=><option value={i}>{Intervals[i].name}</option>
                    )}
                </select>
            </div>
            <div>
                {params.interval}, {params.parts}, {params.actions}
            </div>
            <div>
                {data ? data.records.map((e => <div>{e.avg_accuracy} | {e.date} | {e.exercise_id}</div>)) : <></>}
            </div>
            <svg></svg>
        </div>
    )
}
export default CurveChart;