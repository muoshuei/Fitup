import React, { useState } from 'react';
import './MyProgram.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import TopNavbar from '../TopNavbar/TopNavbar';
import imageSet from '../Programs/ProgramsPage/ProgramImageProvider';
const MyProgram = () => {
  const [myList, setMyList] = useState(
    [
      {
        id: "arWeak",
        name: "手臂-弱",
        image: "arm",
        strength: "weak",
        details: "這裡是訓練菜單-「手臂-弱」的詳細內容"
      },
      {
        id: "demo",
        name: "展示用菜單",
        image: "body",
        strength: "weak",
        details: "這是展示用菜單"
      },
      {
        id: "demo",
        name: "展示用菜單",
        image: "body",
        strength: "weak",
        details: "這是展示用菜單"
      },
      {
        id: "demo",
        name: "展示用菜單",
        image: "body",
        strength: "weak",
        details: "這是展示用菜單"
      },
    ]
  );
  const navigate = useNavigate();

  const handleStart = (e) => {navigate("/train", {state: {programListId: e.target.value}})};
  const handleRemove = (e) => {};
  return (
    <>
    <TopNavbar></TopNavbar>
    
    <div className="mymenu-container">
      <h1>我的菜單</h1>
      <div className="menu-list">
        <div className="new-menu">
          <h2 className='mymenu'>新增菜單</h2>
          <Link to="/program/new" className='react-link'>
            {/* <img src={ Newmenu } className="plus"></img> */}
            <div className='plus-sign'><b>+</b></div>
          </Link>
        </div>
        {myList.map((e)=>
          <ProgramCard key={e.id} program={e} handleRemove={handleRemove} handleStart={handleStart}></ProgramCard>
        )}
        
      </div>
    </div>
    </>
  );
};
const ProgramCard = ({program, handleStart, handleRemove}) => {
    return (
        <div className="program-menu">        
            <h2 className='program'>{program.name}</h2>
            <img src={imageSet[program.image][program.strength]} className='program-image'></img>
            <div className='program-buttons'>
              <button value={program.id} className='startdect-button' onClick={handleStart}>開始偵測</button>
              <button className='remove-button' onClick={handleRemove}>移除菜單</button>
            </div>          
        </div>
    )
}
export default MyProgram;

