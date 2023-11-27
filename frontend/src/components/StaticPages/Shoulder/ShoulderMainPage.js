import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './ShoulderMainPage.css';

import slide from './images/slide.png';
import slide圖表 from './images/slide圖表.png';
import sliderandom7 from './images/sliderandom7.png';
import sliderandom5 from './images/sliderandom5.png';
import sliderandom3 from './images/sliderandom3.png';

import s1 from './images/s1.png';
import s2 from './images/s2.png';
import s3 from './images/s3.png';
import s4 from './images/s4.png';
import s5 from './images/s5.png';
import s6 from './images/s6.png';
import s7 from './images/s7.png';
import p1 from './images/p1.jpg';
import TopNavbar from '../../TopNavbar/TopNavbar';
import { useNavigate } from 'react-router-dom';

function ShoulderMainPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFirstSet, setShowFirstSet] = useState(true);
  const [showImages, setShowImages] = useState(true); // 控制是否顯示圖片和按鈕
  const [buttonText, setButtonText] = useState('往下一頁'); // 控制按鈕字樣

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };
  const navigate = useNavigate();
  const toggleImageSet = () => {
    if (showImages) {
      setShowFirstSet(!showFirstSet);
      setCurrentImageIndex(0); // 重置當前圖片索引
      // 切换按鈕字樣
      if (buttonText === '往下一頁') {
        setButtonText('回上一頁');
      } else {
        setButtonText('往下一頁');
      }
    }
  };

  const exerciseImagesFirstSet = [s1, s2, s3, s4];
  const exerciseNamesFirstSet = ['啞鈴肩推', '啞鈴前平舉', '啞鈴側平舉', '俯身啞鈴飛鳥'];
  
  const exerciseImagesSecondSet = [s5, s6, s7, p1];
  const exerciseNamesSecondSet = ['直立划船', '阿諾肩推', '過頭前平舉', '伏地挺身'];

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
            <img src={slide} className="d-block w-100 custom-carousel-image" alt="Slide 1" />
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
            <img src={sliderandom7} className="d-block w-100 custom-carousel-image" alt="Slide 3" />
          </Carousel.Item>

          {/* Slide 4 */}
          <Carousel.Item>
            <img src={sliderandom5} className="d-block w-100 custom-carousel-image" alt="Slide 4" />
          </Carousel.Item>

          {/* Slide 5 */}
          <Carousel.Item>
            <img src={sliderandom3} className="d-block w-100 custom-carousel-image" alt="Slide 5" />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="exercise-container">
        <h1 className="fw-light">關於肩的動作     
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
                                  navigate("/detail", {state: {exerciseId: "p1"}});
                                }
                                else{
                                  navigate("/detail", {state: {exerciseId: `s${(1+index+(showFirstSet?0:4))}`}});
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

export default ShoulderMainPage;
