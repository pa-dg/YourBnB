import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login, clearReceiveErrors } from './../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Log In',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    clearReceiveErrors: () => dispatch(clearReceiveErrors()),
    closeModal: () => dispatch(closeModal()),
    otherForm: (
      <p>Don't have an account yet? &nbsp;&nbsp;
        <a onClick={() => dispatch(openModal({ type: 'signup' }))}>
          Sign Up
        </a>
      </p>
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);