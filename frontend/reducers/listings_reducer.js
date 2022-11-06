import {
  RECEIVE_ALL_LISTINGS,
  RECEIVE_LISTING,
} from "../actions/listing_actions";
import { RECEIVE_REVIEW, REMOVE_REVIEW } from "../actions/review_actions";

const listingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_LISTINGS:
      return action.listings;
    case RECEIVE_LISTING:
      return Object.assign({}, state, { [action.listing.id]: action.listing });
    case RECEIVE_REVIEW:
      const {
        review: {
          accuracy,
          checkIn,
          cleanliness,
          communication,
          location,
          value,
        },
      } = action;

      const listing = state[action.review.listingId];
      const newNumReviews = listing.numReviews + 1;
      const avgReviewRating =
        (accuracy + checkIn + cleanliness + communication + location + value) /
        6;
      const newAvgRating =
        (Number(listing.avgRating) * listing.numReviews + avgReviewRating) /
        newNumReviews;
      return Object.assign({}, state, {
        [action.review.listingId]: {
          ...state[action.review.listingId],
          ["avgRating"]: newAvgRating.toFixed(2),
          ["numReviews"]: newNumReviews,
        },
      });
    default:
      return state;
  }
};

export default listingsReducer;
