import { useState } from "react";
import { Link } from "react-router-dom";
import exerciseMap from '../../local-json/exercise.json';
function NewProgram(){
    const [list, setList] = useState([]);
    return (
        <div>
            <button onClick={()=> {
                let tmpList = [...list];
                tmpList.push("p1")
                setList(tmpList)
            }}>新增伏地挺身</button>
            <br/>
            <button onClick={()=>{
                let tmpList = [...list];
                tmpList.push("s1")
                setList(tmpList)
            }}>新增啞鈴肩推</button>
            <br/>
            <button onClick={()=>{
                let tmpList = [...list];
                tmpList.push("s2")
                setList(tmpList)
            }}>新增啞鈴前平舉</button>
            <br/>
            <div>
                {list.map((e, index) => <div key={index}>{exerciseMap[e].name}</div>)}
            </div>
            <Link to={"/train"} state={{programList: list}}>確認</Link>
            
            
        </div>
    );
}
export default NewProgram;