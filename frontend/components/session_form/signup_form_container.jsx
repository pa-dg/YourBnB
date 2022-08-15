import React from 'react';
import { connect } from 'react-redux';
import SessionForm from  './session_form';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(sign(user)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);