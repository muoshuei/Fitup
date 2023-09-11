import React from 'react';
import './ProgramNavPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import body1 from './images/body1.jpg';
import shoulder from './images/shoulder.jpg';
import chest1 from './images/chest1.jpg';
import hands1 from './images/hands1.jpg';
import abs from './images/abs.png';
import legs from './images/legs.jpg';
import TopNavbar from '../../TopNavbar/TopNavbar';

const ProgramNavPage = () => {
  return (
    <div>
      <TopNavbar></TopNavbar>
      <div className="container">
        
        <div className="grid-row">
          <div className="grid-item">
            <Link to="/program/body">
              <div className="circle">
                <img
                  src={body1}
                  alt="全身運動"
                  className="exercise-image"
                />
              </div>
              <div className="exercise-title">
                全身<br/>運動
              </div>
            </Link>
          </div>
          <div className="grid-item">
          <Link to="/program/shoulder">
            <div className="circle">
              <img
                src={shoulder}
                alt="肩"
                className="exercise-image"
              />
            </div>
            <div className="exercise-title">肩</div>
          </Link>
          </div>
          <div className="grid-item">
          <Link to="/program/chest">
            <div className="circle">
              <img
                src={chest1}
                alt="胸"
                className="exercise-image"
              />
            </div>
            <div className="exercise-title">胸</div>
          </Link>
          </div>
        </div>
        <div className="grid-row">
          <div className="grid-item">
          <Link to="/program/arm">
            <div className="circle">
              <img
                src={hands1}
                alt="手"
                className="exercise-image"
              />
            </div>
            <div className="exercise-title">手</div>
          </Link>
          </div>
          <div className="grid-item">
            <Link to="/program/abs">
              <div className="circle">
                <img
                  src={abs}
                  alt="腹"
                  className="exercise-image"
                />
              </div>
              <div className="exercise-title">腹</div>
            </Link>
          </div>
          <div className="grid-item">
            <Link to="/program/leg">
              <div className="circle">
                <img
                  src={legs}
                  alt="腿"
                  className="exercise-image"
                />
              </div>
              <div className="exercise-title">腿</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramNavPage;

const ProgramNavItem = (props) => {
  return (
    <div className="grid-item">
      <Link to="/programbody">
        <div className="circle">
          <img
            src={body1}
            alt="全身運動"
            className="exercise-image"
          />
        </div>
        <div className="exercise-title">
          全身<br/>運動
        </div>
      </Link>
      </div>
  )
}