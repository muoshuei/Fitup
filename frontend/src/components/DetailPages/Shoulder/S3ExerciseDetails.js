import React from 'react';

import s3 from './images/s3.png'
import TopNavbar from '../../TopNavbar/TopNavbar';



const S3ExerciseDetails = () => {
    return (
      <>
      <TopNavbar></TopNavbar>
    <div className="Content-container">
      <div className="row">
       <div className="col-4 text">               
         <img src={s3} className="w-100"/>
      <p></p>
      <h2>
        <b><font face="monospace" style={{ marginLeft: '100px' }}>啞鈴側平舉</font></b><br/>
        <span style={{ fontFamily: 'serif', marginLeft: '78px', fontSize: '24px' }}>Dumbbell Lateral Raise
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
        雙腳站立與肩同寬，收腹挺胸、背部挺直，保持身體穩定。<br/>
        </p>
        <p></p>

        <p className="step">
        <b>🞄 開始預備動作(二) :</b> <br/>                   
        </p>
        <p className="step">
        雙手抓握啞鈴於身體兩側，手肘微彎，拳眼向前。<br/>
        <p style={{fontSize: '12px'}}><b>(1) 手握在啞鈴的正中間:平均刺激三角肌的前、中、後束<br/>(2) 握在啞鈴的後半段:著重刺激三角肌中束、後束
        </b></p> 
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(一) :</b><br/>             
        </p>
        <p className="step">
        將啞鈴向兩側舉起，舉到手臂與地面平行。<br/>
        <p style={{fontSize: '12px'}}><b>➜注意啞鈴重量不可太重、啞鈴不需握太緊<br/>➜身體不需站太直並保持穩定，不過度借力、聳肩，手腕位置不應比手肘高
        </b></p> 
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(二) :</b><br/>
        </p>
        <p className="step">                  
        接著沿著原上升路徑緩慢落下。<br/>
        </p>
        <p></p>


    
        <h4><b>💪鍛鍊部位</b></h4>
        <p className="step">
        🞄 三角肌前束、三角肌中束為主<br/>               
        </p>  

        <p className="step"> 
        🞄 三角肌後束為輔<br/>                  
        </p>             
        <p></p>
       
        <h4><b>✔所需器材</b></h4>
        <p className="step">
        🞄 啞鈴(控制度最佳之重量)<br/>                    
        </p>    
        <p></p>

        <h4><b>⚠注意事項</b></h4>
        <p></p>
        <p className="step"> 
        🔹<b>訓練方式 :</b><br/>
        </p>
        <p className="step"> 
        🞄「全程下壓肩胛」的側平舉方式，建議舉起的角度可以到70～80°就好，利用最不容易代償的姿勢，換取你的側平舉活動範圍<br/>
        </p>
        <p className="step"> 
        🞄「隨動作移動肩胛」的側平舉方式，最大的側平舉角度可以到90°，利用最大的活動度，換取可能代償的風險<br/>
        </p>
    
        <p className="step"> 
        🔹<b>啞鈴挑選 :</b>                       
        </p>
        <p className="step"> 
        🞄 新手 : 建議從單手2～7％體重的重量開始(ex:體重70公斤，約2～5公斤)<br/>
        </p>
        <p className="step"> 
        🞄 有運動基礎 : 建議從單手7～10％體重的重量開始(ex:體重70公斤，約5～7公斤)
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

export default S3ExerciseDetails;





