 
import React from 'react';
 
import c5 from './images/c5.png'
import TopNavbar from '../../TopNavbar/TopNavbar';




const C5ExerciseDetails = () => {
    return (
      <>
      <TopNavbar></TopNavbar>
    <div className="Content-container">
      <div className="row">
       <div className="col-4 text">               
         <img src={c5} className="w-100"/>
      <p></p>
      <h2>
        <b><font face="monospace">平躺啞鈴飛鳥</font></b><br/>
        <span style={{ fontFamily: 'serif', fontSize: '28px' }}>Dumbbell Flye</span>
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
              平躺於地面上，同時挺胸。<br/> 
              </p>
              <p></p>

            <p className="step">
            <b>🞄 開始預備動作(二) :</b> <br/>                   
            </p>
              <p className="step">
              肩胛骨後收，確保肩胛骨穩定、不聳肩，腰部與地面間留至少一個拳頭的空間。<br/> 
              </p>
            <p></p>


            <p className="step">
            <b>🞄 正式動作(一) :</b><br/>                   
            </p>
            <p className="step">               
            雙手平行上舉，雙手手肘微彎並緩緩打開。<br/>
            </p>
            <p></p>
            <p className="step">
            <b>🞄 正式動作(二) :</b><br/>
            
            </p>
            <p class="step">                 
            雙手向外畫圓展開，緩慢向兩側下降，下降到與身體平行的位置，伸展的同時吸氣。<br/>
            <span style={{fontSize: '12px'}}><b>➜下降的程度以自己舒適為主<br/>
            </b> 
            </span>
            </p>
            <p></p>

            <p className="step">
            <b>🞄 正式動作(三) :</b><br/>                  
            </p>
            <p className="step">                  
            雙手將啞鈴夾回胸部上方<br/>
            <span style={{fontSize: '12px'}}><b>➜全程維持手肘微彎角度並收緊核心挺胸<br/></b> 
            </span>
            最後一刻將雙手手肘伸直，反覆進行，回復起始動作時吐氣。
            
            </p>
            
            <p></p>
                    
            <h4><b>💪鍛鍊部位</b></h4>
            <p className="step">🞄 胸大肌、前三角肌為主<br/></p>
            <p className="step">🞄 肱橈肌、三頭肌、二頭肌、前鋸肌、闊背肌為輔<br/></p>
            <p>

            <p></p>

            <h4><b>✔所需器材</b></h4>
            <p className="step">
            🞄 平坦地面<br/>                    
            </p>      
            <p className="step">                        
            🞄 啞鈴<br/></p>
            </p>       

            <p></p>

            <h4><b>⚠注意事項</b></h4>
            <p className="step"> 
            🔹此動作不需使用大重量啞鈴<br/>
            </p>
            <p className="step"> 
            🔹若發現動作後手部痠痛程度大於胸大肌，則需減輕啞鈴重量，著重於胸大肌的感受度<br/>
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

export default C5ExerciseDetails;





