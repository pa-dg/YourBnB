import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { createReview } from '../../actions/review_actions';
import Rating from '@mui/material/Rating';
import { MdOutlineArrowBackIos } from 'react-icons/md';

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
  value: 0,
  }

  const [review, setReview] = useState(defaultReview)
  const [value, _] = useState(value);

  const categories = ['Accuracy', 'Check-in', 'Cleanliness', 'Communication', 'Location', 'Value']

  const history = useHistory();
  
  window.scrollTo(0,0);
  
  const displayNameCategory = category => {
    switch (category) {
      case "Check-in":
        return "checkIn";
      default:
        return category.charAt(0).toLowerCase() + category.slice(1);
    }
  }
  
  const handleRatingChange = (event, value) => {
    const category = event.target.getAttribute('name');
    setReview({...review, [displayNameCategory(category)]: value});
  }
  
  const updateMessage = (e) => {
    setReview({...review, message: e.currentTarget.value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewData= Object.assign({}, review);
    createReview(reviewData)
      .then(() => history.push(`/listing/${listingId}`))
  }

  return (
    <div className="review-form-container">
      <header className="review-form-heading">
        <h1>How was your stay at this place?</h1>
      </header>
      
      <form className="review-form" onSubmit={handleSubmit}>
        <div className="ratings-container">
          {categories.map((category, idx) => (
            <div key={`${category}-${idx}`} className="rating">
              <p>{category}</p>
              <Rating 
                id="star"
                name={category}
                value={value}
                onChange={handleRatingChange}
              />
            </div>
          ))}
        </div>

        <div className="review-text">
          <label>Describe Your Experience</label>
          <p>Tell next guests what you loved and anything else they should know about this place.</p>
          <div className="textarea-container">
            <textarea placeholder='Write a public review' onChange={updateMessage}></textarea>
          </div>
        </div>

        <div className="button-group">
          <div className="back-button">
            <MdOutlineArrowBackIos size={25} id="back-button" onClick={() => history.goBack()}/>
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