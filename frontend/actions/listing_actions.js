import * as listingAPIUtil from "../util/listing_api_util";

export const RECEIVE_ALL_LISTINGS = "RECEIVE_ALL_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const REMOVE_LISTING = "REMOVE_LISTING";

export const receiveAllListings = (listings) => {
  return {
    type: RECEIVE_ALL_LISTINGS,
    listings,
  };
};

export const receiveListing = (listing) => {
  return {
    type: RECEIVE_LISTING,
    listing,
  };
};

//TO BE ADDED
// export const removeListing = (listingId) => {
//   return {
//     type: REMOVE_LISTING,
//     listing,
//   };
// };

// THUNK ACTION CREATORS

export const fetchListings = () => (dispatch) => {
  return listingAPIUtil
    .fetchListings()
    .then((listings) => dispatch(receiveAllListings(listings)));
};

export const fetchListing = (id) => (dispatch) => {
  return listingAPIUtil
    .fetchListing(id)
    .then((listing) => dispatch(receiveListing(listing)));
};

export const createListing = (listing) => (dispatch) => {
  return listingAPIUtil
    .createListing(listing)
    .then((listing) => dispatch(receiveListing(listing)));
};

//TO BE ADDED
// export const deleteListing = (listingId) => {
//   return listingAPIUtil
//     .deleteListing(listingId)
//     .then(() => dispatch(removeListing(listingId)));
// };
