import React, { useState, useEffect } from 'react';
import styles from "./Carousel.module.css";


// 圖片輪播的元件
function Carousel() {
  // 設定圖片URL陣列
  const images = [
    "https://images.plurk.com/IUByFzIASsiz7XOjcBuyJ.png",
    "https://images.plurk.com/vlWz9mOolnv1woCGZPuFq.png",
    "https://images.plurk.com/IUByFzIASsiz7XOjcBuyJ.png",
    "https://images.plurk.com/vlWz9mOolnv1woCGZPuFq.png",
  ];
  
  // 當前圖片索引
  const [currentIndex, setCurrentIndex] = useState(0);

  // 自動切換圖片的useEffect
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => 
  //       prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 3000); // 每3秒切換圖片

  //   // 清除計時器
  //   return () => clearInterval(interval);
  // }, [images.length]);

  // 處理圖片切換
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.carousel}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className={styles.carouselImage}
      />
      <button className={styles.buttonCarousel} onClick={handlePrevious}></button>
      <button className={styles.buttonCarousel} onClick={handleNext}></button>
      
      {/* 圖片下方的小圓點 */}
      <div className={styles.carouselIndicators}>
        {images.map((image, index) => (
          <span
            key={index}
            className={ index === currentIndex ? styles.indicator+" "+styles.active  : styles.indicator}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
