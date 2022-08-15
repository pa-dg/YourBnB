import React from "react";
import { connect } from "react-redux";
import { openModal, closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';

const NavBar = (props) => {
  const { currentUser, logout } = props;

  const openModal = (formType) => {
    return e => {
      e.preventDefault();
      props.openModal(formType)
    };
  };

  const mainMenuNav = () => {
    return (
      <div className="nav-main-menu">
        <div className="nav-login" onClick={openModal('login')}>
          Log In
        </div>
        <div className="nav-signup" onClick={openModal('signup')}>
          Sign Up
        </div>
      </div>
    );
  };

  const loggedIn = () => {
    return (
      <div className="nav-main-menu">
        <div className="nav-messages">
          Messages
        </div>
        <div className="nav-trips">
          Trips
        </div>
        <div className="nav-wishlists">
          Wishlists
        </div>
        <div className="nav-logout-button" onClick={logout}>
          Logout
        </div>
      </div>
    );
  };

  return currentUser ? loggedIn() : mainMenuNav();
}

const mapStateToProps = ({ session, entities: { users }}) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: formType => dispatch(openModal(formType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);