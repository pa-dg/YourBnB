import React from 'react';
import SessionForm from  './session_form';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    otherForm: (
      <p> Already have an account? &nbsp;&nbsp;
        <button onClick={() => dispatch(openModal('login'))}>
          Log In
        </button>
      </p>
    ),
      closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);