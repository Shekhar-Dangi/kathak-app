import React, { useEffect } from "react";
import "./Slider.css";

const Slider = ({ index, image1, image2, image3 }) => {
  let slideIndex = 1;
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName(`slide${index}`);
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
  const plusSlides = (n) => {
    showSlides((slideIndex += n));
  };
  useEffect(() => {
    showSlides(slideIndex);
  }, []);
  return (
    <div className="slide-container">
      <div className={`fade slide${index}`}>
        <div className="numbertext">1 / 3</div>
        <img className="image" src={image1} />
      </div>
      <div className={`fade slide${index}`}>
        <div className="numbertext">2 / 3</div>
        <img className="image" src={image2} />
      </div>
      <div className={`fade slide${index}`}>
        <div className="numbertext">3 / 3</div>
        <img className="image" src={image3} />
      </div>
      <a
        className="prev"
        onClick={() => {
          plusSlides(-1);
        }}
      >
        &#10094;
      </a>
      <a
        className="next"
        onClick={() => {
          plusSlides(1);
        }}
      >
        &#10095;
      </a>
    </div>
  );
};

export default Slider;
