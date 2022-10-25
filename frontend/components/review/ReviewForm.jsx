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

const ReviewForm = ({ reviewInfo, formType, createReview, updateReview }) => {
  const { listingId } = reviewInfo; 
  const [review, setReview] = useState(reviewInfo)
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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewData= Object.assign({}, review);

    if (formType === 'Create') {
      createReview(reviewData)
        .then(() => history.push(`/listing/${listingId}`))
    } else if (formType === 'Update' ) {
      updateReview(reviewData)
        .then(() => history.push(`/listing/${listingId}`))
    }
  }

  return (
    <div id='href' className="review-form-container">
      <header className="review-form-heading">
        <h1>How was your stay at this place?</h1>
      </header>
      
      <form className="review-form" onSubmit={handleSubmit}>
        <div className="ratings-container">
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
              placeholder='Write a public review' 
              value={review.message}
              onChange={updateMessage}>
            </textarea>
          </div>
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