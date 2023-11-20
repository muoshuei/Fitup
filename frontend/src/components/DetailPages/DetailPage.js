import React from 'react';
import abs1 from './Abs/images/Abs1.png'
import TopNavbar from '../TopNavbar/TopNavbar';
import { detailContents } from './details';
import "./details.css";
import { useLocation } from 'react-router-dom';
const DetailPage = (props) => {
    const data = useLocation();
    const exerciseId = data.state ? data.state.exerciseId: "ab1";
    
    const details = detailContents[exerciseId];
    const imageSrc = abs1;
    return (
    <>
    <TopNavbar></TopNavbar>
    
    <div className="Content-container">
      <div className="row">
       <div className="col-4 text">               
         <img src={imageSrc} className="w-100"/>
      <p></p>
      <h2>
        <b><font face="monospace" >{details.name}</font></b><br/>
        <span>{details.name_en}</span>
      </h2>
      <div className="btn-container">
      <p></p>                
     <button className="custom-btn" ><b>觀看影片</b></button>                               
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
            {
                details.preAction.map((e)=>
                <>
                <p className="step">
                    {e.main}
                </p>
                {e.tips.length !== 0
                ? <p className='tips'><b>➜{e.tips}</b></p>
                : <></>
                }
                </>)
            }
            {
                details.action.map((e, i)=>
                <>
                <p className="step">
                <b>🞄 正式動作-{i+1} :</b>
                </p>
                <p className="step">               
                    {e.main}
                </p>
                {e.tips.length !== 0
                ? <p className='tips'><b>➜{e.tips}</b></p>
                : <></>
                }
                
                </>
                )
            }
        
            <h4><b>💪鍛鍊部位</b></h4>
            {
                details.partsTrained.map((e)=>
                <p className="step">🞄 {e}</p>
                )
            }

            <h4><b>✔所需器材</b></h4>
            {
                details.tools.length === 0
                ? <p className="step">🞄 無</p>
                : details.tools.map((e)=><p className="step">🞄 {e}</p>)
            }


            <h4><b>⚠注意事項</b></h4>
            {
                details.caution.map((e)=>
                <>
                    <p className="step"> 
                    🔹{e.main}
                    </p>
                    <p className='tips'>
                    <b>
                    {e.tips.length !== 0 ? `➜${e.tips}` : <></>}
                    </b>
                    </p>
                </>)
            }     
              </div>
            </div>
        </div>
    </div>
    </>


    );
};

export default DetailPage;





