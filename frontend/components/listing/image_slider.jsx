import React from "react";
import { useEffect } from "react";
import Slider from "react-slick";


const sliderSettings = { 
  dots: true,
  infinite: true,
  speed: 250,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  className: 'slides',
};


const ImageSlider = ({ handleClick, photoUrls }) => {
  
  // const [isLoading, setIsLoading] = useState(true)
  // const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  // useEffect(() => {
  //   const img = new Image();
  //   img.src = src;
  //   img.onload = () => {
  //     setImgSrc(src);
  //   }
  // })

  // const onLoad = () => {
  //   <CircularProgress color="secondary" />
  // }

  // const content = () => {
  //   <Slider {...sliderSettings}>
  //     {photoUrls && (
  //       photoUrls.map((photoUrl, index) =>
  //         <div key={photoUrl} className="listing-img-container" onClick={handleClick}>
  //           <img id="img-listing" 
  //           key={index} 
  //           src={photoUrl} 
  //           alt="listing-image" />
  //         </div>
  //       )
  //     )}
  //   </Slider>
  // }
  
  return (
    <Slider {...sliderSettings}>
      {photoUrls && (
        photoUrls.map((photoUrl, index) =>
          <div key={photoUrl} className="listing-img-container" onClick={handleClick}>
            <img id="slider-img" 
            key={index} 
            src={photoUrl} 
            alt="listing-image" />
          </div>
        )
      )}
    </Slider>
  );
};

export default ImageSlider;