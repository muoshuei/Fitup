import { useEffect, useState } from "react";
import { ActionEnum, IntervalEnum, Intervals, Parts, PartsEnum } from "../Enums/ChartEnum";

const Histogram = ({data}) => {
  const [params, setParams] = useState({
    interval: IntervalEnum.thisMonth,
    parts: PartsEnum.Abs,
    actionType: ActionEnum.ALL,
  });
  const handleChange = (e) => {
      setParams({...params})
  }
  const getParsedData = (data) => {
      
  }
  useEffect(()=>{
      // draw(getParsedData(data))
  }, [params.interval, params.parts, params.actionType]);
  return (
      <div>
          <div>Histogram</div>
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
              {data.records.map((e)=><div>{e.total_time} | {e.date} | {e.exercise_id}</div>)}
          </div>
          <svg></svg>
      </div>
  )
}
export default Histogram;