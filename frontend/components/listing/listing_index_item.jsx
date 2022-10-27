import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import { HiStar } from 'react-icons/hi';
import ImageSlider from "./image_slider";

const ListingIndexItem = ({ listing: { id, city, state, title, numBeds, price, propertyType, photoUrls } }) => {

  const styles = {
    size: 14,
    paddingRight: 2,
  }
  
  let history = useHistory();
  
  const handleClick = () => {
    return history.push(`/listing/${id}`); 
  };
  
  return (
    <div className="listing-index-item">
      <div className="listing-img-container">
         <ImageSlider handleClick={handleClick} photoUrls={photoUrls} />
      </div>
        
      <div className="listing-info" onClick={handleClick}>
        <div className="info-left">
          <p>{propertyType} in {city}</p>
          <p>{title}</p>
          <p>{numBeds} {numBeds > 1 ? 'beds' : 'bed'}</p>
          <p>${`${Math.round(price)}`} <span>night</span></p>
        </div>

        <div className="info-right">
          <HiStar size={styles.size} style={styles} />
          <span>5.0</span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ListingIndexItem);