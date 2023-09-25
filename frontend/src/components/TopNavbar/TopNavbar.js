import 'bootstrap/dist/css/bootstrap.min.css';
import fitup from '../assets/fitup3.png';
import usericon from './images/usericon.png'
import {React, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './TopNavbar.css';
import "../../styles/action.css"
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../redux/actions/authActions';
const TopNavbar = () => {

  const userData = useSelector((state) => state.auth?.userData)
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAction())
  };

  return (
    <nav className="navbar navbar-expand-lg bg-amos mb-3 navbar-custom">
      <div className="container">
        <Link to="/home" className="navbar-brand">
          <img src={fitup} style={{ width: '140px', height: '60px' }} alt="Logo" />
          <h4 className="coach-title"><b>你的居家教練</b></h4>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <div className="nav-item">
              <Link to="/home" className="nav-link active nav-link-custom"><b>主頁</b></Link>
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


            <div className="nav-item">
                {userData 
                ? (<>
                  <a href="#" className='nav-link nav-link-custom action-link'>
                    <b>個人資訊</b>
                  </a>
                  <div className='dropdown-menu action-expandable'>
                    <Link to='/info' className='dropdown-item action-dropdown-item-custom'>詳細資訊</Link>
                    <Link to='/chart' className='dropdown-item action-dropdown-item-custom'>我的圖表</Link>
                  </div>
                  </>
                  )
                : (
                  <p className='nav-link nav-link-custom'>登入以查看個人資訊</p>
                )}
            </div>
          </ul>
          
        </div>
        <div className='topnav-right-container'>
          {
            userData ?
            <>
              <div className='topnav-usericon-container'>
                <a href="#" className='topnav-usericon-link'>
                  <img src={usericon} className="topnav-usericon" alt="UserIcon" />
                </a>
                <div className='dropdown-menu topnav-usericon-expandable'>
                  
                  <Link to='/signin' onClick={handleLogout} className='dropdown-item topnav-dropdown-item-custom'>登出</Link>
                  <Link to='/others' className='dropdown-item topnav-dropdown-item-custom'>其他</Link>
                </div>
              </div>
              <div>歡迎, {userData.name}</div>
             </> 
            :
            <p>
              <Link to='/signin' className='dropdown-item topnav-dropdown-item-custom'>登入/註冊</Link>
            </p>
          }
        
        </div>
      </div>
      
    </nav>
  );
};

export default TopNavbar;


