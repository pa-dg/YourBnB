import React, { useEffect } from "react";
import ListingIndexItem from './listing_index_item';

const ListingIndex = props => {
  const { listings, fetchListings } = props;

  useEffect(() => {
    fetchListings();
  }, []);
  
  return (
    <>
      {listings.map(listing => (
        <ListingIndexItem key={listing.id} listing={listing} />
      ))}               
    </>
    
  );
};

export default ListingIndex;
