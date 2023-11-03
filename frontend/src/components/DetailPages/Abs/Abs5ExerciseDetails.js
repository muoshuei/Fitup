 
import React from 'react';
 
import abs5 from './images/Abs5.png'
import TopNavbar from '../../TopNavbar/TopNavbar';


const B5ExerciseDetails = () => {
  
    return (
    <>
    <TopNavbar></TopNavbar>
    <div className="Content-container">
      <div className="row">
       <div className="col-4 text">               
         <img src={abs5} className="w-100"/>
      <p></p>
      <h2>
        <b><font face="monospace">仰臥抬腿</font></b><br/>
        <span style={{ fontFamily: 'serif', fontSize: '28px' }}>Leg Raise</span>
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
            平躺於平坦地面或墊子上，雙腳併攏伸直。<br/>
        
            </p>
            <p></p>
        
            <p className="step">
            <b>🞄 正式動作(一) :</b><br/>                   
            </p>
            <p className="step">               
            腹肌核心收緊，利用下腹肌的力量帶動雙腳。<br/>
            <p style={{fontSize: '12px'}}><b>➜若動作時感覺到下背有明顯拉力，
            易受傷，須著重學習如何用腹肌的下半部出力
            </b></p>
            </p>
            <p></p>

            <p className="step">
            <b>🞄 正式動作(二) :</b><br/>  
            </p>
            <p class="step">                 
            腿部抬升至屁股略微離開地面，同時吸氣，短暫停留後緩慢下放，同時吐氣。<br/>
            <p style={{fontSize: '12px'}}><b>➜注意勿讓腰部離開地板，
                且大腿放下時勿放得太低，讓腰部不會騰空即可
            </b></p>
            </p>
            <p></p>


            <h4><b>💪鍛鍊部位</b></h4>
            <p className="step">🞄 下腹肌群<br/></p>
          

            <p></p>

            <h4><b>✔所需器材</b></h4>
            <p className="step">
            🞄 平坦地面(瑜珈墊佳)<br/>                    
            </p>      
           

            <p></p>

            <h4><b>⚠注意事項</b></h4>
            <p className="step"> 
            🔹 初學者抬起大腿時，可微彎膝蓋，因腿伸越直，負重越重<br/>
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

export default B5ExerciseDetails;





