 
import React from 'react';
 
import arm2 from './images/arm2.png'
import TopNavbar from '../../TopNavbar/TopNavbar';


const H2ExerciseDetails = () => {
    return (
      <>
      <TopNavbar></TopNavbar>
    <div className="Content-container">
      <div className="row">
       <div className="col-4 text">               
         <img src={arm2} className="w-100"/>
      <p></p>
      <h2>
        <b><font face="monospace">三頭屈伸</font></b><br/>
        <span style={{ fontFamily: 'serif', fontSize: '24px' }}>Seated Dumbbell Tricep Extension</span>
      </h2>
      <div className="btn-container">
      <p></p>                
     <button className="custom-btn" ><b>觀看影片</b></button>                               
      </div>
   
    </div>

    <div className="col-1"></div>
    
    <div className="col-7">
       <div className="text">

       <h4><b>🏋️‍♀️動作介紹</b></h4>    
        <p></p>   
        <p className="step">
        🞄 啞鈴三頭屈伸有多種方式，可以站著俯身訓練、坐姿垂直訓練、仰臥躺著訓練。<br/>
        </p>   
        <p></p>

        <p className="step">
        <b>🞄 開始預備動作(一) :</b> <br/>                   
        </p>
        <p className="step">
        坐在椅子上，先用雙手把啞鈴拿起，放在膝蓋上。<br/>
        </p>
        <p></p>

        <p className="step">
        <b>🞄 開始預備動作(二) :</b> <br/>                   
        </p>
        <p className="step">
        把啞鈴用腳輔助，踢到肩膀上穩定放著。<br/>
        <p style={{fontSize: '12px'}}><b>➜不過度聳肩，影響訓練效果</b></p> 
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(一) :</b><br/>             
        </p>
        <p className="step">
        雙手舉起啞鈴，將手臂彎曲，手肘緊貼在頭部側邊，啞鈴置於頭部後方，此時為起始位置。<br/>
        <p style={{fontSize: '12px'}}><b>➜手肘不宜過度彎曲，避免受傷</b></p> 
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(二) :</b><br/>
        </p>
        <p className="step">                  
        慢慢地抬起啞鈴，伸直手臂，直到啞鈴在頭部正上方，此時為結束位置。<br/>
        <p style={{fontSize: '12px'}}><b>➜手肘盡量打直，確保訓練效果，但不宜過度伸直，避免受傷</b></p> 
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(三) :</b><br/>
        </p>
        <p className="step">                  
        暫停一下，然後慢慢地放下啞鈴，回到起始位置，並重複以上動作。<br/>
        <p style={{fontSize: '12px'}}><b>➜肩關節不前後晃動，下背不過度彎曲避免下背壓力，保持順暢呼吸不憋氣</b></p> 
        </p>
        <p></p>

        <p className="step">
        <b>🞄 結束動作(一) :</b><br/>
        </p>
        <p className="step">                  
        把啞鈴先放回肩膀旁。<br/>
        </p>
        <p></p>

        <p className="step">
        <b>🞄 結束動作(二) :</b><br/>
        </p>
        <p className="step">                  
        另一隻手到前面接啞鈴，並放回腿上。<br/>
        </p>
        <p></p>

    
        <h4><b>💪鍛鍊部位</b></h4>
        <p className="step">
        🞄 肱三頭肌<br/>                    
        </p>  
       
        
        <p></p>
       
        <h4><b>✔所需器材</b></h4>
        <p className="step">
        🞄 啞鈴(控制度最佳之重量)<br/>                    
        </p>  
        <p className="step">
        🞄 臥推椅(或有高度且可躺之平面)<br/>                    
        </p>    
        <p></p>

 
     
      
    </div>
</div>

    <div className="col-12">
        <p></p>
    </div>       
     
    </div>
    </div>

      </>
    );
};

export default H2ExerciseDetails;





