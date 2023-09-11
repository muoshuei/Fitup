import React from 'react';

import s7 from './images/s7.png'



const S7ExerciseDetails = () => {
    return (
    <div className="Content-container">
      <div className="row">
       <div className="col-4 text">               
         <img src={s7} className="w-100"/>
      <p></p>
      <h2>
        <b><font face="monospace" style={{ marginLeft: '100px' }}>過頭前平舉</font></b><br/>
        <span style={{ fontFamily: 'serif', marginLeft: '85px', fontSize: '24px' }}>Overhead Front Raise
        </span>
      </h2>
      <div className="btn-container">
      <p></p>                
     <button className="custom-btn" style={{  marginLeft: '100px'}}><b>觀看影片</b></button>                               
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
        自然站立，兩手啞鈴垂於腿前，握距與肩同寬。<br/>
        </p>
        <p></p>



        <p className="step">
        <b>🞄 正式動作(一) :</b><br/>             
        </p>
        <p className="step">
        把啞鈴向前上方舉起，直至前臂在耳朵兩旁。<br/>
        <p style={{fontSize: '12px'}}><b>➜肘部稍彎<br/>➜啞鈴勿握太緊，影響三角肌之訓練效能
        </b></p>
         
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(二) :</b><br/>
        </p>
        <p className="step">                   
        緩慢將啞鈴依原路徑下放，反覆進行。<br/>
        <p></p>
        </p>
  

    
        <h4><b>💪鍛鍊部位</b></h4>
        <p className="step">
        🞄 三角肌前束、中束<br/>     
        </p>                 
        <p></p>
       
        <h4><b>✔所需器材</b></h4>
        <p className="step">
        🞄 啞鈴<br/>                   
        </p>    
        <p></p>

        <h4><b>⚠注意事項</b></h4>
        <p></p>
        <p className="step"> 
        🔹<b>手肘</b>可<b>輕微彎曲</b>，以減低重量對二頭肌的壓力<br/>
        </p>
       
        <p className="step"> 
        🔹此動作不適合使用大重量啞鈴。<br/>                  
        </p>


    </div>
</div>

    <div className="col-12">
        <p></p>
    </div>       
     
    </div>
    </div>


    );
};

export default S7ExerciseDetails;





