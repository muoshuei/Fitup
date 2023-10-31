import { useState, useEffect } from "react";
import './ProgramsPage.css'
import TopNavbar from "../../TopNavbar/TopNavbar";
import programJson from './local-json/programs.json';
import { useNavigate, useParams } from "react-router-dom";
import imageSet from "./ProgramImageProvider";
import Star from "./images/Star.png";
import Stared from "./images/Stared.png";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDataAction } from "../../../redux/actions/authActions";

const shortNameMap = {
    "body": "b",
    "abs": "ab",
    "arm": "ar",
    "chest": "c",
    "leg": "l",
    "shoulder": "s"
}
const strengthMap = {"weak": "弱", "medium": "中", "strong": "強"};

const ProgramsPage = () =>{
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth?.userData);
    const dispatch = useDispatch();
    const [expand, setExpand] = useState({
        weak: false,
        medium: false,
        strong: false,
    });
    const bmi = userData.bmi
    const [preferenceList, setPreferenceList] = useState([]); 

    useEffect(()=>{
        setPreferenceList(userData.preferenceList)
    }, [userData.preferenceList.length])

    let {entry} = useParams();
    let partData = programJson[entry];
    if (!partData) return <div>Not found</div>
    const strength = bmi >= 27 ? "strong" : (bmi >= 18.5 ? "medium" : "weak");
    const handleExpand = (e) => {
        let tmp = {...expand};
        tmp[e.target.getAttribute("value")] = !tmp[e.target.getAttribute("value")];
        setExpand(tmp);
    }
    const handleAddToList = async (e) => {
        await dispatch(updateUserDataAction({...userData, menu_id: e.target.value}))
    }
    return (
        <>
            <TopNavbar></TopNavbar>
            <div className="program-container">
                <h1 className="program">{partData.name} - 健身菜單</h1>
                <div className="program-menus-container">
                    {
                        entry == "body" 
                        ?   <ProgramCard
                            entry={entry}
                            strength={strength}
                            programListId={shortNameMap[entry]+strength.charAt(0).toUpperCase()+strength.slice(1)}
                            preferenceList={preferenceList}
                            handleExpand={handleExpand}
                            handleAddToList={handleAddToList}
                            expand={expand[strength]}
                            navigate={navigate}
                            />
                            
                        :  <>
                            <ProgramCard 
                            entry={entry}
                            strength={"weak"}
                            programListId={shortNameMap[entry] + "Weak"}
                            preferenceList={preferenceList}
                            handleExpand={handleExpand}
                            handleAddToList={handleAddToList}
                            expand={expand.weak}
                            navigate={navigate}/>
                            <ProgramCard 
                            entry={entry}
                            strength={"medium"}
                            programListId={shortNameMap[entry] + "Medium"}
                            preferenceList={preferenceList}
                            handleExpand={handleExpand}
                            handleAddToList={handleAddToList}
                            expand={expand.medium}
                            navigate={navigate}/>
                            <ProgramCard 
                            entry={entry}
                            strength={"strong"}
                            programListId={shortNameMap[entry] + "Strong"}
                            preferenceList={preferenceList}
                            handleExpand={handleExpand}
                            handleAddToList={handleAddToList}
                            expand={expand.strong}
                            navigate={navigate}/>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

const ProgramCard = ({entry, strength, programListId, preferenceList, handleExpand, handleAddToList, navigate, expand}) => {
    const partData = programJson[entry];
    return (
    <div className="program-menu">
        <div className="Star">
            {preferenceList.includes(programListId)
                ? <img src={ Stared } alt="stared"/>
                : <img src={ Star } alt="star"/>
            }
        </div>
        <h2 className="program">
            {partData.name} - {strengthMap[strength]}
        </h2>
        <img className="program-image" src={imageSet[entry][strength]} alt="provided_image"></img>
        <label>組間休息: {partData.sets[strength].restIntervalInSec} 秒</label>
        <table>
            <thead>
                <tr className="program-menu-main">
                    <th className="program-menu-main" colSpan={2} onClick={handleExpand} value={strength} style={{ cursor: 'pointer' }}>+詳細資料</th>
                </tr>
            </thead>
            <tbody className={expand?"program-expanded":"program-unexpanded"}>
                {partData.sets[strength].exerciseList.map((ex, index)=>
                    <tr key={ex.name + ex.description}>
                        <td>動作{index+1}: </td>
                        <td>{ex.name} {ex.description}</td>
                    </tr>
                )}
            </tbody>
        </table>
        <div className="program-buttons">
            <button className="program-button"
            onClick={() => navigate("/train", {state: {programListId: programListId}})}
            >
                開始訓練
            </button>
            <button className="program-button"
            onClick={handleAddToList} 
            disabled={preferenceList.includes(programListId)}
            value={programListId}
            >
                加入我的菜單
            </button>

        </div>

    </div>
    )
}

export default ProgramsPage;