 
import React from 'react';
 
import l3 from './images/L3.png'
import TopNavbar from '../../TopNavbar/TopNavbar';



const L3ExerciseDetails = () => {
    return (
      <>
      <TopNavbar></TopNavbar>
    <div className="Content-container">
      <div className="row">
       <div className="col-4 text">               
         <img src={l3} className="w-100"/>
      <p></p>
      <h2>
        <b><font face="monospace" style={{ marginLeft: '65px' }}>啞鈴羅馬尼亞硬舉</font></b><br/>
        <span style={{ fontFamily: 'serif', marginLeft: '60px', fontSize: '24px' }}>Dumbbel Romanian Deadlift</span>
      </h2>
      <div className="btn-container">
      <p></p>                
     <button className="custom-btn" style={{ marginLeft: '100px'}}><b>觀看影片</b></button>                               
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
        雙手各持一啞鈴，身體直立，挺胸收腹，面向前，雙手自然下垂，掌心朝向大腿。 <br/>
        </p>
        <p></p>

        <p className="step">
        <b>🞄 開始預備動作(二) :</b> <br/>                   
        </p>
        <p className="step">
        雙腳開立，與肩同寬，膝蓋微彎。<br/>
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(一) :</b><br/>             
        </p>
        <p className="step">
        上腰部彎曲，臀部向後推做髖關節絞鍊。
        <span style={{fontSize: '12px'}}>
        <b>➜屁股向後推，並讓軀幹向前傾 </b><br/></span>
        背部挺直，將啞鈴順著腿前緩慢下放，同時吸氣，
        膝蓋隨著啞鈴下降逐漸彎曲，直到感覺大腿後側拉伸至極限。<br/>
        
        <span style={{fontSize: '12px'}}>
        <b>➜ 啞鈴下放速度不宜過快，易受傷且降低腿後腱肌群的感受度，
        最底端只需低於膝蓋，呈半蹲姿勢，下放位置不須過低，
        易使腰椎後凸代償受傷</b><br/></span>
        </p>
        <p></p>

        <p className="step">
        <b>🞄 正式動作(二) :</b><br/>
        </p>
        <p className="step">                  
        伸展臀部及腰部，返回起始位置
        <span style={{fontSize: '12px'}}>
        <b>➜站姿</b><br/></span>
        同時呼氣，反覆進行。
        <span style={{fontSize: '12px'}}>
        <b>➜起身的過程同樣保持背部挺直</b></span>
        
        </p>
        <p></p>

    

    
        <h4><b>💪鍛鍊部位</b></h4>
        <p className="step">
        🞄 腿後側(股二頭肌)為主<br/>                    
        </p>  
        <p className="step">
        🞄 臀部、前臂、上半身核心、上背、下背為輔<br/>                    
        </p>  
       
       
        
        <p></p>
       
        <h4><b>✔所需器材</b></h4>
        <p className="step">
        🞄 啞鈴<br/>                    
        </p>  
        <p></p>

        <h4><b>⚠注意事項</b></h4> 
        <p className="step"> 
        🔹膝關節不宜過度伸直，會導致膝關節壓力過大                  
        </p>
        <p className="step"> 
        🔹駝背、拱腰會導致脊椎不中立，易受傷且影響訓練成效                 
        </p>
        <p className="step"> 
        🔹腰椎不須過於前凸，易受傷                  
        </p>
        <p className="step"> 
        🔹膝蓋內夾造成膝蓋內側的壓迫，易受傷                  
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

export default L3ExerciseDetails;





