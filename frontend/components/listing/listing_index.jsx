import React, { useEffect } from "react";
import ListingIndexItem from './listing_index_item';

const ListingIndex = ({ listings, fetchListings, fetchReservations }) => {

  useEffect(() => {
    fetchListings();
    fetchReservations();
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
