import React from 'react';
import ReviewForm from './ReviewForm';
import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  const listingId = parseInt(ownProps.match.params.listingId)
  const currentUserId = state.session.currentUserId
  
  const reviewInfo = {
    accuracy: undefined,
    checkIn: undefined,
    cleanliness: undefined,
    communication: undefined,
    listingId: listingId,
    location: undefined,
    message: undefined,
    reviewerId: currentUserId,
    value: undefined,
  }
  
  return {
    reviewInfo: reviewInfo,
    formType: 'Create',
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: review => dispatch(createReview(review)),
  };
}

export default (connect(mapStateToProps, mapDispatchToProps)(ReviewForm));