import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import FilterFormContainer from '../filter/filterFormContainer';
import ImageGridModal from '../listing_show/ImageGridModal';
import DeleteReviewModalContainer from '../listing_show/DeleteReviewModal';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.type) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'filter':
      component = <FilterFormContainer />;
      break;
    case 'imageGrid':
      component = <ImageGridModal photoUrls={modal.photoUrls} />;
      break;
    case 'deleteReview':
      component = <DeleteReviewModalContainer reviewId={modal.reviewId} />
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);