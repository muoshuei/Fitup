import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './AbsMainPage.css';

import slide腹 from './images/slide腹.png';
import slide圖表 from './images/slide圖表.png';
import sliderandom1 from './images/sliderandom1.png';
import sliderandom6 from './images/sliderandom6.png';
import slide菜單 from './images/slide菜單.png';

import Abs1 from './images/Abs1.png';
import Abs2 from './images/Abs2.png';
import Abs3 from './images/Abs3.png';
import Abs4 from './images/Abs4.png';
import Abs5 from './images/Abs5.png';
import TopNavbar from '../../TopNavbar/TopNavbar';
import { useNavigate } from 'react-router-dom';

function AbsMainPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFirstSet, setShowFirstSet] = useState(true);
  const [showImages, setShowImages] = useState(true); // 控制是否顯示圖片和按鈕字樣
  const [buttonText, setButtonText] = useState('往下一頁'); // 控制按鈕字樣

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };
  const navigate = useNavigate();
  const toggleImageSet = () => {
    if (showImages) {
      setShowFirstSet(!showFirstSet);
      setCurrentImageIndex(0); // 重置前圖片索引
      // 切換按鈕字樣
      if (buttonText === '往下一頁') {
        setButtonText('回上一頁');
      } else {
        setButtonText('往下一頁');
      }
    }
  };

  const exerciseImagesFirstSet = [Abs1, Abs2, Abs3, Abs4];
  const exerciseNamesFirstSet = ['仰臥起坐', '棒式', '登山式', '單車式捲腹'];

  const exerciseImagesSecondSet = [Abs5];
  const exerciseNamesSecondSet = ['仰臥抬腿'];

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
            <img src={slide腹} className="d-block w-100 custom-carousel-image" alt="Slide 1" />
          </Carousel.Item>

          {/* Slide 2 */}
          <Carousel.Item>
            <img src={slide圖表} className="d-block w-100 custom-carousel-image" alt="Slide 2" />
            <div className="custom-carousel-caption">
              <button className="btn2 btn-lg">觀看我的運動報表</button>
            </div>
          </Carousel.Item>

          {/* Slide 3 */}
          <Carousel.Item>
            <img src={sliderandom1} className="d-block w-100 custom-carousel-image" alt="Slide 3" />
          </Carousel.Item>

          {/* Slide 4 */}
          <Carousel.Item>
            <img src={sliderandom6} className="d-block w-100 custom-carousel-image" alt="Slide 4" />
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
        <h1 className="fw-light">關於腹的動作     
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
                            onClick={() => {navigate("/detail", {state: {exerciseId: `ab${(1+index+(showFirstSet?0:4))}`}})}}
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

export default AbsMainPage;
