import React from "react";
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

const ImageGridModal = ({ photoUrls, closeModal }) => {
  
  return (
    <div className="imgs-modal-container">
      <div className="exit-modal" onClick={() => closeModal()}>
        &times;
      </div>
      <div className="listing-imgs">
        {photoUrls.map((photoUrl, index) => (
          <img className="all-imgs" key={`${photoUrl}-${index}`} src={photoUrl} alt="listing-image" />
        )) }
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
  }
};

export default connect(null, mapDispatchToProps)(ImageGridModal);