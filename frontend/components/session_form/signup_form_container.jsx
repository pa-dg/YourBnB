import React from 'react';
import SessionForm from  './session_form';
import { connect } from 'react-redux';
import { signup, clearReceiveErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign Up',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    clearReceiveErrors: () => dispatch(clearReceiveErrors()),
    closeModal: () => dispatch(closeModal()),
    otherForm: (
      <p> Already have an account? &nbsp;&nbsp;
        <a onClick={() => dispatch(openModal({ type: 'login' }))}>
          Log In
        </a>
      </p>
    ),
      closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);