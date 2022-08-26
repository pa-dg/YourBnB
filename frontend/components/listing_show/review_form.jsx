import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';

const defaultReview = {
  accuracy: undefined,
  checkIn: undefined,
  cleanliness: undefined,
  communication: undefined,
  id: undefined,
  listingId: undefined,
  location: undefined,
  review: undefined,
  reviewerFirstName: undefined,
  reviewerId: undefined,
  reviewerLastName: undefined,
  updatedAt: undefined,
  value: undefined,
}

const ReviewForm = ({ currentUserId, listingId }) => {
  const [review, setReview] = useState(defaultReview)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('# submitting review', review);
  } 
  
  return (
    <div className="review-form-container">
      <header className="review-form-heading">
        <h1>How was your stay at this place?</h1>
      </header>
      
      <form className="review-form" onSubmit={handleSubmit}>
        <div className="ratings"></div>
        <div className="review-text">
          <h3>Write a public review</h3>
          <span>Tell future travelers about what to expect at this place.</span>
          <textarea></textarea>
        </div>
        <div className="button-group">

        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.currentUserId,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    createReview: (review) => dispatch(createReview(review)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);