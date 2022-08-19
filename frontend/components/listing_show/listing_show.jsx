import React from "react";
import { withRouter } from 'react-router-dom';

const ListingShow = props => {
  const { listingId, selectedListing, fetchListing } = props;
  const { title, description, city, state, country, price, rating, additional_fees,property_type, num_guest, num_beds, num_baths } = props.listingId;
  
  return (
    <div className="listing-show-container">
      <div className="listing-show-title">
        <h1>LISTING SHOW PAGE!</h1>
        <h1>{title}</h1>
        <h3>★{rating} {city},{state},{country}</h3>
      </div>
    </div>
  );
};

export default ListingShow;