import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dates from "./slickDate.json";
import React from "react";
import Slider from "react-slick";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings} style={{width:"20em",hight:"10em"}}>
      {dates.map((date) => (
          <div key={date.id} style={{background:"#000"}}>
            <img src={date.url} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
