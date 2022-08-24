import React from "react";
import Slider from "react-slick";
// import '../../../app/assets/stylesheets/splash/_slick.scss' 
// import '../../../app/assets/stylesheets/splash/_slickTheme.scss' 

const sliderSettings = { 
    dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: 'slides',
  };

const ImageSlider = ({ handleClick, photoUrls }) => {
  return (
    <Slider {...sliderSettings}>
      {photoUrls && (
        photoUrls.map((photoUrl, index) =>
          <div key={index} className="listing-img-container" onClick={handleClick}>
            <img id="img-listing" key={index} src={photoUrl} alt="listing-image" />
          </div>
        )
      )}
      
      {/* <div id="test-container">
        <img id="test-idx" src={window.test} alt="test" />
      </div>
      <div id="test-container">
        <img id="test-idx" src={window.test} alt="test" />
      </div>
      <div id="test-container">
        <img id="test-idx" src={window.test} alt="test" />
      </div>
      <div id="test-container">
        <img id="test-idx" src={window.test} alt="test" />
      </div>
       <div id="test-container">
        <img id="test-idx" src={window.test} alt="test" />
      </div> */}

    </Slider>
  );
};

export default ImageSlider;