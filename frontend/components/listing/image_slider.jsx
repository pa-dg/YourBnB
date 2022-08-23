import React from "react";
import Slider from "react-slick";
// import '../../../app/assets/stylesheets/splash/_slick.scss' 
// import '../../../app/assets/stylesheets/splash/_slickTheme.scss' 

const ImageSlider = props => {
  
  {/* {photoUrls.map((photoUrl, index) =>
          index !== 0 ? <img id="img-listing" key={index} src={photoUrl} alt="listing-image" /> : null
      )} */}
  const { photoUrls } = props;
  
  
  const settings = { 
    dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: 'slides',
  };
  
  return (
    <Slider {...settings}>
      
      {/* <div id="test-container">
        {photoUrls.map((photoUrl, index) =>
          <img id="img-listing" key={index} src={photoUrl} alt="listing-image" />
        )}
      </div> */}

      <div id="test-container">
        <img id="test-idx" src={window.test} alt="test" />
        {/* <h1>1</h1> */}
      </div>
      <div id="test-container">
        <img id="test-idx" src={window.test} alt="test" />
        {/* <h1>2</h1> */}
      </div>
      <div id="test-container">
        <img id="test-idx" src={window.test} alt="test" />
        {/* <h1>3</h1> */}
      </div>
      <div id="test-container">
        <img id="test-idx" src={window.test} alt="test" />
        {/* <h1>4</h1> */}
      </div>
       <div id="test-container">
        <img id="test-idx" src={window.test} alt="test" />
      </div>

    </Slider>
  );
};

export default ImageSlider;