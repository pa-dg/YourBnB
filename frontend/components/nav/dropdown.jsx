//TO REMOVE: dropdown menu

import React from "react";
import { connect } from "react-redux";
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import ModalContainer from '../modal/modal';

const DropDown = (props) => {
  const { currentUser, logout } = props;

  const openModal = (formType) => {
    return e => {
      e.preventDefault();
      props.openModal(formType)
    };
  };

  const showDropdown = () => {
    event.stopPropagation();
    document.getElementById("dropdown-content-id").classList.toggle("show")
  };

  const loggedInMenu = () => {
    return (
      <div id="dropdown-content-id" className="dropdown-content">
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
    
  const loggedOutMenu = () => {
    return (  
      <div id="dropdown-content-id" className="dropdown-content">
          <div className="nav-login-signup" onClick={openModal('login')}>
            Log In
          </div>
          <div className="nav-login-signup" onClick={openModal('signup')}>
            Sign Up
          </div>
      </div>
    );  
  };

  return (
    <div className="nav-dropdown-button" onClick={showDropdown}>
      <div className="dropdown-icon1">
        <i className="fas fa-bars fa-sm"></i>
      </div>
      <div className="dropdown-icon2">
        <i className="far fa-user-circle"></i>
      </div>
      <div className="dropdown-menu">
        <ModalContainer/>
        {
          currentUser ? loggedInMenu() : loggedOutMenu()
        }
      </div>
    </div>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);