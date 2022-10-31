import React from 'react';
import { connect } from 'react-redux';
import { deleteReview } from '../../actions/review_actions';
import { closeModal } from '../../actions/modal_actions';

const DeleteReviewModal = ({ reviewId, deleteReview, closeModal }) => {
  const handleDeleteReview = (e) => {
    e.preventDefault();
    deleteReview(reviewId);
    closeModal();
  };

  return (
    <div className="delete-review-modal-container">
      <div className="exit-modal" onClick={() => closeModal()}>
        &times;
      </div>
      <span>Delete Review</span>
      <div className="form-content">
        <p>
          Are you sure you want to delete your review? This action cannot be
          undone.
        </p>
        <div className="button-container">
          <button id="delete-button" onClick={handleDeleteReview}>
            Delete
          </button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(null, mapDispatchToProps)(DeleteReviewModal);