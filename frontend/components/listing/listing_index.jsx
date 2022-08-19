import React, { useEffect } from "react";
import ListingIndexItem from './listing_index_item';

const ListingIndex = props => {

  const { listings, fetchListings, fetchListing } = props;

  useEffect(() => {
      fetchListings();
  }, []);
  
  return (
    <div className="listing-index-container">
      <h1>Listings:</h1>
      {listings.map(listing => (
        <ListingIndexItem key={listing.id} listing={listing} />
      ))}               
    </div>
    
  );
};

export default ListingIndex;