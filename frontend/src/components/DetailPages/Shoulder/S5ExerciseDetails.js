
import React from 'react';

import s5 from './images/s5.png'




const S5ExerciseDetails = () => {
    return (
    <div className="Content-container">
      <div className="row">
       <div className="col-4 text">               
         <img src={s5} className="w-100"/>
      <p></p>
      <h2>
        <b><font face="monospace" style={{ marginLeft: '115px' }}>直立划船</font></b><br/>
        <span style={{ fontFamily: 'serif', marginLeft: '118px', fontSize: '24px' }}>Upright Row
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
        <b>*開始前需要進行「自測肩關節內旋狀態下的外展活動度」 : </b><br/>  
        將手臂向內旋轉，然後進行外展，感受自己肩關節在哪個高度受限。<br/>  
        在動作過程中則不建議超過此位置，通常只需使肘關節略低於肩部即可。<br/>                           
        </p>

        <p className="step">
        <b>🞄 開始預備動作(一) :</b> <br/>                   
        </p>
        <p className="step">
        雙手各持一個啞鈴，身體直立。<br/>
        <p style={{fontSize: '12px'}}><b>➜選擇合理握距，一般在1~1.5倍肩寬即可，距離過大將降低刺激效果
        </b></p> 
        </p>
        <p></p>

        <p className="step">
        <b>🞄 開始預備動作(二) :</b> <br/>                   
        </p>
        <p className="step">
        手臂在身前自然下垂，掌心朝向大腿。<br/>
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(一) :</b><br/>             
        </p>
        <p className="step">
        將啞鈴緊貼身體向上拉，肘部向身體側面彎曲，同時呼氣。整個向上拉的過程，以肘關節帶動，直至啞鈴被拉到下巴位置，肘部高於前臂。<br/>
        <p style={{fontSize: '12px'}}><b>➜保持槓鈴緊貼身體，不要過於前伸手臂，以維持身體穩定
        </b></p> 
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(二) :</b><br/>
        </p>
        <p className="step">                  
        在頂端稍作停留，然後慢慢將啞鈴放回起始位置，同時吸氣。<br/>
        </p>
        <p></p>


    
        <h4><b>💪鍛鍊部位</b></h4>
        <p className="step">
        🞄 三角肌中束為主<br/>                    
        </p>    
        <p className="step">  
        🞄 背部斜方肌為輔<br/>                  
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
        🔹慎選啞鈴重量，太重可能導致肩部受傷<br/>
        </p>
       
        <p className="step"> 
        🔹一組次數控制在<b>10~12次</b>即可，次數不宜過多<br/>                  
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

export default S5ExerciseDetails;





