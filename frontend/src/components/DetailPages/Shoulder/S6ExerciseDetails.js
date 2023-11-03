
import React from 'react';

import s6 from './images/s6.png'
import TopNavbar from '../../TopNavbar/TopNavbar';



const S6ExerciseDetails = () => {
    return (
      <>
      <TopNavbar></TopNavbar>
    <div className="Content-container">
      <div className="row">
       <div className="col-4 text">               
         <img src={s6} className="w-100"/>
      <p></p>
      <h2>
        <b><font face="monospace">阿諾肩推(坐姿版)</font></b><br/>
        <span style={{ fontFamily: 'serif', fontSize: '24px' }}>Arnold Press
        </span>
      </h2>
      <div className="btn-container">
      <p></p>                
     <button className="custom-btn"><b>觀看影片</b></button>                               
      </div>
   
    </div>

    <div className="col-1"></div>
    
    <div className="col-7">
       <div className="text">

       <h4><b>🏋️‍♀️動作介紹</b></h4>    
        <p></p>   
      
        <p className="step">
        <b>*此運動也可以站立進行，即不使用椅子 </b><br/>                          
        </p>

        <p className="step">
        <b>🞄 開始預備動作(一) :</b> <br/>                   
        </p>
        <p className="step">
        下肢 : 坐好椅墊，保持穩定<br/>
        上肢 : 視線維持在正前方，自然挺胸收腹，兩手各握一啞鈴。<br/>
        </p>
        <p></p>

        <p className="step">
        <b>🞄 開始預備動作(二) :</b> <br/>                   
        </p>
        <p className="step">
        手臂在身前自然下垂，掌心朝向大腿。中下背部貼平椅背即可，上背不須。<br/>
        <p style={{fontSize: '12px'}}><b>➜注意手腕有沒有向前凹折、向內轉動，避免手腕承受過多壓力，讓重量垂直落在前臂上
        </b></p>
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(一) :</b><br/>             
        </p>
        <p className="step">
        將啞鈴舉到肩部位置，掌心面對自己。<br/>
        <p style={{fontSize: '12px'}}><b>➜起槓方式:將啞鈴放在大腿最前端，再利用腿部上蹬的力量將啞鈴抬起
        </b></p> 
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(二) :</b><br/>
        </p>
        <p className="step">                  
        像啞鈴推舉動作一樣向上舉，並一邊向上舉一邊旋轉手腕，以使啞鈴舉到最高點時，掌心朝前。<br/>
        <p style={{fontSize: '12px'}}><b>➜儘量不要推到雙臂完全伸直的最高點，在肘關節伸直前就開始下放啞鈴，可加強練習效果
        </b></p> 
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(三) :</b><br/>
        </p>
        <p className="step">                  
        最高點停頓，然後用上舉相同的軌跡緩慢將啞鈴轉轉回起始位置，雙手手掌朝向自己，反覆進行。<br/>
        <p style={{fontSize: '12px'}}><b>➜下放速度不宜太快
        </b></p> 
        </p>
        <p></p>

    
        <h4><b>💪鍛鍊部位</b></h4>
        <p className="step">
        🞄 三角肌前、中束為主<br/>     
        </p>      

        <p className="step">    
        🞄 三角肌後束、肱三頭肌為輔<br/>                  
        </p>           
        <p></p>
       
        <h4><b>✔所需器材</b></h4>
        <p className="step">
        🞄 啞鈴<br/> 
        🞄 有椅背的椅子<br/>                    
        </p>    
        <p></p>

        <h4><b>⚠注意事項</b></h4>
        <p></p>
        <p className="step"> 
        🔹因為此動作過程肩膀不能休息，故適合作為<b>力竭訓練</b><br/>
        </p>
       
        <p className="step"> 
        🔹肩膀、手腕有傷者不建議進行此動作<br/>                  
        </p>

        <p className="step"> 
        🔹<b>站姿</b>可練到更多<b>核心</b>，並使用更重重量，
          <b>坐姿</b>張力可以更集中在<b>肩膀</b>上，對<b>肌肥大</b>效果更好<br/>                  
        </p>

   

        <p className="step"> 
        🔹<b>啞鈴挑選 :</b>                       
        </p>
        <p className="step"> 
        🞄 新手 : 建議2.5~5kg<br/>
        </p>
        <p className="step"> 
        🞄 有訓練基礎 : 建議從7.5~10kg
        </p>
        <p className="step"> 
        🞄 一般肩推能做到30公斤以上者，可從12～15kg的啞鈴開始練習
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

export default S6ExerciseDetails;





