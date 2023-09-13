
import React from 'react';
import s1 from './images/s1.png'
import TopNavbar from '../../TopNavbar/TopNavbar';



const S1ExerciseDetails = () => {
    return (
        <>
        <TopNavbar></TopNavbar>
    <div className="Content-container">
      <div className="row">
       <div className="col-4 text">               
         <img src={s1} className="w-100"/>
      <p></p>
      <h2>
        <b><font face="monospace" style={{ marginLeft: '120px' }}>啞鈴肩推</font></b><br/>
        <span style={{ fontFamily: 'serif', marginLeft: '50px' , fontSize: '28px'}}>Dumbbell Shoulder Press</span>
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
            上抬啞鈴，將啞鈴垂直放在大腿前段靠近膝蓋的位置。左右腿往上蹬，將啞鈴推到手部可以發力的位置，再用雙手一起將啞鈴上抬至起始位置，同時肩膀外旋。<br/>
        </p>
        <p></p>

        <p className="step">
            <b>🞄 開始預備動作(二) :</b> <br/>
        <p className="step">                  
            上背貼於椅背，產生支撐點，吸氣收緊核心，下背挺直，不拱腰。手肘往身體內扣約 30 度，手肘指向地面且前臂與地面垂直。<br/>
        </p>
        <p></p>

        <p className="step">
            <b>🞄 正式動作(一) :</b><br/>             
        </p>
        <p className="step">
            吐氣開始上推，速度放慢且保持身體穩固，感受肩膀三角肌的收縮，上抬置頂點時，<br/>手肘不要鎖死，手臂不用完全打直。<br/>
        </p>
        <p></p>

        <p className="step">
            <b>🞄 正式動作(二) :</b><br/>
        </p>
        <p className="step">                  
            下放時吸氣，保持慢且穩，下放至最低點的高度，但不低於水平，手臂彎曲呈 90 度。<br/>
        </p>
        <p></p>

        <p className="step">
            <b>🞄 結束動作 :</b><br/>
        </p>
        <p className="step">
            大腿上抬，讓啞鈴靠著大腿順勢接住啞鈴的重量，接住啞鈴。<br/>
        </p>
        
                        
                    
        <p></p>
    
            <h4><b>💪鍛鍊部位</b></h4>
        <p className="step">
            🞄 三角肌前束、三角肌中束為主<br/>                    
            </p>  
        <p className="step">
            🞄 三角肌後束、三頭肌為輔<br/>
        </p>
            
        <p></p>

        <p>
        <h4><b>✔所需器材</b></h4>
        <p className="step">
        🞄 臥推椅(一般椅建議有椅背)<br/>                    
        </p>      
        <p className="step">                        
        🞄 啞鈴(控制度最佳之重量)<br/></p>
        </p>  

        <p></p>

        <h4><b>⚠注意事項</b></h4>
        <p className="step"> 
        🔹手腕盡可能控制在肉墊位置，不過度彎折，否則易受傷<br/>
        </p>
        <p className="step"> 
        🔹<b>不過度拱腰</b>，下背易受傷，更會導致手部的姿勢跟著錯誤<br/>
        </p>
        <p className="step"> 
        🔹執行時，手和身體平行後，再內收30～35°，<b>手外開角度不宜過大</b><br/>
        </p>
        <p className="step"> 
        🔹全程手肘、肩胛骨都<b>不要聳肩或鎖死</b>，而隨著槓鈴的上推、下放來進行收縮<br/>
        </p>
        <p className="step"> 
        🔹<b>啞鈴挑選 :</b>                       
        </p>
        <p className="step"> 
        🏋‍♀新手 : 建議從單手5～10％體重的重量開始(ex:體重70公斤，約3～7公斤)<br/>
        </p>
        <p className="step"> 
        🏋‍♀有運動基礎 : 建議從單手10～15％體重的重量開始(ex:體重70公斤，約7～10公斤)
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

export default S1ExerciseDetails;





