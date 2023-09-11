 
import React from 'react';
 
import abs2 from './images/Abs2.png'



const B2ExerciseDetails = () => {
    return (
    <div className="Content-container">
      <div className="row">
       <div className="col-4 text">               
         <img src={abs2} className="w-100"/>
      <p></p>
      <h2>
        <b><font face="monospace" style={{ marginLeft: '145px' }}>棒式</font></b><br/>
        <span style={{ fontFamily: 'serif', marginLeft: '148px' , fontSize: '28px' }}>Plank</span>
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
            <b>🞄 開始預備動作 :</b> <br/>                  
            </p>
            <p className="step">
            膝蓋跪地，手臂彎曲，放低肘部至地面，
            手肘位於肩部正下方，手掌可握拳或打開貼地。<br/>
            <p style={{fontSize: '12px'}}><b>➜手臂位置垂直於地面
            </b></p>    
            </p>
            <p></p>
        
            <p className="step">
            <b>🞄 正式動作(一) :</b><br/>                   
            </p>
            <p className="step">               
            雙腳分次向後踩，伸直雙腿，呈現平板式。<br/>
            <p style={{fontSize: '12px'}}><b>➜雙腳距離微寬來穩固
            </b></p>
            </p>
            <p></p>

            <p className="step">
            <b>🞄 正式動作(二) :</b><br/>  
            </p>
            <p class="step">                 
            腹肌和臀大肌用力收緊，臀部與肩部呈一直線，視線停留在手上，脖子維持自然穩定姿勢。<br/>
            <p style={{fontSize: '12px'}}><b>➜身體從頭到腳跟成一直線，保持頸椎中立
            </b></p>
            </p>
            <p></p>

            <p className="step">
            <b>🞄 正式動作(三) :</b><br/>                  
            </p>
            <p className="step">                  
            肩部向後用力縮緊，股四頭肌和雙腳保持放鬆。<br/>
            <p style={{fontSize: '12px'}}><b>➜為身體製造張力，可在同一個姿勢上維持更久，
              想像正把手肘和腳尖拉向彼此，大腿中間也用力夾著一顆球
            </b></p>
            </p>
            <p></p>

            <p className="step">
            <b>🞄 正式動作(四) :</b><br/>                  
            </p>
            <p className="step">                  
            深呼吸，維持上述姿勢越久越好，注意臀部不要翹起或下垂。<br/>
            </p>
            <p></p>

            <h4><b>💪鍛鍊部位</b></h4>
            <p className="step">🞄 腹橫肌<br/></p>
            <p className="step">🞄 多裂肌(下背部分)<br/></p>

            <p></p>

            <h4><b>✔所需器材</b></h4>
            <p className="step">
            🞄 無<br/>                    
            </p>      
           

            <p></p>

            <h4><b>⚠注意事項</b></h4>
            <p className="step"> 
            🞄 一組至少做30~40秒<br/>
            </p>     
            <p>
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

export default B2ExerciseDetails;





