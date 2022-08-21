import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import ListingShow from './listing_show';


const mapStateToProps = (state, ownProps) => {
  const listingId = ownProps.match.params.listingId;
  const selectedListing = state.entities.listings[parseInt(listingId)];

  // const host = state.entities.users[selectedListing.host_id]
  // console.log('#', `${state.entities.selectedListing.host_id}`);

  return {
    listingId,
    selectedListing,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListing: listingId => dispatch(fetchListing(listingId)),
  };  
};


export default connect(mapStateToProps, mapDispatchToProps)(ListingShow); //put back in with Router