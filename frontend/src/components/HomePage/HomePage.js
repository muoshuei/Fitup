import React from 'react';
import homepage from './images/homepage5.png';
import './HomePage.css';
import TopNavbar from '../TopNavbar/TopNavbar';
const HomePage = () => {
  return (
    
    <div className="full">
      <TopNavbar></TopNavbar>
      <img src={homepage} alt="homepage"/>
      <p><br/></p>
    </div>

  );
};

export default HomePage;
