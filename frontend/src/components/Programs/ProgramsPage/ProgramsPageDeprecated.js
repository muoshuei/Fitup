import React from 'react';
import './ProgramsPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import programJson from './local-json/programs.json';
import TopNavBar from '../../TopNavbar/TopNavbar'
const ProgramsPage = (props) => {
  let {entry} = useParams();
  let partData = programJson[entry];
  if (!partData) return <div>Not found</div>
  const handleAddProgramMenu = (e) =>{
    
  }
  return (
    <div>
      <TopNavBar></TopNavBar>
      <div className="program-container">
        <h1 className="program">{partData.name} - 健身菜單</h1>

        <div className="program-menus-container">
          <div className="program-menu">
            <h2 className="program">{partData.name} - 弱</h2>
            <ul className="program">
              <li className="program-menu-item">組間休息: {partData.sets.weak.restIntervalInSec}秒</li>
              <li className="program-menu-item">熱身組: {partData.sets.weak.warmup.name} {partData.sets.weak.warmup.description}</li>
              {partData.sets.weak.exerciseList.map(
                (e, idx) =>
                  <li className="program-menu-item">動作{idx+1}: {e.name} {e.description}</li>
              )}
            </ul>
            <button className="program-add-button" onClick={handleAddProgramMenu}>加入我的菜單</button>
          </div>

          <div className="program-menu">
            <h2 className="program">{partData.name} - 中</h2>
            <ul className="program">
              <li className="program-menu-item">組間休息: {partData.sets.medium.restIntervalInSec}秒</li>
                <li className="program-menu-item">熱身組: {partData.sets.medium.warmup.name} {partData.sets.medium.warmup.description}</li>
                {partData.sets.medium.exerciseList.map(
                  (e, idx) =>
                    <li className="program-menu-item">動作{idx+1}: {e.name} {e.description}</li>
                )}
            </ul>
            <button className="program-add-button" onClick={handleAddProgramMenu}>加入我的菜單</button>
          </div>

          <div className="program-menu">
            <h2 className="program">{partData.name} - 強</h2>
            <ul className="program">
                <li className="program-menu-item">組間休息: {partData.sets.strong.restIntervalInSec}秒</li>
                  <li className="program-menu-item">熱身組: {partData.sets.strong.warmup.name} {partData.sets.strong.warmup.description}</li>
                  {partData.sets.strong.exerciseList.map(
                    (e, idx) =>
                      <li className="program-menu-item">動作{idx+1}: {e.name} {e.description}</li>
                  )}
            </ul>
            <button className="program-add-button" onClick={handleAddProgramMenu}>加入我的菜單</button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ProgramsPage;
