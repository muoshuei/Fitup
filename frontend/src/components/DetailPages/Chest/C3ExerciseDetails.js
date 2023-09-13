 
import React from 'react';
 
import c3 from './images/c3.png'
import TopNavbar from '../../TopNavbar/TopNavbar';



const C3ExerciseDetails = () => {
    return (
      <>
      <TopNavbar></TopNavbar>
    <div className="Content-container">
      <div className="row">
       <div className="col-4 text">               
         <img src={c3} className="w-100"/>
      <p></p>
      <h2>
        <b><font face="monospace" style={{ marginLeft: '95px' }}>窄距上斜胸推</font></b><br/>
        <span style={{ fontFamily: 'serif', marginLeft: '20px', fontSize: '20px' }}>Close Grip Dumbbell Inclined Chest Press
        </span>
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
        仰臥在可調節斜度的長椅上，頭部處於高位<br/>
        <p style={{fontSize: '12px'}}><b>➜長椅傾角30-60度
        </b></p> 
        </p>
        <p></p>

        
        <p className="step">
        <b>🞄 開始預備動作(二) :</b> <br/>                   
        </p>
        <p className="step">
        雙手正握啞鈴，握距在25-30CM之間<br/>
        <p style={{fontSize: '12px'}}><b>➜窄距
        </b></p> 
        </p>
        <p></p>

        <p className="step">
        <b>🞄 開始預備動作(三) :</b> <br/>                   
        </p>
        <p className="step">
        頭、肩、髖、左腳、右腳 5點固定<br/>
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(一) :</b><br/>             
        </p>
        <p className="step">
        將啞鈴高舉位於肩膀上方。<br/>
        <p style={{fontSize: '12px'}}><b>➜兩手持鈴應平行於肩
        </b></p>    
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(二) :</b><br/>
        </p>
        <p className="step">                  
        吸氣時將啞鈴往下放到肩膀外側，吐氣時將啞鈴往上推至起始位置，反覆進行。<br/>
        <p style={{fontSize: '12px'}}><b>➜前臂之間的夾角應該是低於90°的
        </b></p>    
        </p>
        <p></p>




    
        <h4><b>💪鍛鍊部位</b></h4>
        <p className="step">
        🞄 胸大肌上部為主<br/>                    
        </p>    
        <p className="step">  
        🞄 肱三頭肌、三角肌前束、前鋸肌和胸骨小肌為輔<br/>                  
        </p>           
        <p></p>
       
        <h4><b>✔所需器材</b></h4>
        <p className="step">
        🞄 臥推椅<br/>                    
        </p>    
        <p className="step">
        🞄 啞鈴<br/>                    
        </p>
        <p></p>

        <h4><b>⚠注意事項</b></h4>
        <p></p>
        <p className="step"> 
        🔹謹記胸部訓練動作的本質為<b>「夾」</b><br/>
        </p>
       
        <p className="step"> 
        🔹訓練時同樣需要<b>胸部</b>要<b>挺起</b>，<b>兩肩</b>要<b>下沉</b>，切忌「含胸聳肩」<br/>                  
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

export default C3ExerciseDetails;





