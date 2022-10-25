import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import ListingShow from './listing_show';
import { createReservation } from '../../actions/reservation_actions';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  const listingId = parseInt(ownProps.match.params.listingId);
  const selectedListing = state.entities.listings[listingId];
  const listings = state.entities.listings
  const currentUserId = parseInt(state.session.currentUserId)
  const numReviews = Object.values(state.entities.reviews).length

  return {
    listingId,
    selectedListing,
    listings,
    currentUserId,
    numReviews,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListing: listingId => dispatch(fetchListing(listingId)),
    createReservation: reservation => dispatch(createReservation(reservation)),
    openModal: modal => dispatch(openModal(modal)),
  };  
};


export default connect(mapStateToProps, mapDispatchToProps)(ListingShow); //put back in with Router