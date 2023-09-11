import React from 'react';

import s2 from './images/s2.png'



const S2ExerciseDetails = () => {
    return (
    <div className="Content-container">
      <div className="row">
       <div className="col-4 text">               
         <img src={s2} className="w-100"/>
      <p></p>
      <h2>
        <b><font face="monospace" style={{ marginLeft: '110px' }}>啞鈴前平舉</font></b><br/>
        <span style={{ fontFamily: 'serif', marginLeft: '65px' , fontSize: '28px'}}>Dumbbell Front Raise</span>
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
        1.下肢：保持膝蓋微彎、彈性 <br/>  
        2.腹部：出力收緊，使身體穩定 <br/>  
        3.胸口：挺胸，使胸椎自然挺出 <br/>  
        4.背部：保持穩定即可，不必刻意站很直 <br/>  
        5.肩膀：放鬆、下沉上斜肌方，使其不過度參與 <br/>  
        6.手部：雙手持啞鈴，自然下放於身體兩側 <br/> 
        <p style={{fontSize: '12px'}}><b>➜不將手肘鎖死，手肘、手腕可保持微彎<br/>
        </b></p> 
        </p>
        <p></p>

        <p className="step">
            <b>🞄 正式動作(一) :</b> <br/>
        </p>
        <p className="step">                  
        吸氣，手臂向前伸出手掌朝下，將啞鈴向上提起並保持肘部略微彎曲，
        以減輕關節的壓力。<br/>當手臂與地面大致呈水平時，短暫停留並感覺肩膀的肌肉收縮。<br/>
        <p style={{fontSize: '12px'}}><b>➜不過度借力，維持好動作、姿勢，將啞鈴慢慢平舉<br/>
        </b></p>
        </p>
        <p></p>

        <p className="step">
            <b>🞄 正式動作(二) :</b><br/>             
        </p>
        <p className="step">
        呼氣，以緩慢的動作控制手臂下降，將啞鈴恢復至大腿前方。<br/>
        </p>
        <p></p>
                 

        <h4><b>💪鍛鍊部位</b></h4>
        <p className="step">
            🞄 三頭肌<br/>                    
            </p>  
        <p className="step">
            🞄 二頭肌<br/>
        </p>
        <p className="step">
            🞄 胸肌<br/>
        </p>
            
        <p></p>

        <p>
        <h4><b>✔所需器材</b></h4>
        <p className="step">
        🞄 啞鈴(重量適中)<br/>                    
        </p>      
       

        <p></p>

        <h4><b>⚠注意事項</b></h4>
        <p className="step"> 
        🔹不過度聳肩或搖擺身體，試著練習用更輕的重量、練習動作開始前放鬆肩胛 <br/>
        </p>
        <p className="step"> 
        🔹<b>啞鈴挑選 :</b>                       
        </p>
        <p className="step"> 
        🏋‍♀新手建議挑選2.5~5公斤<br/>
        </p>
        <p className="step"> 
        🏋‍♀有經驗者可從5～10公斤開始
        </p>
    
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

export default S2ExerciseDetails;





