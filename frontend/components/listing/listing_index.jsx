import React, { useEffect } from "react";
import ListingIndexItem from './listing_index_item';

const ListingIndex = ({ listings, fetchListings }) => {

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
