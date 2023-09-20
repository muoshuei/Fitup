import { useState } from "react";
import './ProgramsPage.css'
import TopNavbar from "../../TopNavbar/TopNavbar";
import programJson from './local-json/programs.json';
import { useNavigate, useParams } from "react-router-dom";
import imageSet from "./ProgramImageProvider";
import Star from "./images/Star.png";
import Cookies from "js-cookie";
const ProgramsPage = () =>{
    const navigate = useNavigate();
    const storedUserData = Cookies.get('userData') ?? "{}";
    // 将从 Cookie 中读取的数据反序列化为 JSON 对象
    const parsedUserData = JSON.parse(storedUserData);
    const bmi = parsedUserData.bmi ? parsedUserData.bmi : 15;
    const [expand, setExpand] = useState([false, false, false]);
    
    let {entry} = useParams();
    let partData = programJson[entry];
    if (!partData) return <div>Not found</div>
    const strength = bmi >= 27 ? "strong" : (bmi >= 18.5 ? "medium" : "weak");
    const strengthLevels = entry === "body" ? [strength] : ["weak", "medium", "strong"];
    
    const shortNameMap = {
        "body": "b",
        "arm": "ar",
        "abs": "ab",
        "chest": "c",
        "shoulder": "s",
        "leg": "l"
    }
    const strengthMap = {"weak": "弱", "medium": "中", "strong": "強"};
    const handleExpand = (e) => {
        let tmp = [...expand];
        tmp[e.target.getAttribute("value")] = !tmp[e.target.getAttribute("value")];
        setExpand(tmp);
    }
    const handleAddToList = (e) => {
        //e.target.value -> "arWeak" || "lMedium" || "b"
    }
    return (
        <>
            <TopNavbar></TopNavbar>
            <div className="program-container">
                <h1 className="program">{partData.name} - 健身菜單</h1>
                <div className="program-menus-container">
                    
                    {strengthLevels.map((e, index)=>
                        <div className="program-menu">
                            <div className='Star'>
                                <img src={ Star } alt="star"></img>
                            </div>
                            <h2 className="program">{partData.name} - {strengthMap[e]}</h2>
                            <img className="program-image" src={imageSet[entry][e]} alt="image"></img>
                            <label>組間休息: {partData.sets[e].restIntervalInSec} 秒</label>
                            <table>
                                <thead>
                                    <tr className="program-menu-main">
                                        <th className="program-menu-main" colSpan={2} onClick={handleExpand} value={index} style={{ cursor: 'pointer' }}>+詳細資料</th>
                                    </tr>
                                </thead>
                                <tbody className={expand[index]?"program-expanded":"program-unexpanded"}>
                                    {partData.sets[e].exerciseList.map((ex, index)=>
                                        <tr>
                                            <td>動作{index}: </td>
                                            <td>{ex.name} {ex.description}</td>
                                        </tr>
                                    )}

                                </tbody>
                            </table>
                            <div className="program-buttons">
                                <button className="program-button" onClick={()=>navigate("/train", {state: {programListId: (shortNameMap[entry] + e.charAt(0).toUpperCase() + e.slice(1))}})}>開始訓練</button>
                                <button className="program-button" onClick={handleAddToList} value={shortNameMap[entry] + e.charAt(0).toUpperCase() + e.slice(1)}>加入我的菜單</button>
                            </div>
                            
                        </div>
                        
                    )}
                    
                </div>
            </div>
        </>
    )
}


export default ProgramsPage;