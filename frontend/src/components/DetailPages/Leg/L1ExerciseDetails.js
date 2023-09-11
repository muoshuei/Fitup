import React from 'react';
import l1 from './images/L1.png'
import vl1 from './videos/l1.mp4'
import { useState } from 'react';
import  { useRef } from 'react';


const L1ExerciseDetails = () => {
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
         <img src={l1} className="w-100"/>
      <p></p>
      <h2>
        <b><font face="monospace" style={{ marginLeft: '120px' }}>徒手深蹲</font></b><br/>
        <span style={{ fontFamily: 'serif', marginLeft: '150px', fontSize: '24px' }}>Squat </span>
      </h2>
      <div className="btn-container">
      <p></p>                
     <button className="custom-btn" style={{  marginLeft: '100px'}} onClick={handleClick}><b>觀看影片</b></button>                               
      </div>
   
    </div>

    <div className="col-1"></div>
    
    <div className="col-7">
       <div className="text">

       <h4><b>🏋️‍♀️動作介紹</b></h4>    
        <p></p>   

        <p className="step">
        <b>🞄 開始預備動作(一) :</b> <br/>                   
        </p>
        <p className="step">
        雙腳打開與肩同寬，腳尖向前微微往外，雙手則可放在胸前交叉交疊或是雙手握拳。<br/> 
        <span style={{fontSize: '12px'}}><b>➜膝蓋保持向前和腳趾頭對齊，避免膝蓋扭曲而受傷<br/>
        </b> 
        </span>
        </p>
        <p></p>

        <p className="step">
        <b>🞄 開始預備動作(二) :</b> <br/>                   
        </p>
        <p className="step">
        腳底平放於地面，將重心放在雙腳上。<br/>
        <span style={{fontSize: '12px'}}><b>➜重心集中放在整個腳底板上<br/>
        </b> 
        </span>
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(一) :</b><br/>             
        </p>
        <p className="step">
        吸氣，尾骨往內收，臀部像坐椅子一樣，往下坐。<br/>
        <span style={{fontSize: '12px'}}><b>➜脊椎保持筆直，避免在起身時或是重心向下移時往前傾斜，
          維持上半身挺胸有助於保持平衡，降低脊椎拉傷的風險<br/>
        </b> 
        </span>
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(二) :</b><br/>
        </p>
        <p className="step">                  
        收緊臀部，吐氣，腳根站穩回到站姿。<br/>
        </p>
        <p></p>

    

    
        <h4><b>💪鍛鍊部位</b></h4>
        <p className="step">
        🞄 股四頭肌、縫匠肌（大腿前側）、股二頭肌、 <br/> 
        <span style={{marginLeft: '10px' }}> 
        半腱肌（大腿後側），臀大肌（屁股）、腓腸肌（小腿）為主 <br/> 
        </span>
        </p>  
        
        <p className="step">
        🞄 腿部穩定肌群為輔<br/>                    
        </p>  
       
       
        
        <p></p>
       
        <h4><b>✔所需器材</b></h4>
        <p className="step">
        🞄 無<br/>                    
        </p>  
        <p></p>

        <h4><b>⚠注意事項</b></h4> 
        <p className="step"> 
        🔹膝蓋與腳尖同方向，雙腳掌可嘗試平行或外八等不同站姿去感受大腿受力                    
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
              <source src={vl1} type="video/mp4" />
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

export default L1ExerciseDetails;





