import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createReview } from '../../actions/review_actions';
import Rating from '@mui/material/Rating';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { style } from '@mui/system';

const ReviewForm = ({ currentUserId, listingId, createReview}) => {
  const defaultReview = {
  accuracy: 0,
  checkIn: 0,
  cleanliness: 0,
  communication: 0,
  listingId: listingId,
  location: 0,
  message: undefined,
  reviewerId: currentUserId,
  reviewerName: undefined,
  reviewerLastName: undefined,
  updatedAt: undefined,
  value: 0,
}
  
  const [review, setReview] = useState(defaultReview)
  const [value, setValue] = useState(value);

  console.log('#', review)

  window.scrollTo({
    top: 0,
    left: 0,
  });
  
  const categories = ['Accuracy', 'Check-in', 'Cleanliness', 'Communication', 'Location', 'Value']
  
  const handleStarRating = (e) => {
    e.preventDefault(),
    setValue(e.currenTargetValue)
  }
  
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
        <div className="ratings-container">
          {categories.map((category, idx) => (
            <div className="rating">
              <p>{category}</p>
              <Rating 
                id="star"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
          ))}
        </div>

        <div className="review-text">
          <label>Describe Your Experience</label>
          <p>Tell next guests what you loved and anything else they should know about this place.</p>
          <div className="textarea-container">
            <textarea placeholder='Write a public review'></textarea>
          </div>
        </div>

        <div className="button-group">
          <div className="back-button">
            <MdOutlineArrowBackIos size={25} id="back-button" onClick={() => history.back()}/>
          </div>
          <button className='submit-button'>Submit Review</button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUserId: state.session.currentUserId,
    listingId: parseInt(ownProps.match.params.listingId),
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    createReview: (review) => dispatch(createReview(review)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);