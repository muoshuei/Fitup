import { useEffect, useState } from "react"
import TopNavbar from "../TopNavbar/TopNavbar"
import { ChartEnum } from "./Enums/ChartEnum";
import ChartNavbar from "./ChartNavbar";
import BarChart from "./Charts/BarChart";
import RadarChart from "./Charts/RadarChart";
import NotFoundChart from "./Charts/NotFoundChart";
import Histogram from "./Charts/Histogram";
import "./NewChart.css";
import "./Chart.css";

import { fetchAvgAccuracyData, fetchTotalTimeData, fetchAccuracySummaryData, fetchCountsData } from "../../apis/chart";
import { useSelector } from "react-redux";
import MultiRadarChart from "./Charts/MultiRadarChart";

const NewChart = () => {
    const [chartType, setChartType] = useState(-1);
    const [data, setData] = useState({"records": []});
    const [data2, setData2] = useState({"records": []});
    const [data3, setData3] = useState({"records": []});
    const [data4, setData4] = useState({"records": []});
    const userData = useSelector((state) => state.auth?.userData)
    useEffect(()=>{
        const fetchData = async () => {
            try{
                const user_id = userData.id;
                if (user_id) {
                    const d1 = await fetchAvgAccuracyData(user_id);
                    setData(d1);
                    const d2 = await fetchTotalTimeData(user_id);
                    setData2(d2);
                    const d3 = await fetchAccuracySummaryData(user_id);
                    setData3(d3);
                    const d4 = await fetchCountsData(user_id);
                    setData4(d4);
                }
            }catch(error){
                console.error("Error fetching data:", error);
            }
        }
        fetchData();    
    },[])

    const handleOnChartTypeChange = (type) => {
        setChartType(type);
    }
    return (
    <>
        <TopNavbar></TopNavbar>
        <div className="chart-main-section">
            <ChartNavbar handleOnTypeChange={handleOnChartTypeChange}></ChartNavbar>
            <Chart key={chartType} type={chartType} data={data} data2={data2} data3={data3} data4={data4}></Chart>
        </div>
    </>
    )
}
const Chart = ({type, data, data2, data3, data4}) => {
    return (
    <div className="chart-component">
        {
            type == ChartEnum.MultiRadar ? <MultiRadarChart data={data}></MultiRadarChart> :
            type == ChartEnum.Hist ? <Histogram data={data2}></Histogram> :
            type == ChartEnum.Radar ? <RadarChart data={data3}></RadarChart> :
            type == ChartEnum.Bar ? <BarChart data={data4}></BarChart> :
            <NotFoundChart></NotFoundChart>
        }
    </div>
    )
}

export default NewChart;