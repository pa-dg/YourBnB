import React from "react";
import { withRouter, useHistory } from "react-router-dom";

const ListingIndexItem = props => {
  
  const { id, city, state, title, num_beds, price } = props.listing;


  let history = useHistory();
  
  const handleClick = () => {
    return history.push(`/listings/${id}`);
  };
  
  return (
    <div className="listing-index-item" onClick={handleClick}>
      <div className="listing-info">
        <div id="img-container">
          <img id="test" src={window.test} alt="test" />
        </div>
        
        <h3 className="listing-info-location">{city},{state}</h3>
          <ul>
            <li className="listing-info-title">{title}</li>
            <li className="listing-info-num-beds">{num_beds}</li>
            <li className="listing-info-price">${`${Math.round(price)}`} night</li>
          </ul>
        <div className="listing-info-reviews">
            <span id="rating">⭐️ 5.0</span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ListingIndexItem);