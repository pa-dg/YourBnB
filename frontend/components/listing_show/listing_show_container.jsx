import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import ListingShow from './listing_show';
import { createReservation } from '../../actions/reservation_actions';


const mapStateToProps = (state, ownProps) => {
  const listingId = parseInt(ownProps.match.params.listingId);
  const selectedListing = state.entities.listings[listingId];
  const listings = state.entities.listings
  const currentUser = parseInt(state.session.id)

  // const host = state.entities.users[selectedListing.hostId]
  
  // console.log('#', `${state.entities.selectedListing.host_id}`);

  return {
    listingId,
    selectedListing,
    listings,
    currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListing: listingId => dispatch(fetchListing(listingId)),
    createReservation: reservation => dispatch(createReservation(reservation)),
  };  
};


export default connect(mapStateToProps, mapDispatchToProps)(ListingShow); //put back in with Router