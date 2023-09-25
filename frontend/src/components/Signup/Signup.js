import './Signup.css';
import React from 'react';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import SignUpBG from './images/signupbg.png';
import { sendSignUpData } from '../../apis/sign';
const Signup = () => {
    const [passwordError, setPasswordError] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
    const [showPopup3, setShowPopup3] = useState(false);
    const [showPopupcorrect, setShowPopupcorrect] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      mail:'',
      password: '',
      confirmPassword: '',
      gender: '',
      height: '',
      weight: '',
      age:''
    });
    
    const handleSave = async () => {
        var obj = {
            account: formData.mail,
            password: formData.password,
            gender: formData.gender,
            height: formData.height,
            weight: formData.weight,
            name: formData.name,
            age:formData.age
          };
      
        if(formData.mail === ''
        || formData.age === ''
        || formData.confirmPassword === ''
        || formData.gender === '' 
        || formData.height === ''
        || formData.name ==='' 
        || formData.weight === ''
        || formData.password === ''){
          setShowPopup3(true);
        }
        else if (formData.password !== formData.confirmPassword) {
         setPasswordError('密碼與確認密碼不相符');
         setShowPopup2(true);
        }
        else{
        
        const data = await sendSignUpData(obj);
        if(data.status===false){
            console.log("OMG有錯");
            setShowPopup(true);
        }
        else{
            console.log("成功啦!");
            setShowPopupcorrect(true);
        }
      }
    }
    
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
  
      // Reset password error when user is typing in the password fields
      if (name === 'password' || name === 'confirmPassword') {
        setPasswordError('');
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
    };

    const closePopup = () => {
        setShowPopup(false);
      };
      const closePopup2 = () => {
        setShowPopup2(false);
      };
      const closePopup3 = () => {
        setShowPopup3(false);
      }; 
      const closePopupcorrect = () => {
        setShowPopupcorrect(false);
      };
      const [showPassword, setShowPassword] = useState(false);
      const [showPassword2, setShowPassword2] = useState(false);
    return (
   <div>  
    <img src={SignUpBG} alt = 'background' className='background-image'></img>  
    <div  className='wrapper  d-flex align-items-center  w-100'>
      
        <div className='login2 '>
            <h3 className='mb-3 text-center'> <b>SIGN UP</b></h3>
            <form onSubmit={handleSubmit} >
              <div className='form-group was-validated mb-2'>
                  <label htmlFor='name' className='form-label'> <b> • 姓名 :</b></label>
                      <input
                          type='text'
                          id='name'
                          name='name'
                          value={formData.name}
                          onChange={handleChange}
                          required
                          style={{ width: '74%' }}
                      />
              </div>
              <div className='form-group was-validated mb-2'>
                  <label htmlFor='mail' className='form-label'><b> ◆ 電子信箱 : </b></label>
                      <input
                          type='text'
                          id='mail'
                          name='mail'
                          value={formData.mail}
                          onChange={handleChange}
                          required
                          style={{ width: '60%' }}
                      />
              </div>
              <div className='form-group was-validated mb-2'>
              <label className='form-label'><b>• 性別 : </b></label>
                  <label htmlFor='male'>
                      <input
                          type='radio'
                          id='male'
                          name='gender'
                          value='男'
                          checked={formData.gender === '男'}
                          onChange={handleChange}
                      />
                          男生
                  </label>
                  <label htmlFor='female'>
                      <input
                          type='radio'
                          id='female'
                          name='gender'
                          value='女'
                          checked={formData.gender === '女'}
                          onChange={handleChange}
                      />
                          女生
                  </label>
              </div>
              <div className='form-group was-validated mb-2'>
                <label htmlFor='numberSelect' className='form-label'><b>◆  年齡 : </b></label>
                <select
                    id='age'
                    name='age'
                    value={formData.age}
                    onChange={handleChange}
                    required
                    style={{ width: '30%' }}
                >
              <option value=''></option>
              {Array.from({ length: 100}, (_, index) => index + 1).map((number) => (
              <option key={number} value={number}>
                  {number}
              </option>
              ))}
          </select>
              </div>
              <div className='form-group was-validated mb-2'>
              <label htmlFor='numberSelect' className='form-label'><b>◆  身高 : </b></label>
              <select
                  id='height'
                  name='height'
                  value={formData.height}
                  onChange={handleChange}
                  required
                  style={{ width: '30%' }}
              >
                  <option value=''></option>
                  {Array.from({ length: 171}, (_, index) => index + 80).map((number) => (
                  <option key={number} value={number}>
                      {number}
                  </option>
                  ))}
              </select>
              <span>   cm</span>
              </div>
              <div className='form-group was-validated mb-2'>
              <label htmlFor='numberSelect' className='form-label'><b>◆ 體重 : </b></label>
              <select
                  id='weight'
                  name='weight'
                  value={formData.weight}
                  onChange={handleChange}
                  required
                  style={{ width: '30%' }}
              >
                  <option value=''></option>
                  {Array.from({ length: 150 }, (_, index) => index + 1).map((number) => (
                  <option key={number} value={number}>
                      {number}
                  </option>
                  ))}
              </select>
              <span>   kg</span>
              </div>
              <div className='form-group was-validated mb-2' style={{position: 'relative'}}>
                  <label htmlFor='password' className='form-label'><b> ◆ 登入密碼 : </b></label>
                      <input
                          type={showPassword ? 'text' : 'password'}
                          id='password'
                          name='password'
                          value={formData.password}
                          onChange={handleChange}
                          required
                          style={{ width: '60%' }}
                      />
                <span
                  className='checkEye'
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '10px', cursor: 'pointer' }}
                  >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                  </span>
              </div>
              <div className='form-group was-validated mb-2' style={{position: 'relative'}}>
                  <label htmlFor='confirmPassword' className='form-label'><b>◆ 確認密碼 : </b></label>
                      <input
                          type={showPassword2 ? 'text' : 'password'}
                          id='confirmPassword'
                          name='confirmPassword'
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                          style={{ width: '60%' }}
                      />
                  <span
                      className='checkEye'
                      onClick={() => setShowPassword2(!showPassword2)}
                      style={{ position: 'absolute', right: '10px', cursor: 'pointer' }}
                  >
                      {showPassword2 ? '👁️' : '👁️‍🗨️'}
                  </span>
              {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
              </div>
              <div className='d-flex btn-wrapper justify-content-center'>
                  <button
                      type='submit'
                      className='btn-sm btn btn-success btn-block '
                      style={{width: '100%', margin: '0'}}
                      onClick={handleSave}
                      >
                      提交
                  </button>
                  {showPopup3 && (
              <div className="popup">
                <div className="popup-content">
                  <span className="close" onClick={closePopup3}>
                    &times;
                  </span>
                  <p>註冊失敗，輸入內容不完整。</p>
                  <button onClick={closePopup3}>返回註冊畫面</button>
                </div>
              </div>
            )}
                  {showPopup2 && (
              <div className="popup">
                <div className="popup-content">
                  <span className="close" onClick={closePopup2}>
                    &times;
                  </span>
                  <p>註冊失敗，密碼與確認密碼不相符。</p>
                  <button onClick={closePopup2}>返回註冊畫面</button>
                </div>
              </div>
            )}
            {showPopup && (
              <div className="popup">
                <div className="popup-content">
                  <span className="close" onClick={closePopup}>
                    &times;
                  </span>
                  <p>註冊失敗，此信箱已有人註冊。</p>
                  <button onClick={closePopup}>返回註冊畫面</button>
                </div>
              </div>
            )}            
            {showPopupcorrect && (
              <div className="popup">
                <div className="popup-content">
                  <span className="close" onClick={closePopupcorrect}>
                    &times;
                  </span>
                  <p>註冊成功!</p>
                  <Link to="/signin" className="link-button">返回登入畫面</Link>
                </div>
              </div>
            )}      
              </div>
            </form>
          </div>
      </div>
    </div> 
    )
}

export default Signup;
