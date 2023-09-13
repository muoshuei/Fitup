 
import React from 'react';
 
import arm4 from './images/arm4.png'
import TopNavbar from '../../TopNavbar/TopNavbar';



const H4ExerciseDetails = () => {
    return (
      <>
      <TopNavbar></TopNavbar>
    <div className="Content-container">
      <div className="row">
       <div className="col-4 text">               
         <img src={arm4} className="w-100"/>
      <p></p>
      <h2>
        <b><font face="monospace" style={{ marginLeft: '87px' }}>俯身啞鈴臂屈伸</font></b><br/>
        <span style={{ fontFamily: 'serif', marginLeft: '67px', fontSize: '24px' }}>Tricep Dumbbell Kickback</span>
      </h2>
      <div className="btn-container">
      <p></p>                
     <button className="custom-btn"  style={{  marginLeft: '100px'}}><b>觀看影片</b></button>                               
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
        雙手各持一啞鈴，膝蓋微彎，彎腰使上半身向前傾，
        核心收緊，背部挺直，直到上半身與地面接近平行。
        </p>
        <p></p>

        <p className="step">
        <b>🞄 開始預備動作(二) :</b> <br/>                   
        </p>
        <p className="step">
        上臂緊貼上身，與地面平行，前臂自然下垂，抬頭面向前。<br/>
        <p style={{fontSize: '12px'}}><b>➜不過度聳肩
        </b></p>
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(一) :</b><br/>             
        </p>
        <p className="step">
        上臂固定不動，使用肱三頭肌的力量將啞鈴向後舉起，同時呼氣，直到上臂與地面平行，在頂端短暫停留，感受肱三頭肌的收縮。<br/>
        <p style={{fontSize: '12px'}}><b>➜確保上臂固定，不往下掉且上臂夾緊身體，下臂伸的時候不要帶動上臂
        </b></p>
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(二) :</b><br/>
        </p>
        <p className="step">                  
        後上臂固定不動，緩慢下放啞鈴，同時吸氣，反覆進行。<br/>
        </p>
        <p></p>

    

    
        <h4><b>💪鍛鍊部位</b></h4>
        <p className="step">
        🞄 肱三頭肌為主<br/>                    
        </p>  
        <p className="step">
        🞄 三角肌為輔<br/>                    
        </p>  
       
       
        
        <p></p>
       
        <h4><b>✔所需器材</b></h4>
        <p className="step">
        🞄 啞鈴<br/>                    
        </p>  
        <p></p>

        <h4><b>⚠注意事項</b></h4> 
        <p className="step"> 
        🔹也可使用平板凳使單腳跪於上方，一手撐著平板凳保持平衡，一手持啞鈴進行訓練                   
        </p>
       
 
     
      
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

export default H4ExerciseDetails;





