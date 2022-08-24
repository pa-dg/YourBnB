import React from "react";
import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
import { fetchListings } from "../../actions/listing_actions";
import ListingIndex from './listing_index';

const mapStateToProps = state => {
  return {
    listings: Object.values(state.entities.listings),
    // photoUrls: state.entities.listings.photoUrls
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListings: () => dispatch(fetchListings()),
  };
};

export default (connect(mapStateToProps, mapDispatchToProps)(ListingIndex));