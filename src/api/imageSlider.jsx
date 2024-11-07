import React, { useState, useEffect, useRef } from 'react';
import styles from "../app/page.module.css";


function ImageSlider() {
  // 圖片的 URL 陣列
  const images = [
    "https://images.plurk.com/IUByFzIASsiz7XOjcBuyJ.png",
    "https://images.plurk.com/vlWz9mOolnv1woCGZPuFq.png",
    "https://images.plurk.com/IUByFzIASsiz7XOjcBuyJ.png",
    "https://images.plurk.com/vlWz9mOolnv1woCGZPuFq.png",
  ];
  
  // 追蹤當前圖片索引
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef(null);

  // 自動切換圖片
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, 3000); // 每3秒切換圖片

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  // 處理前往下一張圖片
  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsTransitioning(false);
    }, 500); // 過渡效果時間
  };

  // 處理前往上一張圖片
  const handlePrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 500); // 過渡效果時間
  };

  return (
    <div className={styles.sliderContainer}>
      <div 
        className={isTransitioning ? styles.slide+" "+styles.slider : styles.slider}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} className={styles.slideImage} />
        ))}
      </div>
      <button onClick={handlePrevious} className={styles.sliderButton+" "+styles.prev}>上一張</button>
      <button onClick={handleNext} className={styles.sliderButton+" "+styles.next}>下一張</button>
    </div>
  );
}

export default ImageSlider;
