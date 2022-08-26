import * as reviewsAPIUtil from "../util/reviews_api_util";

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const receiveAllReviews = (reviews) => {
  return {
    type: RECEIVE_ALL_REVIEWS,
    reviews,
  };
};

export const receiveReview = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review,
  };
};

export const removeReview = (reviewId) => {
  return {
    type: REMOVE_REVIEW,
    reviewId,
  };
};

export const fetchReviews = (listingId) => (dispatch) => {
  return reviewsAPIUtil
    .fetchReviews(listingId)
    .then((reviews) => dispatch(receiveAllReviews(reviews)));
};

export const createReview = (review) => (dispatch) => {
  return reviewsAPIUtil
    .createReview(review)
    .then((createdReview) => dispatch(receiveReview(createdReview)));
};

export const updateReview = (review) => (dispatch) => {
  return reviewsAPIUtil
    .updateReview(review)
    .then((updatedReview) => dispatch(receiveReview(updatedReview)));
};

export const deleteReview = (reviewId) => (dispatch) => {
  return reviewsAPIUtil
    .deleteReview(reviewId)
    .then(() => dispatch(removeReview(id)));
};
