import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './ChestMainPage.css';

import sliderandom3 from './images/sliderandom3.png';
import sliderandom4 from './images/sliderandom4.png';
import sliderandom6 from './images/sliderandom6.png';
import slide胸 from './images/slide胸.png';
import slide菜單 from './images/slide菜單.png';

import c1 from './images/c1.png';
import c2 from './images/c2.png';
import c3 from './images/c3.png';
import c4 from './images/c4.png';
import c5 from './images/c5.png';
import p1 from './images/p1.jpg';
import TopNavbar from '../../TopNavbar/TopNavbar';
import { useNavigate } from 'react-router-dom';

function ChestMainPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFirstSet, setShowFirstSet] = useState(true);
  const [showImages, setShowImages] = useState(true); // 控制是否顯示圖片和按鈕框架
  const [buttonText, setButtonText] = useState('往下一頁'); // 控制按鈕字樣

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

  const exerciseImagesFirstSet = [c1, c2, c3, c4];
  const exerciseNamesFirstSet = ['啞鈴臥推', '啞鈴上夾胸', '窄距上斜胸推', '仰臥屈臂上拉'];

  const exerciseImagesSecondSet = [c5, p1];
  const exerciseNamesSecondSet = ['平躺啞鈴飛鳥', '伏地挺身'];

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
            <img src={sliderandom3} className="d-block w-100 custom-carousel-image" alt="Slide 1" />
          </Carousel.Item>

          {/* Slide 2 */}
          <Carousel.Item>
            <img src={sliderandom4} className="d-block w-100 custom-carousel-image" alt="Slide 2" />
          </Carousel.Item>

          {/* Slide 3 */}
          <Carousel.Item>
            <img src={slide胸} className="d-block w-100 custom-carousel-image" alt="Slide 3" />
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
        <h1 className="fw-light">關於胸的動作     
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
                            onClick={
                              () => {
                                if(exerciseNames[currentImageIndex + index] == "伏地挺身"){
                                  navigate("/action/p/1");
                                }
                                else{
                                  navigate("/action/chest/" + (1+index+(showFirstSet?0:4)));
                                }
                              }
                            }
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

export default ChestMainPage;
