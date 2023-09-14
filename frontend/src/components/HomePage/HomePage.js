import React from 'react';
import homepage from './images/homepage5.png';
import './HomePage.css';
import TopNavbar from '../TopNavbar/TopNavbar';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    
    <div className="full">
      <TopNavbar></TopNavbar>
      <Link to="/feature">
        <img src={homepage} alt="homepage"/>
      </Link>
      
      <p><br/></p>
    </div>

  );
};

export default HomePage;
