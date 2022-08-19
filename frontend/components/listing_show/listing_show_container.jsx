import {  connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import ListingShow from './listing_show';

const mapStateToProps = (state, { match: { params } }) => {
  // const listingId = parseInt(params.listingId);
  debugger;
  return {
    listingId: (params.listingId),
    selectedListing: Object.values(state.entities.listings[params.listingId])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListing: id => dispatch(fetchListing(id))
  };  
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);