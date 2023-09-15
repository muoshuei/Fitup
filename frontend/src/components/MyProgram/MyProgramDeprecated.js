import React from 'react';
import './MyProgramDeprecated.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import arm from './images/arm.jpg';
import leg from './images/leg.jpg';
import chest from './images/chest.jpg';
import body from './images/body.jpg';
import shoulder from './images/shoulder.jpg';
import abs from './images/abs.png';
import TopNavbar from '../TopNavbar/TopNavbar';
import { Link } from 'react-router-dom';
import fitnessMenu from '../../local-json/fitnessmenu.json'
const ImageProvider = 
{
  "arm": arm,
  "leg": leg,
  "shoulder": shoulder,
  "chest": chest,
  "abs": abs,
  "body": body
}
const MyProgram = (props) => {
  //TODO - programList should be fetched from backend in production
  const [programList, setProgramList] = useState(
    [
      {
        id: "arWeak",
        name: "手臂-弱",
        image: "arm",
        details: "這裡是訓練菜單-「手臂-弱」的詳細內容"
      },
      {
        id: "demo",
        name: "展示用菜單",
        image: "body",
        details: "這是展示用菜單"
      }
    ]
    );
  return (
    <div>
      <TopNavbar></TopNavbar>
      <div className="myprogram-container">
        <h1>我的菜單</h1>
        <div className="menu-list">
          {programList.map((program)=>
            <ProgramCard key={program.id} program={program}></ProgramCard>
          )}
        </div>
      </div>
    </div>
    
  );
};

const ProgramCard = (props) => {
  const program = props.program;
  return(
    
      <div className='menu'>
          <Link to={"/train"} state={{programListId: program.id ? program.id : "default"}}>
          
            <img src={ImageProvider[program.image]} alt={program.name}></img>
            <div className="menu-content">
              <h2>{program.name}</h2>
              <p>{program.details}</p>
            </div>
          </Link>
        {/* <Link to={"/train"} state={{programListId: program.id ? program.id : "default"}}>立即開始偵測</Link> */}
      </div> 
    
    
  )
}

export default MyProgram;

