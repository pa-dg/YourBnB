import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import { BsFillStarFill } from 'react-icons/bs';
import ImageSlider from "./image_slider";

const ListingIndexItem = props => {
  
  const { id, city, state, title, numBeds, price, photoUrls } = props.listing;

  let history = useHistory();
  
  const handleClick = () => {
    return history.push(`/listing/${id}`); 
  };
  
  return (
    
    <div className="listing-index-item">
      <div className="listing-img-container">
         <ImageSlider photoUrls={photoUrls} />
      </div>
        
      <div className="listing-info" onClick={handleClick}>
        <div className="listing-info-location">
          <h3>{city}, {state}</h3>
          <ul>
            <li id="listing-info-details">{title}</li>
            <li id="listing-info-details">{numBeds} bed</li>
            <li id="listing-info-details-price">${`${Math.round(price)}`} <span>night</span></li>
          </ul>
        </div>

        <div className="listing-info-review">
            <span><BsFillStarFill id="star" /></span>
            <span id="rating"> 5.0</span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ListingIndexItem);