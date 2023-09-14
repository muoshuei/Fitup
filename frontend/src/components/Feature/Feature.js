import React from 'react';


import f1 from './images/f1t.png';
import f2 from './images/f2t.png';
import f3 from './images/f3t.png';
import f4 from './images/f4t.png';
import hp from './images/homepage5.png';

import './Feature.css';
import TopNavbar from '../TopNavbar/TopNavbar';


const Feature = () => {
  return (
    <>
    <TopNavbar></TopNavbar>
    
    <div className="container">
      <div className="row">
      <div className="col-12">
       
      <img src={hp} className="top-image"  />
      </div>
     
     <p></p>
     <p></p>
     <p></p>
     <hr className="custom-horizontal-line" />

       <div className="col-12 ">
          <br/><br/><h2><b>Fitup四大特色</b><br/><br/></h2>
      
       </div>
   <hr className="custom-horizontal-line" />
    
       <div className="col-1 "> </div>
       <div className="col-3 rectangle-white">
        <img src={f1}  style={{ width: '230px', height: '230px' }} />
        </div>
        <div className="col-7 rectangle-blue">
        <h3  className="white-text"><b>一、客製化健身菜單</b></h3>
        <span>
          <br/> <br/>
        </span>
        <p className="custom-text-white"><b>🞄 提供個性化的運動選擇以滿足不同使用者的需求</b></p>
       </div>
       <div className="col-1"> </div>
     
      <p></p>

       <div className="col-1 "> </div>
       <div className="col-3 rectangle-blue ">
        <img src={f2}  style={{ width: '230px', height: '230px' }} />
        </div>
        <div className="col-7 rectangle-white ">
        <h3  className="blue-title-text"><b>二、多元健身動作</b></h3>
        <span>
          <br/>
        </span>
        <p className="custom-text-black"><b>🞄 涵蓋五大部位的多種健身動作</b><br/><br/><b>🞄 每個動作皆配有詳細的說明與影片示範</b></p>
       </div>
       <div className="col-1 "> </div>

       <p></p>

       <div className="col-1 "> </div>
       <div className="col-3 rectangle-white">
        <img src={f3}  style={{ width: '230px', height: '230px' }} />
        </div>
        <div className="col-7 rectangle-blue">
        <h3  className="white-text"><b>三、圖表分析功能</b></h3>
        <span>
          <br/>
        </span>
        <p className="custom-text-white"><b>🞄 記錄並分析使用者的運動情況</b><br/> <br/><b>🞄 提供各式圖表協助使用者快速了解自己的運動狀態</b></p>
       </div>
       <div className="col-1 "> </div>

       <p></p>

       <div className="col-1 "> </div>
       <div className="col-3 rectangle-blue ">
        <img src={f4}  style={{ width: '230px', height: '230px' }} />
        </div>
        <div className="col-7 rectangle-white ">
        <h3  className="blue-title-text"><b>四、偵測功能</b></h3>
        <span>
          <br/>
        </span>
        <p className="custom-text-black"><b>🞄 利用影像辨識技術</b><br/> <br/><b>🞄 運動過程中持續檢測動作、即時回饋</b></p>
       </div>
       <div className="col-1 "> </div>

     <p></p>
       <div className="col-12"></div>

      </div>
    </div>
    </>
  );
};

export default Feature;

