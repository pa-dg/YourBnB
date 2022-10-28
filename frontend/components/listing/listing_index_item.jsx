import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import { HiStar } from 'react-icons/hi';
import ImageSlider from "./image_slider";

const ListingIndexItem = ({ listing: { id, city, title, numBeds, price, propertyType, photoUrls, numReviews, avgRating } }) => {

  const styles = {
    size: 15,
    paddingRight: 2,
    verticalAlign: 'top',
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
        <div className="info-heading">
          <p>{propertyType} in {city}</p>
          <p>
            <HiStar size={styles.size} style={styles} />
            {avgRating} {numReviews !== 0 ? <span>({numReviews})</span> : null}
          </p>
        </div>
        
        <p className="info-content">{title}</p>
        <p className="info-content">{numBeds > 1 ? `${numBeds} beds` : `${numBeds} bed`}</p>
        <p className="info-content">${`${Math.round(price)}`} <span>night</span></p>
      </div>
    </div>
  );
};

export default withRouter(ListingIndexItem);