 
import React from 'react';
 
import abs3 from './images/Abs3.png'



const B3ExerciseDetails = () => {
    return (
    <div className="Content-container">
      <div className="row">
       <div className="col-4 text">               
         <img src={abs3} className="w-100"/>
      <p></p>
      <h2>
        <b><font face="monospace" style={{ marginLeft: '125px' }}>登山式</font></b><br/>
        <span style={{ fontFamily: 'serif', marginLeft: '88px' , fontSize: '28px' }}>Mountain Climber</span>
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
            雙腳打開與肩同寬，呈高平板式的姿勢，背部不應拱起。<br/>  
            </p>
            <p></p>

            <p className="step">
            <b>🞄 開始預備動作(二) :</b> <br/>                  
            </p>
            <p className="step">
            全程視線往下，保持頸部放鬆；肩膀要在手腕正上方；
            穩定核心，使肩部到臀部、腳跟成一直線。<br/>  
            </p>
            <p></p>
        
            <p className="step">
            <b>🞄 正式動作(一) :</b><br/>                   
            </p>
            <p className="step">               
            左腳彎曲觸碰左肘（或往胸部靠近），接著快速退回高平板姿勢。<br/>
            </p>
            <p></p>

            <p className="step">
            <b>🞄 正式動作(二) :</b><br/>  
            </p>
            <p class="step">                 
            右腳彎曲觸碰右肘（或往胸部靠近），接著快速退回高平板姿勢。<br/>
            </p>
            <p></p>

            <p className="step">
            <b>🞄 正式動作(三) :</b><br/>                  
            </p>
            <p className="step">                  
            左右輪替做。<br/>
            </p>
            <p></p>


            <h4><b>💪鍛鍊部位</b></h4>
            <p className="step">🞄 肱三頭肌<br/></p>
            <p className="step">🞄 三角肌<br/></p>
            <p className="step">🞄 背部<br/></p>
            <p className="step">🞄 核心肌群<br/></p>
            <p className="step">🞄 髖屈肌<br/></p>
            <p className="step">🞄 股四頭肌<br/></p>
            <p className="step">🞄 膕繩肌<br/></p>
            <p className="step">🞄 臀部<br/></p>
            <p></p>

            <h4><b>✔所需器材</b></h4>
            <p className="step">
            🞄 平坦地面<br/>                    
            </p>      
           

            <p></p>

            <h4><b>⚠注意事項</b></h4>
            <p className="step"> 
            🔹 腳趾需觸及地面<br/>
            </p>     
            <p className="step"> 
            🔹 不低頭看腳  <br/>
            </p>
            <p className="step"> 
            🔹 讓核心肌肉穩定身體，不用腳趾頭彈跳<br/>
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

export default B3ExerciseDetails;





