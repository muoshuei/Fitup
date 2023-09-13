 
import React from 'react';
 
import c2 from './images/c2.png'
import TopNavbar from '../../TopNavbar/TopNavbar';


const C2ExerciseDetails = () => {
    return (
      <>
      <TopNavbar></TopNavbar>
    <div className="Content-container">
      <div className="row">
       <div className="col-4 text">               
         <img src={c2} className="w-100"/>
      <p></p>
      <h2>
        <b><font face="monospace" style={{ marginLeft: '110px' }}>啞鈴上夾胸</font></b><br/>
        <span style={{ fontFamily: 'serif', marginLeft: '78px', fontSize: '20px' }}>Dumbbell Inclined Bench Fly
        </span>
      </h2>
      <div className="btn-container">
      <p></p>                
     <button className="custom-btn"  style={{  marginLeft: '110px'}}><b>觀看影片</b></button>                               
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
        雙手持啞鈴坐在臥推椅上，雙腳平均落在地面，接著慢慢躺平，手肘打直，挺胸縮小腹。<br/>
        <p style={{fontSize: '12px'}}><b>➜使用啞鈴雙手緊握，食指可以穩定啞鈴，讓它不搖晃
        </b></p> 
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(一) :</b><br/>             
        </p>
        <p className="step">
        雙手平行上舉。<br/>
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(二) :</b><br/>
        </p>
        <p className="step">                  
        吸氣，雙手手肘微彎並緩緩打開，展開同時將啞鈴對準自己的心窩，緩慢向兩側下降。<br/>
        下降到與身體平行即可。<br/>
        <p style={{fontSize: '12px'}}><b>➜下降的程度會因每個人肩關節柔軟度不同而有差異，以自己感覺舒適為主
        </b></p>    
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(三) :</b><br/>             
        </p>
        <p className="step">
        雙手將啞鈴夾回胸部上方，最後一刻手肘伸直，完成動作。<br/>
        </p>
        <p></p>


    
        <h4><b>💪鍛鍊部位</b></h4>
        <p className="step">
        🞄 胸大肌<br/>                    
        </p>    
        <p className="step">  
        🞄 前三角肌<br/>                  
        </p>           
        <p></p>
       
        <h4><b>✔所需器材</b></h4>
        <p className="step">
        🞄 臥推椅(或有高度且可躺之平面)<br/>                    
        </p>    
        <p className="step">
        🞄 啞鈴(控制度最佳之重量)<br/>                    
        </p>
        <p></p>

        <h4><b>⚠注意事項</b></h4>
        <p></p>
        <p className="step"> 
        🔹<b>初學階段</b>建議手肘從開始到結束，都維持<b>固定角度</b>，避免用到錯誤的肌群<br/>
        </p>
       
        <p className="step"> 
        🔹啞鈴飛鳥使用到的關節很多，所以在訓練過程中，記得<b>收緊屁股與核心、挺胸</b><br/>
            
        </p>
        <p style={{marginLeft: '18px' }}> 
        以避免磨損肩關節、韌帶拉傷，甚至是肩峰韌帶纖維化等傷害發生<br/>                  
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

export default C2ExerciseDetails;





