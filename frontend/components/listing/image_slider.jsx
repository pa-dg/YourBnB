import React from "react";
import Slider from "react-slick";

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
    </Slider>
  );
};

export default ImageSlider;