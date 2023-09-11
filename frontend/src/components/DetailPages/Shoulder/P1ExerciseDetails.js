import React from 'react';

import p1 from './images/p1.jpg'
import vp1 from './videos/p1.mp4'
import { useState } from 'react';
import  { useRef } from 'react';


const P1ExerciseDetails = () => {
      const [showVideo, setShowVideo] = useState(true);
      const videoRef = useRef(null);

      const handleClick = () => {
        if (videoRef.current) {
          videoRef.current.scrollIntoView({
            behavior: 'smooth',
          });
        }
      };

    return (
    <div className="Content-container">
      
      <div className="row">
       <div className="col-4 text">               
         <img src={p1} className="w-100"/>
      <p></p>
      <h2>
        <b><font face="monospace" style={{ marginLeft: '115px' }}>伏地挺身</font></b><br/>
        <span style={{ fontFamily: 'serif', marginLeft: '128px', fontSize: '28px' }}>Push Up</span>
      </h2>
      <div className="btn-container">
      <p></p>                
     <button className="custom-btn" style={{ marginLeft: '100px', backgroundcolor: '#cb77cb'}} onClick={handleClick}><b>觀看影片</b></button>                               
      </div>
   
    </div>

    <div className="col-1"></div>
    
    <div className="col-7">
       <div className="text">
        <h4>
            <b>🏋️‍♀️動作介紹</b>
        </h4>
        <p></p>
        <p className="step">
        <b>🞄 開始預備動作(一) :</b> <br/>                   
        </p>
        <p className="step">
        雙手撐地間距與肩同寬，手掌根部位大約在乳頭正下方。<br/>
        <p style={{fontSize: '12px'}}><b>➜預備姿勢時，讓自己習慣先放鬆、下沉肩膀，不過度聳肩</b></p> 
        </p>
        <p></p>

        
        <p className="step">
        <b>🞄 開始預備動作(二) :</b> <br/>                   
        </p>
        <p className="step">
        屁股下壓，核心出力夾緊，保持身體軀幹呈一條斜斜向上的直線。<br/>
        </p>
        <p></p>
        
        <p className="step">
        <b>🞄 正式動作(一) :</b> <br/>                   
        </p>
        <p className="step">
        吸氣同時彎曲手肘，上半身緩慢下降，將背夾緊，胸部往地面靠近，直到手肘比背部還高的位置。
        身體往下時，手肘往外呈30~45度，視線看向雙手前方。<br/>
        <p style={{fontSize: '12px'}}><b>➜手肘的擺放角度太大會造成肩膀的代償，太小則會造成三頭肌過多的發力</b></p> 
        </p>
        <p></p>
        
        <p className="step">
        <b>🞄 正式動作(二) :</b> <br/>                   
        </p>
        <p className="step">
        吐氣同時雙手用力推地，將身體向上帶，將背打開，回到高平板撐的位置，反覆進行。<br/>
        </p>
        <p></p>

       

        <h4>
            <b>💪鍛鍊部位</b>
        </h4>
        <p></p>
            <p className="step">🞄 胸大肌</p>
            <p className="step">🞄 二頭肌</p>
            <p className="step">🞄 三頭肌</p>
            <p className="step">🞄 三角肌</p>
            <p className="step">🞄 核心肌群</p>          
                 
       <p></p>
        <p>
        <h4>
            <b>✔所需器材</b>
        </h4>
           <p className="step">平坦地面</p>
        </p>

        <p></p>

        <h4>
           <b>⚠注意事項</b>
        </h4>
        <p></p>
            <p className="step">
              🔹伏地挺身和臥推的訓練模式很像，但這兩者卻<b>不能互相取代</b>，因重量的作用位置會有所不同<br/>
            </p>
            <p className="step"> 
              🔹行程完整、速度慢的伏地挺身，難度較高，次數較少，但能使胸肌得到更充分的收縮<br/>
            </p>
            <p className="step"> 
              🔹正確的伏地挺身應<b>斜上斜下</b>，使手腕處於最自然的狀態<br/>
            </p>
         
            </div>
            </div>

            <div className="col-12">
              <p></p>
            </div>
           </div>

        {showVideo && (
        <div className="row">
          <div className="video-container" ref={videoRef}>
            <video controls className="centered-video">
              <source src={vp1} type="video/mp4" />
            </video>
          </div>  
      
          <div className="col-12">
          <p></p>
          </div> 
        </div>
        
      
      
      )}
  </div>


    );
};

export default P1ExerciseDetails;





