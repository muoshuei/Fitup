 
import React from 'react';
 
import abs4 from './images/Abs4.png'
import TopNavbar from '../../TopNavbar/TopNavbar';



const B4ExerciseDetails = () => {
    return (
    <>
    <TopNavbar></TopNavbar>
    <div className="Content-container">
      <div className="row">
       <div className="col-4 text">               
         <img src={abs4} className="w-100"/>
      <p></p>
      <h2>
        <b><font face="monospace" style={{ marginLeft: '105px' }}>單車式捲腹</font></b><br/>
        <span style={{ fontFamily: 'serif', marginLeft: '100px' , fontSize: '28px' }}>Bicycle Crunch</span>
      </h2>
      <div className="btn-container">
      <p></p>                
     <button className="custom-btn" style={{  marginLeft: '106px'}}><b>觀看影片</b></button>                               
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
            平躺於地面，雙手抱頭，腰臀貼緊地面，雙腳抬起呈90度，預備踩腳踏車動作。<br/>    
            </p>
            <p></p>
        
            <p className="step">
            <b>🞄 正式動作(一) :</b><br/>                   
            </p>
            <p className="step">               
            上半身以肩膀帶動向右旋轉，右腳彎曲碰至右左手手肘，左腳伸直，勿觸碰地面。<br/>
            <p style={{fontSize: '12px'}}><b>➜以核心抬起上身，切勿用以雙手將身體拉起，易造成頸部受傷
            </b></p>
            </p>
            <p></p>

            <p className="step">
            <b>🞄 正式動作(二) :</b><br/>  
            </p>
            <p class="step">                       
            上半身以肩膀帶動向左旋轉，左腳彎曲碰至右手手肘，右腳伸直，下肋骨與骨盆保持貼地，勿晃動。<br/>
            <p style={{fontSize: '12px'}}><b>➜轉體時上半身注意不要抬得太高
            </b></p>
            </p>
            <p></p>


            <h4><b>💪鍛鍊部位</b></h4>
            <p className="step">🞄 腹直肌<br/></p>
            <p className="step">🞄 腹外斜肌<br/></p>

            <p></p>

            <h4><b>✔所需器材</b></h4>
            <p className="step">
            🞄 平坦地面(有墊子佳)<br/>                    
            </p>      
           

            <p></p>

            <h4><b>⚠注意事項</b></h4>
            <p className="step"> 
            🔹 初學者可以讓下方腳彎曲踩在地面，能更加輕鬆地完成，再慢慢進階。<br/>
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

    </>
    );
};

export default B4ExerciseDetails;





