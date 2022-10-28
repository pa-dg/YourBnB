import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Rating from '@mui/material/Rating';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { isReviewDefined } from '../util/isReviewDefined';

const categories = ['Accuracy', 'Check-in', 'Cleanliness', 'Communication', 'Location', 'Value']
const displayNameCategory = category => {
  switch (category) {
    case "Check-in":
      return "checkIn";
    default:
      return category.charAt(0).toLowerCase() + category.slice(1);
  }
}

const ReviewForm = ({ reviewInfo, formType, processForm }) => {
  const [review, setReview] = useState(reviewInfo);
  const [messageError, setMessageError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const history = useHistory();
  
  useEffect(() => {
    if (isReviewDefined(reviewInfo)) {
      setReview(reviewInfo);
    }
  }, [reviewInfo])

  window.scrollTo(0, 0);

  const handleRatingChange = (event, value) => {
    const category = event.target.getAttribute('name');
    setReview({...review, [displayNameCategory(category)]: value});
  }
  
  const updateMessage = (e) => {
    setReview({...review, message: e.currentTarget.value})
  }
  
  const validateMessage = () => {
    if (!review.message) {
      setMessageError(true);
    } else {
      setMessageError(false);
    }
  }

  const validateCategory = () => {
    if (!review.accuracy) {
      setCategoryError(true);
    }
    if (!review.checkIn) {
      setCategoryError(true);
    }
    if (!review.cleanliness) {
      setCategoryError(true);
    }
    if (!review.communication) {
      setCategoryError(true);
    }
    if (!review.location) {
      setCategoryError(true);
    }
    if (!review.value) {
      setCategoryError(true);
    } else {
      setCategoryError(false);
    }
  } 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewData= Object.assign({}, review);

    validateMessage();
    validateCategory();
    
    processForm(reviewData)
      .then(() => history.goBack());
  };

  return (
    <div id='href' className="review-form-container">
      <header className="review-form-heading">
        <h1>How was your stay at this place?</h1>
      </header>
      
      <form className="review-form" onSubmit={handleSubmit}>
        <div className="ratings-container">
          {categoryError && (
            <p className="review-error">All categories must be rated</p>
          )}

          {categories.map((category, idx) => {
            // HACK, find a better solution
            const rating = review[displayNameCategory(category)] || 0;
            
            return (
              <div key={`${category}-${idx}`} className="rating">
                <p>{category}</p>
                <Rating 
                  id="star"
                  name={category}
                  value={rating}
                  onChange={handleRatingChange}
                />
              </div>
            )
          }
          )}
        </div>

        <div className="review-text">
          <label>Describe Your Experience</label>
          <p>Tell next guests what you loved and anything else they should know about this place.</p>
          
          <div className="textarea-container">
            <textarea 
              id={messageError ? "review-error-box" : null}
              placeholder='Write a public review' 
              value={review.message}
              onChange={updateMessage}>
            </textarea>
          </div>

          {messageError && (
            <p className="review-error">Review message cannot be empty!</p>
          )}
        </div>

        <div className="button-group">
          <div className="back-button">
            <MdOutlineArrowBackIos size={25} id="back-button" onClick={() => history.goBack()}/>
          </div>
          <button className='submit-button'>{formType === 'Create' ? 'Submit Review' : 'Update Review'}</button>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;