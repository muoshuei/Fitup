import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './LegMainPage.css';

import slide腿 from './images/slide腿.png';
import sliderandom1 from './images/sliderandom1.png';
import sliderandom4 from './images/sliderandom4.png';
import sliderandom7 from './images/sliderandom7.png';
import slide菜單 from './images/slide菜單.png';

import L1 from './images/L1.png';
import L2 from './images/L2.png';
import L3 from './images/L3.png';
import L4 from './images/L4.png';
import L5 from './images/L5.png';
import TopNavbar from '../../TopNavbar/TopNavbar';
import { useNavigate } from 'react-router-dom';

function LegMainPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFirstSet, setShowFirstSet] = useState(true);
  const [showImages, setShowImages] = useState(true); // 控制是否顯示圖片和按鈕
  const [buttonText, setButtonText] = useState('往下一頁'); // 控制按鈕

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };
  const navigate = useNavigate();
  const toggleImageSet = () => {
    if (showImages) {
      setShowFirstSet(!showFirstSet);
      setCurrentImageIndex(0); // 重置當前圖片索引
      // 切換按鈕字樣
      if (buttonText === '往下一頁') {
        setButtonText('回上一頁');
      } else {
        setButtonText('往下一頁');
      }
    }
  };

  const exerciseImagesFirstSet = [L1, L2, L3, L4];
  const exerciseNamesFirstSet = ['深蹲', '前跨蹲', '羅馬尼亞硬舉(啞鈴)', '啞鈴保加利亞單腿蹲'];

  const exerciseImagesSecondSet = [L5];
  const exerciseNamesSecondSet = ['俯臥啞鈴腿彎舉'];

  const exerciseImages = showFirstSet ? exerciseImagesFirstSet : exerciseImagesSecondSet;
  const exerciseNames = showFirstSet ? exerciseNamesFirstSet : exerciseNamesSecondSet;

  return (
    <>
    <TopNavbar></TopNavbar>
    <div className="first-page-container">
      <div className="carousel-container">
        <Carousel fade className="custom-carousel">
          {/* Slide 1 */}
          <Carousel.Item>
            <img src={slide腿} className="d-block w-100 custom-carousel-image" alt="Slide 1" />
          </Carousel.Item>

          {/* Slide 2 */}
          <Carousel.Item>
            <img src={sliderandom1} className="d-block w-100 custom-carousel-image" alt="Slide 2" />
          </Carousel.Item>

          {/* Slide 3 */}
          <Carousel.Item>
            <img src={sliderandom4} className="d-block w-100 custom-carousel-image" alt="Slide 3" />
          </Carousel.Item>

          {/* Slide 4 */}
          <Carousel.Item>
            <img src={sliderandom7} className="d-block w-100 custom-carousel-image" alt="Slide 4" />
          </Carousel.Item>

          {/* Slide 5 */}
          <Carousel.Item>
            <img src={slide菜單} className="d-block w-100 custom-carousel-image" alt="Slide 5" />
            <div className="carousel-caption d-none d-md-block">
              <button className="btn3 btn-primary btn-lg">立即試試</button>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="exercise-container">
        <h1 className="fw-light">關於腿的動作     
        {showImages && (
          <button className="btn btn-primary mb-3" onClick={toggleImageSet}>
            {buttonText}
          </button>
        )}
        </h1>
        {showImages && (
          <div className="container overflow-hidden text-center">
            <div className="row gx-5">
              {Array.from({ length: 4 }).map((_, index) => (
                <div className="col-md-3" key={index}>
                  <div className="image-container">
                    {exerciseImages[currentImageIndex + index] && (
                      <>
                        <img
                          src={exerciseImages[currentImageIndex + index]}
                          className="w-100 h-100"
                          alt={exerciseNames[currentImageIndex + index]}
                        />
                        <div style={{ marginTop: '15px' }}>
                          <button
                            className="btn btn5 custom-button"
                            style={{ marginBottom: '-30px' }} // 調整按鈕位置
                            onClick={() => {navigate("/detail", {state: {exerciseId: `l${(1+index+(showFirstSet?0:4))}`}})}}
                          >
                            {exerciseNames[currentImageIndex + index]}
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default LegMainPage;
