import React from "react";
import { connect } from "react-redux";
import { fetchListings } from "../../actions/listing_actions";
import ListingIndex from './listing_index';

const mapStateToProps = ({ entities: { listings }, ui: { filters } }) => {
  const filteredListings = Object.values(listings).filter(
    (listing) => 
      listing.price >= filters.minPrice 
      && listing.price <= filters.maxPrice 
      && listing.numBeds <= filters.numBeds
  )
  
  return {
    listings: filteredListings,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListings: () => dispatch(fetchListings()),
  };
};

export default (connect(mapStateToProps, mapDispatchToProps)(ListingIndex));