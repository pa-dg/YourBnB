import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router';
import { fetchReviews } from '../../actions/review_actions';
import ReviewItem from './review_item';
import { HiStar } from 'react-icons/hi';

const mapCategoryToDisplayName = (category) => {
  switch (category) {
    case "checkIn":
      return "Check-in";
    default:
      return category.charAt(0).toUpperCase() + category.slice(1);
  }
};

const ReviewsIndex = ({ listingId, currentUserId, reviews, numReviews, avgRatings, avgStarRating, fetchReviews, openModal }) => {
  useEffect(() => {
    fetchReviews(listingId);
  }, []);

  const history = useHistory();
  const location = useLocation();
  
  const createReviewForm = (e) => {
    e.preventDefault();
    if (!currentUserId) {
      openModal({type: 'login'});
    } else {
      return history.push(`${location.pathname}/review/new`);
    }
  }
  
  return (
    <div className="reviews-index-container">
      {reviews && numReviews > 0
        ? (
          <>
            <header className="reviews-index-header">
              <div className="reviews-stars-num-reviews">
                <span id="star"><HiStar size={25} /></span>
                <span>{avgStarRating} · {numReviews} {numReviews === 1 ? 'review' : 'reviews'}</span>
              </div>

              <div className="review-new" onClick={createReviewForm}>
                Write a review
              </div>
            </header>

            <section className="reviews-statistics">
              {Object.keys(avgRatings).map((category, idx) => {
                const width = avgRatings[category]/5*100;
                
                return (
                  <div className="review-category-item" key={`${category}-${idx}`}>
                    <span className='label'>{mapCategoryToDisplayName(category)}</span>
                    <span className="bar-value">
                      <div className="outer-bar">
                        <span className="inner-bar" style={{ width: `${width}%` }}></span>
                      </div>
                      <span className="value">{avgRatings[category].toFixed(1)}</span>
                    </span>
                  </div>
                )
              })}
            </section>

            <main className='reviews-index'>
              {reviews.map((review, idx) => (
                <ReviewItem 
                  key={`review-${idx}`} 
                  review={review} 
                  openModal={openModal}
                  currentUserId={currentUserId}
                />
              ))}
            </main>
          </>
        ) : (
          <header className="reviews-index-header">
            <div className="no-reviews">
              <p>No Reviews..yet!</p> 
              <p>Be the first to leave one!</p>
            </div>

            <div className="review-new" onClick={createReviewForm}>
              Write a review
            </div>
          </header>
        )}
    </div>
  )
};

const mapStateToProps = (state) => {
  const reviews = Object.values(state.entities.reviews).reverse();
  const numReviews = reviews.length;
  const currentUserId = state.session.currentUserId;

  const avgRatings = {
    cleanliness: 0,
    communication: 0,
    checkIn: 0,
    accuracy: 0,
    location: 0,
    value: 0,
  }

  if (numReviews > 0) {
    reviews.forEach(review => {
      avgRatings.cleanliness = avgRatings.cleanliness += review.cleanliness,
      avgRatings.communication = avgRatings.communication += review.communication,
      avgRatings.checkIn = avgRatings.checkIn += review.checkIn,
      avgRatings.accuracy = avgRatings.accuracy += review.accuracy,
      avgRatings.location = avgRatings.location += review.location,
      avgRatings.value = avgRatings.value += review.value
    })
  }
  
  const categories = Object.keys(avgRatings);

  categories.forEach((category) => {
    avgRatings[category] = (avgRatings[category] / numReviews);
  });
  
  const avgStar = (Object.values(avgRatings).reduce((acc, rating) => acc + rating) / categories.length).toFixed(2)
  
  return {
    reviews,
    numReviews,
    avgRatings,
    avgStar,
  };
};
  
const mapDispatchToProps = (dispatch) => {
  return {
    fetchReviews: (listingId) => dispatch(fetchReviews(listingId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsIndex);