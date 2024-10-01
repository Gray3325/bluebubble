import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dates from "./slickDate.json";
import React from "react";
import Slider from "react-slick";
// 這個套件只能把css樣式寫在裡面，不能用class因為會被原本套件的樣式蓋掉

function SimpleSlider() {
  const settings = {
    dots: true, //顯示下面的點
    infinite: true, //循環
    speed: 500, //滾動速度
    slidesToShow: 1, //一次會看到幾張
    slidesToScroll: 1, //一次滾動幾張
    autoplay: true, //自動輪播
  };
  return (
    <div style={{ width: "100%", background: "#ffffff" }}>
      <div className='slider-container'>
        <Slider {...settings} style={{ hight: "10em" }}>
          {dates.map((date) => (
            <div key={date.id}>
              <img
                src={date.url}
                alt={date.alt}
                style={{ maxWidth: "70%", maxHeight: "30em" ,margin: "auto",  display: "block" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SimpleSlider;
