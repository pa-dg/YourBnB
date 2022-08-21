import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchListings, fetchListing } from "../../actions/listing_actions";
import ListingIndex from './listing_index';

const mapStateToProps = state => {
  return {
    listings: Object.values(state.entities.listings),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListings: () => dispatch(fetchListings()),
    // fetchListing: (id) => dispatch(fetchListing(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListingIndex));