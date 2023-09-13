 import React from 'react';
import abs1 from './images/Abs1.png'
import TopNavbar from '../../TopNavbar/TopNavbar';

const C1ExerciseDetails = () => {
    return (
    <>
    <TopNavbar></TopNavbar>
    
    <div className="Content-container">
      <div className="row">
       <div className="col-4 text">               
         <img src={abs1} className="w-100"/>
      <p></p>
      <h2>
        <b><font face="monospace" style={{ marginLeft: '115px' }}>仰臥起坐</font></b><br/>
        <span style={{ fontFamily: 'serif', marginLeft: '135px' , fontSize: '28px' }}>Sit Up</span>
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
            腳底平放在地上，兩膝分開與肩同寬，膝部屈曲約90度，膝蓋彎曲，避免腰背部受傷。<br/>
            根據腹肌的力量而決定雙手擺放的位置，雙手越靠頭部越吃力。<br/>
            初期把手靠於身體兩側，漸入佳境後，可以把手交叉貼於胸前或耳側。<br/>
            <p style={{fontSize: '12px'}}><b>➜固定或按住腳踝時，切勿過度用力，
            避免使用到大腿和髖部的屈肌，反而降低腹部肌肉的消耗量
            </b></p>
           
            </p>
            <p></p>
        
            <p className="step">
            <b>🞄 正式動作(一) :</b><br/>                   
            </p>
            <p className="step">               
            正常呼吸，當身體向上坐起時，呼氣，這樣可運動到腹部較深層的肌肉。<br/>
            <p style={{fontSize: '12px'}}><b>➜做仰臥起坐的速度宜緩慢，就如慢動作般；
                不宜動作太快，避免拉傷腹肌
            </b></p>
            </p>
            <p></p>

            <p className="step">
            <b>🞄 正式動作(二) :</b><br/>  
            </p>
            <p class="step">                 
            身體離地15~30公分後，應稍作停頓並收緊腹部肌肉。<br/>
            </p>
            <p></p>

            <p className="step">
            <b>🞄 正式動作(三) :</b><br/>                  
            </p>
            <p className="step">                  
            吸氣同時背部慢慢貼回地面，回復原位，背部著地時，
            便可以開始下一個仰臥起坐，如此循環動作。<br/>
            </p>
            
            <p></p>
                    
            <h4><b>💪鍛鍊部位</b></h4>
            <p className="step">🞄 上腹直肌、下腹直肌為主<br/></p>
            <p className="step">🞄 兩側的腹斜肌為輔<br/></p>

            <p></p>

            <h4><b>✔所需器材</b></h4>
            <p className="step">
            🞄 無<br/>                    
            </p>      
           

            <p></p>

            <h4><b>⚠注意事項</b></h4>
            <p className="step"> 
            🔹初學者要避免一次做太多，可以從一組5下開始做起，然後每回多加一下，<br/>
            <span style={{marginLeft: '18px' }}>
            直到每回可以做15下一組，再慢慢進展至可以做達3組 </span>
            </p>
            <p className="step"> 
            🔹不須勉強手肘去碰觸膝蓋，以免對頸椎造成傷害，引起神經壓迫<br/>
            </p>
            <p className="step"> 
            🔹不宜強迫轉動身體
            <span style={{fontSize: '12px'}}><b>➜右手手肘接觸左膝，左手手肘接觸右膝等動作<br/>
            </b> 
            </span>
            <p style={{marginLeft: '18px' }}> 
            對增強腹部肌肉力量無顯著幫助，且讓下背因壓迫受傷
            </p></p>
            <p>

    </p>
           
              
             
              </div>
            </div>
        </div>
    </div>
    </>


    );
};

export default C1ExerciseDetails;





