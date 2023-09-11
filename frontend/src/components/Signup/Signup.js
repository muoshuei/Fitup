import './Signup.css';
import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import SignUpBG from './images/signupbg.png';
const Signup = () => {
    const [formData, setFormData] = useState(
        {
            name: '',
            gmail:'',
            gender: '',
            password: '',
            confirmPassword: '',
            age:'',
            height: '',
            weight: '',
        }
    );
  
  
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
  
      if (name === 'password' || name === 'confirmPassword') {
        setPasswordError('');
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (formData.password !== formData.confirmPassword) {
        setPasswordError('密碼與確認密碼不相符');
      } else {
       
        console.log(formData);
        window.location.href = "/signin";
      }
    };
    
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    return (
    <div>
        {/* TODO- Render issue happens while adding background image. */ }
        <img src={SignUpBG} className='background-image'></img>
        <div  className='wrapper  d-flex align-items-center  w-100'>  
        <div className='login2 '>
            <h3 className='mb-3 text-center'> <b>SIGN UP</b></h3>
            <form onSubmit={handleSubmit} >

    <div className='form-group was-validated mb-2'>
        <label htmlFor='name' className='form-label'> <b>◆ 姓名 :</b></label>
            <input
                type='text'
                id='name' 
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                style={{ width: '72%' }}
            />
    </div>
       
     
    <div className='form-group was-validated mb-2'>
    <label htmlFor='email' className='form-label'> <b>◆ 電子郵件 :</b></label>
            <input
                type='email'
                id='email'
                name='mail'
                value={formData.mail}
                onChange={handleChange}
                required
                style={{ width: '60%' }}
            />
    </div>


    <div className='form-group was-validated mb-2'>
    <label className='form-label'><b>◆ 性別 : </b></label>
        <label htmlFor='male'>
            <input
                type='radio'
                id='male'
                name='gender'
                value='male'
                checked={formData.gender === 'male'}
                required
                onChange={handleChange}
            />
                男生
        </label>
        <label htmlFor='female'>
            <input
                type='radio'
                id='female'
                name='gender'
                value='female'
                checked={formData.gender === 'female'}
                required
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

    <div className='form-group was-validated mb-2'>
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
    style={{ position: 'absolute', right: '330px', 
    top: '66.5%', transform: 'translateY(-50%)', cursor: 'pointer' }}
    >
    {showPassword ? '👁️' : '👁️‍🗨️'}
    </span>
    </div>

    <div className='form-group was-validated mb-2'>
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
        style={{ position: 'absolute', right: '330px', 
        top: '74%', transform: 'translateY(-50%)', cursor: 'pointer' }}
    >
        {showPassword2 ? '👁️' : '👁️‍🗨️'}
    </span>
    {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
   </div>
     

    
   
    <button
        type='submit'
        className='btn-sm btn btn-success btn-rectangle move'
    >
        <Link to="/signin" className="white-text" >提交</Link>
    </button>
  
 

    </form>
    </div>
    </div>
    </div>
    
    )
}

export default Signup;
