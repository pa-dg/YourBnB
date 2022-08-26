import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchReviews } from '../../actions/review_actions';
import ReviewItem from './review_item';
import { BsFillStarFill } from 'react-icons/bs';

const mapCategoryToDisplayName = (category) => {
  switch (category) {
    case "checkIn":
      return "Check-in";
    default:
      return category.charAt(0).toUpperCase() + category.slice(1);
  }
};

const ReviewsIndex = ({ listingId, reviews, avgRatings, avgStars, fetchReviews }) => {
  useEffect(() => {
    fetchReviews(listingId);
  }, []);

  const reviewsCount = Object.values(reviews).length;

  return (
    <div className="reviews-index-container">
      <header className="reviews-index-header">
        <div className="reviews-stars-num-reviews">
          <span className="star"><BsFillStarFill /></span>
          <span>{avgStars.toFixed(1)} · {reviewsCount} {reviewsCount === 1 ? 'review' : 'reviews'}</span>
        </div>

        <div className="review-new">
          <Link to="/reviews/new">Write a review</Link>
        </div>
      </header>

      <div className="reviews-statistics">
        {Object.keys(avgRatings).map((category) => {
          const width = avgRatings[category]/reviewsCount/5*100;
          
          return (
            <div className="review-category-item">
              <span className='label'>{mapCategoryToDisplayName(category)}</span>
              <span className="bar-value">
                <div className="outer-bar">
                  <span className="inner-bar" style={{ width: `${width}%` }}></span>
                </div>
                <span className="value">{(avgRatings[category]/reviewsCount).toFixed(1)}</span>
              </span>
            </div>
          )
        })}
      </div>

      {
        reviews && (
          Object.values(reviews).map((review, idx) => (
            <ReviewItem key={`review-${idx+1}`} review={review} />
          )))
      }
    </div>
  )
};

const mapStateToProps = (state) => {
  const reviews = state.entities.reviews;

  const avgRatings = {
    cleanliness: 0,
    communication: 0,
    checkIn: 0,
    accuracy: 0,
    location: 0,
    value: 0,
  };

  if (Object.values(reviews).length > 0) {
    Object.values(reviews).forEach(review => {
      avgRatings.accuracy = (review.accuracy += avgRatings.accuracy)
      avgRatings.checkIn = (review.checkIn += avgRatings.checkIn)
      avgRatings.cleanliness = (review.cleanliness += avgRatings.cleanliness)
      avgRatings.communication = (review.communication += avgRatings.communication)
      avgRatings.location = (review.location += avgRatings.location)
      avgRatings.value = (review.value += avgRatings.value)
    });
  }

  const avgStars = Object.values(avgRatings).reduce((acc, rating) => acc + rating) / Object.values(avgRatings).length;
  
  return {
    reviews,
    avgRatings,
    avgStars,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReviews: (listingId) => dispatch(fetchReviews(listingId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsIndex);