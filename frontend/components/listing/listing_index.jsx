import React, { useEffect } from "react";
import ListingIndexItem from './listing_index_item';

const ListingIndex = props => {
  const { listings, fetchListings } = props;

  useEffect(() => {
    fetchListings();
  }, []);
  
  return (
    <>
      {listings.map((listing, index) => (
        <ListingIndexItem key={index} listing={listing} />
      ))}               
    </>
    
  );
};

export default ListingIndex;
