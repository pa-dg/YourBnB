//TO REMOVE: refactor dropdown button

import React, { useState } from "react";
import { connect } from "react-redux";
import { openModal, closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import { Link } from "react-router-dom";
import ModalContainer from '../modal/modal';
import { HiOutlineMenu } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa'

const DropDown = ({ openModal, currentUser, logout }) => {
  const [toggledDropDown, setToggledDropDown] = useState(false);

  const styles = {
    size: 26,
    paddingLeft: 3,
    paddingRight: 3,
    color: '#717171',
  }

  // const openModal = (formType) => {
  //   return e => {
  //     e.preventDefault();
  //     props.openModal(formType)
  //   };
  // };

  // const showDropdown = () => {
  //   event.stopPropagation();
  //   document.getElementById("dropdown-content-id").classList.toggle("show")
  // };

  const handleBlur = () => {
    // event.stopPropagation()
    console.log('on blur')
    setToggledDropDown(false)
  }
 
  const showDropdown = () => {
    return (
      <>
        <ModalContainer/>
        {
          currentUser ? loggedInMenu() : loggedOutMenu()
        }
      </>
    )
  }

  const loggedOutMenu = () => {
    return (  
      <div className="dropdown-content">
          <div className="nav-login-signup" onClick={() => openModal('login')}>
            Log In
          </div>
          <div className="nav-login-signup" onClick={() => openModal('signup')}>
            Sign Up
          </div>
      </div>
    );  
  };

  const loggedInMenu = () => {
    return (
      <div className="dropdown-content">
        <div className="greeting">
          <p>Hi, {currentUser.firstName}!</p>
        </div>
        <div className="nav-trips">
          <Link to="/reservations">Trips</Link>
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
    
  

  return (
    <div className="dropdown-container" onClick={() => setToggledDropDown(!toggledDropDown)} onBlur={handleBlur}>
      <div className="nav-dropdown-button" >
          <HiOutlineMenu size={styles.size} style={styles} />
          <FaUserCircle size={styles.size} style={styles} />
      </div>

      {
        toggledDropDown ? showDropdown() : null
      }
    </div>
  )
}
  

const mapStateToProps = ({ session, entities: { users }}) => {
  return {
    currentUser: users[session.currentUserId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: formType => dispatch(openModal(formType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);