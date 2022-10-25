import React, { useEffect, useState  } from 'react';
import ReviewForm from './ReviewForm';
import { connect } from 'react-redux';
import { fetchReview, updateReview } from '../../actions/review_actions';
import { withRouter } from 'react-router-dom';

const UpdateReviewForm = ({ reviewId, formType, updateReview, fetchReview }) => {
   useEffect(() => {
    const fetchData = async () => {
      const response = await fetchReview(reviewId);
      setReviewInfo(response.review[reviewId])
    };
    fetchData();
  }, []);
  
  const [reviewInfo, setReviewInfo] = useState({})

  return (
    <ReviewForm 
      formType={formType}
      reviewInfo={reviewInfo}
      updateReview={updateReview}
    />
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    reviewId: parseInt(ownProps.match.params.reviewId),
    formType: 'Update',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateReview: review => dispatch(updateReview(review)),
    fetchReview: reviewId => dispatch(fetchReview(reviewId)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateReviewForm));
