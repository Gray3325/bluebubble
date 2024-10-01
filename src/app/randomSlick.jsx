import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dates from "./slickRandomData.json";
import React from "react";
import Slider from "react-slick";
// 這個套件只能把css樣式寫在裡面，不能用class因為會被原本套件的樣式蓋掉

// 自訂箭頭樣式
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", position: "absolute" }}
      onClick={onClick}
    />
  );
}

// 內容設定
function SimpleSlider() {
  const settings = {
    className: "center",
    infinite: true, //循環
    centerPadding: "60px",
    slidesToShow: 6, //一次會看到幾張
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div style={{ width: "100%", background: "#ffffff",marginBottom:"5em" }}>
      <div className='slider-container'>
        <Slider {...settings} style={{ hight: "10em", position: "relative" }}>
          {dates.map((date) => (
            <div key={date.id}>
              <div style={{ position: "relative" }}>
                <img
                  src={date.url}
                  alt={date.alt}
                  style={{
                    width: "10em",
                    height: "10em",
                    margin: "auto",
                    display: "block",
                    borderRadius:"1em"
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "10em",
                    margin: "auto",
                  }}
                >
                  <h5>{date.name}</h5>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h6>${date.price}</h6>
                    <h6>{date.author}</h6>
                  </div>
                </div>

                <div
                  style={{
                    background: "#ffffff",
                    width: "1.5em",
                    height: "1.5em",
                    position: "absolute",
                    top: "0.6em",
                    right: "3.1em",
                    borderRadius: "1em",
                  }}
                ></div>
                <i
                  className='fi fi-rr-heart'
                  style={{
                    position: "absolute",
                    top: "0.86em",
                    right: "3.32em",
                  }}
                ></i>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SimpleSlider;
