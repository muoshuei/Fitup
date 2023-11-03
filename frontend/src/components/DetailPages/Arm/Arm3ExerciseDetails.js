 
import React from 'react';
 
import arm3 from './images/arm3.png'
import TopNavbar from '../../TopNavbar/TopNavbar';



const H3ExerciseDetails = () => {
    return (
      <>
  <TopNavbar></TopNavbar>
    <div className="Content-container">
      <div className="row">
       <div className="col-4 text">               
         <img src={arm3} className="w-100"/>
      <p></p>
      <h2>
        <b><font face="monospace">錘式彎舉</font></b><br/>
        <span style={{ fontFamily: 'serif', fontSize: '24px' }}>Hammer Curl</span>
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
        選擇站姿、坐姿。
        <span style={{fontSize: '12px'}}><b>➜站姿:自然站立，雙腳與肩同寬，核心保持穩定；坐姿:背部貼緊椅背<br/>
        </b> 
        </span>
        後挺胸收腹，腰背挺直，雙手自然握持啞鈴下垂於身體兩側，身體勿晃動。<br/>
        </p>
        <p></p>

        <p className="step">
        <b>🞄 開始預備動作(二) :</b> <br/>                   
        </p>
        <p className="step">
        手肘貼著身體，掌心相對。<br/>
     
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(一) :</b><br/>             
        </p>
        <p className="step">
        上臂固定不動，收縮肱二頭肌將啞鈴潮間部方向向上彎舉，同時呼氣。直到肱二頭肌收縮至極限，啞鈴與肩同高。<br/>
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(二) :</b><br/>
        </p>
        <p className="step">                  
        在頂端短暫停留，感受肱二頭肌的收縮，緩慢將啞鈴下放回起始位置，同時吸氣，反覆進行。<br/>
        </p>
        <p></p>

    

    
        <h4><b>💪鍛鍊部位</b></h4>
        <p className="step">
        🞄 肱橈肌為主<br/>                    
        </p>  
        <p className="step">
        🞄 肱二頭肌、肱肌、前臂伸肌和前臂屈肌為輔<br/>                    
        </p>  
       
       
        
        <p></p>
       
        <h4><b>✔所需器材</b></h4>
        <p className="step">
        🞄 啞鈴(控制度最佳之重量)<br/>                    
        </p>  
        <p></p>

        <h4><b>⚠注意事項</b></h4> 
        <p className="step"> 
        🔹動作時肩膀勿借到力                    
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

export default H3ExerciseDetails;





