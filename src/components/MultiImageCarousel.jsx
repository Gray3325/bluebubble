import React, { useState, useEffect, useRef } from "react";
import styles from "./MultiImageCarousel.module.css";
import useWindowSize from "./useWindowSize";

function MultiImageCarousel() {
  // 圖片的 URL 陣列
  const images = [
    "https://ih1.redbubble.net/image.5164288839.8373/ur,mouse_pad_small_flatlay_prop,square,1000x1000.jpg",
    "https://ih1.redbubble.net/image.5164288864.8373/ssrco,dad_hat,product,FFFDF5:8c3db69414,front_three_quarter,square,1000x1000-bg,f8f8f8.jpg",
    "https://ih1.redbubble.net/image.5164288817.8373/icr,iphone_16_toughmagsafe,back,a,x1000-pad,1000x1000,f8f8f8.jpg",
    "https://ih1.redbubble.net/image.5164288979.8373/ssrco,classic_tee,two_models,101010:01c5ca27c6,front,square_three_quarter,1000x1000.jpg",
    "https://ih1.redbubble.net/image.5164288908.8373/clkf,white,white,1000x1000-bg,f8f8f8.jpg",
    "https://ih1.redbubble.net/image.5164288902.8373/paperpc,750x,w,f8f8f8-pad,1000x1000,f8f8f8.jpg",
    "https://ih1.redbubble.net/image.5164288922.8373/drawstring_bag,x1000-pad,1000x1000,f8f8f8.jpg",
    "https://ih1.redbubble.net/image.5164288837.8373/ur,mask_flatlay_front,product,1000x1000.jpg",
    "https://ih1.redbubble.net/image.5164288860.8373/pr,150x100,1000x-pad,1000x1000,f8f8f8.jpg",
    "https://ih1.redbubble.net/image.5164288861.8373/sn,x1000-pad,1000x1000,f8f8f8.jpg",
    "https://ih1.redbubble.net/image.5164288879.8373/ur,apron_realistic_flatlay,square,1000x1000.jpg",
  ];
  const { width } = useWindowSize(); // 只需要取得寬度來決定樣式

  // 設定可見範圍中顯示的圖片數量
  var visibleImages;
  if (width<450) {
    visibleImages=1;
  }else{
    visibleImages=3;
  }
  

  // 當前顯示的起始索引
  const [startIndex, setStartIndex] = useState(0);
  const timeoutRef = useRef(null);

  // 自動播放效果
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, 3000); // 每3秒切換

    return () => clearTimeout(timeoutRef.current);
  }, [startIndex]);

  // 處理前往下一組圖片
  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + visibleImages) % images.length);
  };

  // 處理前往上一組圖片
  const handlePrevious = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - visibleImages + images.length) % images.length
    );
  };

  // 獲取當前顯示的圖片
  const currentImages = [];
  for (let i = 0; i < visibleImages; i++) {
    currentImages.push(images[(startIndex + i) % images.length]);
  }

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        {currentImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={styles.carouselImage}
          />
        ))}
      </div>
      <button
        onClick={handlePrevious}
        className={`${styles.carouselButton} ${styles.prev}`}
      >
        
      </button>
      <button
        onClick={handleNext}
        className={`${styles.carouselButton} ${styles.next}`}
      >
        
      </button>
    </div>
  );
}

export default MultiImageCarousel;
