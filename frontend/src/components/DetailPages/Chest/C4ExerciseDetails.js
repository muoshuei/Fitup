 
import React from 'react';
 
import c4 from './images/c4.png'
import TopNavbar from '../../TopNavbar/TopNavbar';



const C4ExerciseDetails = () => {
    return (
      <>
      <TopNavbar></TopNavbar>
    <div className="Content-container">
      <div className="row">
       <div className="col-4 text">               
         <img src={c4} className="w-100"/>
      <p></p>
      <h2>
        <b><font face="monospace">仰臥屈臂上拉</font></b><br/>
        <span style={{ fontFamily: 'serif', fontSize: '24px' }}>Dumbbell Pullover
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
        <b>🞄 開始預備動作(一) :</b> <br/>                   
        </p>
        <p className="step">
        橫臥在長凳上，挺胸收腹，身體與凳呈十字交叉，上背放在凳上，肩與凳邊齊平，
        頭及下半身懸於凳外，雙腳平放地上，以保持身體穩定。<br/>
        <p style={{fontSize: '12px'}}><b>➜保持臀部位置平行於地面
        </b></p>
        </p>
        <p></p>

        
        <p className="step">
        <b>🞄 開始預備動作(二) :</b> <br/>                   
        </p>
        <p className="step">
        兩臂彎曲，雙手以垂直地面方式握住啞鈴上面那端的槓片，
        手臂伸直於胸前，手肘微彎，掌心向上，啞鈴下垂。<br/>
        <p style={{fontSize: '12px'}}><b>➜手不必緊握啞鈴
        </b></p>
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(一) :</b><br/>             
        </p>
        <p className="step">
        吸氣，擴展胸廓，同時緩慢地將啞鈴向頭頂處儘可能下放，並固定身體。<br/>
        <p style={{fontSize: '12px'}}><b>➜外放手肘的同時，肩部於手部呈穩定且鎖定的姿勢，
        為胸大肌提供更多伸展張力
        </b></p>
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(二) :</b><br/>
        </p>
        <p className="step">                  
        逐漸下放啞鈴直到上臂處於水平位置。<br/>
        <p style={{fontSize: '12px'}}><b>➜下落時用胸大肌及闊背肌的力量緩慢下放，避免受傷
        </b></p>    
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(三) :</b><br/>             
        </p>
        <div className="step">
        當啞鈴降至最低位置時，即用胸大肌和背闊肌的力量將啞鈴沿著原路舉起，直到雙臂伸直於胸前，反覆進行。

        </div>
 
        <p></p>


    
        <h4><b>💪鍛鍊部位</b></h4>
        <p className="step">
        🞄 胸大肌、闊背肌、後三角肌為主<br/>                    
        </p>    
        <p className="step">  
        🞄 大圓肌、肱三頭肌長頭為輔<br/>                  
        </p>           
        <p></p>
       
        <h4><b>✔所需器材</b></h4>
        <p className="step">
        🞄 啞鈴<br/>                    
        </p>    
        <p className="step">
        🞄 臥推椅<br/>                    
        </p>
        <p></p>

        <h4><b>⚠注意事項</b></h4>
        <p></p>
        <p className="step"> 
        🔹儘量使用<b>身體的力量</b>，而非手臂的力量把啞鈴拉起來<br/>
        </p>
       
        <p className="step"> 
        🔹屬於<b>較高階訓練</b>，需要肩部與肩胛骨穩定，若有相關部位受傷應避免進行此動作<br/>                  
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

export default C4ExerciseDetails;





