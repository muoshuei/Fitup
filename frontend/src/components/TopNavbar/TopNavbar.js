import 'bootstrap/dist/css/bootstrap.min.css';
import fitup from '../assets/fitup3.png';
import usericon from './images/usericon.png'
import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './TopNavbar.css';
import Cookies from 'js-cookie';

const TopNavbar = () => {

  const [userData, setUserData] = useState('');
  
  useEffect(() => {
    // 从 Cookie 中读取 JSON 数据
    const storedUserData = Cookies.get('userData');
    if (storedUserData) {
      // 将从 Cookie 中读取的数据反序列化为 JSON 对象
      const parsedUserData = JSON.parse(storedUserData);
      const cleanedName = parsedUserData.name.replace(/"/g, '');
      setUserData(cleanedName);
    }
  }, []);

  const handleLogout = () => {
    // 清除名为 'userData' 的 Cookie
    Cookies.remove('userData');

    // 在这里可以执行其他登出操作，例如重定向到登录页面或清除用户状态
  };

  return (
    <nav className="navbar navbar-expand-lg bg-amos mb-3">
      <div className="container">
        <a className="navbar-brand" href="/home">
          <img src={fitup} style={{ width: '140px', height: '60px' }} alt="Logo" />
          <h4 className="coach-title"><b>你的居家教練</b></h4>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <div className="nav-item">
              <a  href="/home" className="nav-link active nav-link-custom"><b>主頁</b></a>
            </div>

            <div className="nav-item">
                <a href="#" className='nav-link  nav-link-custom action-link'>
                  <b>訓練動作</b>
                </a>
                <div className='dropdown-menu action-expandable'>
                  <Link to='/action/arm' className='dropdown-item action-dropdown-item-custom'>手</Link>
                  <Link to='/action/shoulder' className='dropdown-item action-dropdown-item-custom'>肩</Link>
                  <Link to='/action/chest' className='dropdown-item action-dropdown-item-custom'>胸</Link>
                  <Link to='/action/abs' className='dropdown-item action-dropdown-item-custom'>腹</Link>
                  <Link to='/action/leg' className='dropdown-item action-dropdown-item-custom'>腿</Link>
                </div>
              </div>


              <div className="nav-item">
                <a href="#" className='nav-link nav-link-custom action-link'>
                  <b>訓練菜單</b>
                </a>
                <div className='dropdown-menu action-expandable'>
                  <Link to='/program/new' className='dropdown-item action-dropdown-item-custom'>新增菜單</Link>
                  <Link to='/program/mine' className='dropdown-item action-dropdown-item-custom'>我的菜單</Link>
                </div>
              </div>


            <li className="nav-item">
                {userData 
                ? (<p>
                    <Link to="/info" className='nav-link nav-link-custom'>
                      <b>個人資訊</b>
                    </Link>
                  </p>)
                : (
                  <p className='nav-link nav-link-custom'>登入以查看個人資訊</p>
                )}
            </li>
          </ul>
          
        </div>
        <div className='topnav-right-container'>
          <div className='topnav-usericon-container'>
            <a href="#" className='topnav-usericon-link'>
              <img src={usericon} className="topnav-usericon" alt="UserIcon" />
            </a>
            <div className='dropdown-menu topnav-usericon-expandable'>
              
              <Link to='/signin' onClick={handleLogout} className='dropdown-item topnav-dropdown-item-custom'>登出</Link>
              <Link to='/others' className='dropdown-item topnav-dropdown-item-custom'>其他</Link>
            </div>
          </div>
          <div>
          {
          userData 
          ? 
          (<p>歡迎, {userData}</p>) 
          : 
          (<p>
            <Link to='/signin' className='dropdown-item topnav-dropdown-item-custom'>登入/註冊</Link>
          </p>)
          }
            
          </div>
        </div>
      </div>
      
    </nav>
  );
};

export default TopNavbar;


