 
import React from 'react';
 
import arm1 from './images/arm1.png'
import TopNavbar from '../../TopNavbar/TopNavbar';



const H1ExerciseDetails = () => {
    return (
    <>
    <TopNavbar></TopNavbar>
    <div className="Content-container">
      <div className="row">
       <div className="col-4 text">               
         <img src={arm1} className="w-100"/>
      <p></p>
      <h2>
        <b><font face="monospace" style={{ marginLeft: '115px' }}>二頭彎舉</font></b><br/>
        <span style={{ fontFamily: 'serif', marginLeft: '115px' , fontSize: '28px'}}>Biceps Curl</span>
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
        <b>🞄 開始預備動作 :</b> <br/>                   
        </p>
        <p className="step">
        站立時雙腳打開與髖部同寬，膝蓋放鬆微彎，雙臂置於身體兩側，雙手各握住一個啞鈴。<br/>肩膀往後收並往下放，收緊腹肌，準備開始。<br/>
        <p style={{fontSize: '12px'}}><b>➜只要肩胛骨向後收緊即可，不要過度往後擠壓背部，甚至是拱腰，易受傷</b></p> 
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(一) :</b><br/>             
        </p>
        <p className="step">
        手肘緊靠身體兩側，位置剛好落在胸腔前側，掌心翻轉向上朝外，這個動作叫做外旋，
        <br/>同時將啞鈴向肩膀彎舉，舉到最高點時，把二頭肌完全收緊。<br/>
        <p style={{fontSize: '12px'}}><b>➜啞鈴彎舉的速度不要太快，將你的身體保持直立，避免使用三角肌前束來代償</b></p> 
        </p>
    
        <p></p>

        <p className="step">
        <b>🞄 正式動作(二) :</b><br/>
        </p>
        <p className="step">                  
        往反方向運動，掌心內旋，回到起始姿勢，這樣算完成 1 次。<br/>
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(三) :</b><br/>
        </p>
        <p className="step">                  
        重複同樣動作，確保不是透過擺動或晃動身體來出力產生動能。<br/>
        </p>
        <p></p>

    
        <h4><b>💪鍛鍊部位</b></h4>
        <p className="step">
        🞄 二頭肌為主<br/>                    
        </p>  
        <p className="step">
        🞄 三頭肌、前三角肌、核心為輔<br/>
        </p>
        
        <p></p>
        <p>
        <h4><b>✔所需器材</b></h4>
        <p className="step">
        🞄 啞鈴(控制度最佳之重量)<br/>                    
        </p>      
        <p></p>

        <h4><b>⚠注意事項</b></h4> 

        <p className="step"> 
        🔹<b>啞鈴挑選 :</b>                       
        </p>
        <p className="step"> 
        🞄 新手 : 建議從單手3～8％體重的重量開始(ex:體重70公斤，單手拿2~5公斤)<br/>
        </p>
        <p className="step"> 
        🞄 有運動基礎 : 建議從單手8~10％體重的重量開始(ex:體重70公斤，單手拿5~7公斤)
        </p>
    
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

export default H1ExerciseDetails;





