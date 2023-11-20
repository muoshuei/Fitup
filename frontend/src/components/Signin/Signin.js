import './Signin.css';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SignInBG from './images/signinbg.png';
import Cookies from 'js-cookie';
import { sendSignInData } from '../../apis/sign';
import { useDispatch, useSelector } from 'react-redux';
import { signInAction } from '../../redux/actions/authActions';

function Signin(){
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupcorrect, setShowPopupcorrect] = useState(false);
  const [formData, setFormData] = useState({
     mail:'',
     password: '',
  });
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth?.user);
  useEffect(()=>{

  },[])
  const handleSave = async () => {
    var obj = {
      account: formData.mail,
      password: formData.password
    };
    await dispatch(signInAction(obj, setShowPopupcorrect, setShowPopup))
}
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const closePopup = () => {
    setShowPopup(false);
  };
    return (
    <div>
      {/* TODO- Render issue happens while adding background image. */ }
      <img src={SignInBG} className="background-image"></img>
      <div  className='wrapper  d-flex align-items-center  w-100'>
        <div className='login '>
            <h3 className='mb-3 text-center'> Welcome to <b>FITUP</b></h3>
           
            <div className='form-group  was-validated mb-2'>
                <label htmlFor='email' className='form-label'>&#x1F4E7; <b>電子郵件</b></label>
                <input 
                    type="email" 
                    className='form-control' 
                    placeholder='請輸入內容' 
                    id='email'
                    name='mail'
                    value={formData.mail}
                    onChange={handleChange}
                    required/>    
              
            </div>

            <div className='form-group was-validated mb-2'>
                <label htmlFor='password' className='form-label'>&#x1F511; <b>密碼</b></label>
                <input 
                  type="password" 
                  className='form-control' 
                  placeholder='請輸入內容'
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  required/>
              
            </div>

            <div className='d-flex btn-wrapper'>
            <button
              type='signin'
              className='btn-sm btn btn-success btn-block  rounded'
              onClick={handleSave}
            >
              登入
            </button>

            {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>登入失敗，電子信箱或密碼錯誤。</p>
            <button onClick={closePopup}>返回登入畫面</button>
          </div>
        </div>
      )}      
      {showPopupcorrect && (
        <div className="popup">
          <div className="popup-content">
            <p>登入成功!</p>
            <Link to="/home" className="link-button">進入Fitup系統</Link>
          </div>
        </div>
      )}      
      
      <div>
        <button type="signup" onClick={()=>navigate("/signup")}className="btn btn-success btn-block btn-sm rounded">
          註冊
        </button>
      </div>
          </div>
           
        </div>
    </div>
    </div>
    
    
    )
    
}

export default Signin;
