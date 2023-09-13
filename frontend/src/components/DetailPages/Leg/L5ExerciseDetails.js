 
import React from 'react';
 
import l5 from './images/L5.png'
import TopNavbar from '../../TopNavbar/TopNavbar';



const L5ExerciseDetails = () => {
    return (
      <>
      <TopNavbar></TopNavbar>
    <div className="Content-container">
      <div className="row">
       <div className="col-4 text">               
         <img src={l5} className="w-100"/>
      <p></p>
      <h2>
        <b><font face="monospace" style={{ marginLeft: '77px' }}>俯臥啞鈴腿彎舉</font></b><br/>
        <span style={{ fontFamily: 'serif', marginLeft: '85px', fontSize: '20px' }}>Prone Dumbbell Leg Curl</span>
      </h2>
      <div className="btn-container">
   
      <p></p>                
     <button className="custom-btn " style={{  marginLeft: '100px'}}><b>觀看影片</b></button>                               
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
        選擇適當重量啞鈴放置地面。<br/>
        </p>
        <p></p>

        <p className="step">
        <b>🞄 開始預備動作(二) :</b> <br/>                   
        </p>
        <p className="step">
        趴在啞鈴前方，雙腳放在啞鈴柄的兩側。<br/>
        </p>
        <p></p>



        <p className="step">
        <b>🞄 正式動作(一) :</b><br/>             
        </p>
        <p className="step">
        雙腳將啞鈴夾起，兩腿伸直，小腿懸空。<br/>
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(二) :</b><br/>
        </p>
        <p className="step">                  
        股二頭肌發力，朝臀部方向儘可能地彎曲膝蓋至極限。<br/>
        <span style={{fontSize: '12px'}}>
        <b>➜腳底始終朝天花板，重量彎舉到臀部上方的時候，避免臀部向上抬起</b><br/></span>
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(三) :</b><br/>
        </p>
        <p className="step">                  
        短暫停留後，緩慢下放，在啞鈴快要碰到地面之前停住，反覆進行。<br/>
        </p>
        <p></p>

    

    
        <h4><b>💪鍛鍊部位</b></h4>
        <p></p> 
        <p className="step">
        🞄 股二頭肌為主<br/>                    
        </p>  
        <p className="step">
        🞄 內收肌、臀部肌肉為輔<br/>                    
        </p>  
       
       
        
        <p></p>
       
        <h4><b>✔所需器材</b></h4>
        <p></p> 
        <p className="step">
        🞄 啞鈴<br/>                    
        </p>  
        <p className="step">
        🞄 平板凳<br/>                    
        </p> 
        <p className="step">
        🞄 平坦地面<br/>                    
        </p> 
        <p></p>

        <h4><b>⚠注意事項</b></h4> 
        <p></p> 
        <p className="step"> 
        🔹全程注意力須保持集中，避免啞鈴掉落造成受傷                
        </p>
        <p className="step"> 
        🔹若有安全疑慮或無法受啞鈴重量可用於<b>瑜珈球代替</b>                 
        </p>
        <p className="step"> 
        🔹若需<b>加強訓練</b>效果建議使用<b>平板凳</b>進行動作，可讓腿完全伸直，獲得更大刺激                   
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

export default L5ExerciseDetails;





