import React, { useEffect, useState } from 'react';
import './MyProgram.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import TopNavbar from '../TopNavbar/TopNavbar';
import imageSet from '../Programs/ProgramsPage/ProgramImageProvider';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserDataAction } from '../../redux/actions/authActions';


const MyProgram = () => {
  const userData = useSelector((state) => state.auth?.userData)
  const dispatch = useDispatch();
  const [preferenceList, setPreferenceList] = useState([]);
  useEffect(()=>{
    setPreferenceList(
      [...userData.preferenceList.map((e) => {
        const fullNameMap = {
          "b": "body",
          "ab": "abs",
          "ar": "arm",
          "c": "chest",
          "l": "leg",
          "s": "shoulder"
        }
        const splittedId = e.charAt(0) === "a" 
                          ? {"part": (e.slice(0,2)), "strength": (e.charAt(2).toLowerCase() + e.slice(3))}
                          : {"part": (e.charAt(0)), "strength": (e.charAt(1).toLowerCase() + e.slice(2))}
        const strengthMap = {"weak": "弱", "medium": "中", "strong": "強"};
        const partNameMap = {
          "b": "全身",
          "ab": "腹",
          "ar": "手",
          "c": "胸",
          "l": "腿",
          "s": "肩"
        }
        return {
          id: e,
          name: ((partNameMap[splittedId.part]) + " - " + (strengthMap[splittedId.strength])),
          image: fullNameMap[splittedId.part],
          strength: splittedId.strength,
        }
      }), {
        id: "demo1",
        name: "展示用-1",
        image: "demo",
        strength: "1"
      },
      {
        id: "demo2",
        name: "展示用-2",
        image: "demo",
        strength: "2"
      },
      {
        id: "demo3",
        name: "展示用-3",
        image: "demo",
        strength: "3"
      },
      {
        id: "ab",
        name: "腹測試",
        image: "default",
        strength: "1"
      },
      {
        id: "ar",
        name: "手測試",
        image: "default",
        strength: "1"
      },
      {
        id: "c",
        name: "胸測試",
        image: "default",
        strength: "1"
      },
      {
        id: "l",
        name: "腿測試",
        image: "default",
        strength: "1"
      },
      {
        id: "s",
        name: "肩測試",
        image: "default",
        strength: "1"
      },]
    )
  },[userData.preferenceList.length])
  const navigate = useNavigate();
  const handleStart = (e) => {
    navigate("/train", {state: {programListId: e.target.value}})
  };
  const handleRemove = async (e) => {
    await dispatch(updateUserDataAction({...userData, menu_id: e.target.value}))
    // deleteListByUserAndMenu(userData.id, e.target.value);
    // let index = preferenceList.indexOf(e.target.value);
    // let tmpList = [...jsonData.list];
    // tmpList.splice(index, 1);
    // setJsonData({list: tmpList});
    // preferenceList.splice(index, 1);
  };

  return (
    <>
    <TopNavbar></TopNavbar>
    
    <div className="mymenu-container">
      <h1>我的菜單</h1>
      <div className="menu-list">
        <div className="new-menu">
          <h2 className='mymenu'>新增菜單</h2>
          <Link to="/newprogram" className='react-link'>
            <div className='plus-sign'><b>+</b></div>
          </Link>
        </div>
        {preferenceList.map((e)=>
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
            <img src={imageSet[program.image][program.strength]} className='program-image' alt="provided_image"></img>
            <div className='program-buttons'>
              <button value={program.id} className='startdect-button' onClick={handleStart}>開始偵測</button>
              <button value={program.id} className='remove-button' onClick={handleRemove}>移除菜單</button>
            </div>          
        </div>
    )
}
export default MyProgram;

