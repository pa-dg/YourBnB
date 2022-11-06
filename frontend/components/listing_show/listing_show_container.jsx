import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import ListingShow from './listing_show';
import { createReservation } from '../../actions/reservation_actions';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = ({ entities: {listings, reviews}, session }, ownProps) => {
  const listingId = parseInt(ownProps.match.params.listingId);
  const selectedListing = listings[listingId];
  const currentUserId = parseInt(session.currentUserId)
  const allReviews = Object.values(reviews)
  const numReviews = Object.values(reviews).length

  const avgRatings = {
    cleanliness: 0,
    communication: 0,
    checkIn: 0,
    accuracy: 0,
    location: 0,
    value: 0,
  }
  
  if (numReviews > 0) {
    allReviews.forEach(review => (
      avgRatings.cleanliness = avgRatings.cleanliness += review.cleanliness,
      avgRatings.communication = avgRatings.communication += review.communication,
      avgRatings.checkIn = avgRatings.checkIn += review.checkIn,
      avgRatings.accuracy = avgRatings.accuracy += review.accuracy,
      avgRatings.location = avgRatings.location += review.location,
      avgRatings.value = avgRatings.value += review.value
    )); 
  }

  const categories = Object.keys(avgRatings);

  categories.forEach((category) => {
    avgRatings[category] = (avgRatings[category] / numReviews);
  });

  const avgStarRating = (Object.values(avgRatings).reduce((acc, rating) => acc + rating) / categories.length).toFixed(2)

  return {
    listingId,
    selectedListing,
    currentUserId,
    numReviews,
    avgStarRating,
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