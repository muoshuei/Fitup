 
import React from 'react';
 
import l2 from './images/L2.png'
import TopNavbar from '../../TopNavbar/TopNavbar';



const L2ExerciseDetails = () => {
    return (
      <>
      <TopNavbar></TopNavbar>
    <div className="Content-container">
      <div className="row">
       <div className="col-4 text">               
         <img src={l2} className="w-100"/>
      <p></p>
      <h2>
        <b><font face="monospace" >前跨蹲</font></b><br/>
        <span style={{ fontFamily: 'serif', fontSize: '24px' }}>Forward Lunge</span>
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
        <b>🞄 開始預備動作 :</b> <br/>                   
        </p>
        <p className="step">
        挺身站立，雙腳打開與髖部同寬，手臂放在兩側後。<br/>
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(一) :</b><br/>             
        </p>
        <p className="step">
        往前跨出一隻腳時，核心出力並將雙手叉腰，雙腳屈膝直到 90 度角的姿勢，確保前膝沒有超過前腳趾。<br/>
        </p>
        <p style={{fontSize: '12px'}}><b>➜跨步時以「臀部」發力，且身體保持中立，不要過度前傾或後仰，後腳盡量不跪地
        </b></p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(二) :</b><br/>
        </p>
        <p className="step">                  
        將重量放在前腿上，後腿只需維持平衡並保持挺胸，透過前腳往下踩來回到起始姿勢。<br/>
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(三) :</b><br/>
        </p>
        <p className="step">                  
        換腳，重複上述動作。<br/>
        </p>
        <p></p>


    

    
        <h4><b>💪鍛鍊部位</b></h4>
        <p className="step">
        🞄 臀大肌<br/>                    
        </p>  
        <p className="step">
        🞄 股四頭肌<br/>                    
        </p>  
        <p className="step">
        🞄 大腿後側肌群<br/>                    
        </p>  
        <p className="step">
        🞄 小腿肌<br/>                    
        </p>  
       
       
        
        <p></p>
       
        <h4><b>✔所需器材</b></h4>
        <p className="step">
        🞄 無<br/>                    
        </p>  
        <p></p>

        <h4><b>⚠注意事項</b></h4> 
        <p className="step"> 
        🔹步距不宜過大                 
        </p>
        <p className="step"> 
        🔹膝蓋不宜超過腳尖                 
        </p>
        <p className="step"> 
        🔹膝蓋指向前方                
        </p>
        <p className="step"> 
        🔹雙腳與髖部同寬              
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

export default L2ExerciseDetails;





