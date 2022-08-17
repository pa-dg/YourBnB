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

  const showDropdown = () => (
    document.getElementById("dropdown-content-id").classList.toggle("show")
  )

//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

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
        <i className="far fa-user-circle" ></i>
      </div>
      <div className="dropdown-menu">
        <ModalContainer/>
        {
          props.currentUser ? loggedInMenu() : loggedOutMenu()

          // <div className="dropdown-content">
          //   <ul className="dropdown">
          //     <li className="nav-messages">
          //       Messages
          //     </li>
          //     <li className="nav-trips">
          //       Trips
          //     </li>
          //     <li className="nav-wishlists">
          //       Wishlists
          //     </li>
          //     <li className="nav-logout-button" onClick={logout}>
          //       Logout
          //     </li>
          //   </ul>
          // </div>

          // :

          // <div className="dropdown-content">
          //   <ul className="dropdown">
          //     <li className="nav-login-signup" onClick={openModal('login')}>
          //       Log In
          //     </li>
          //     <li className="nav-login-signup" onClick={openModal('signup')}>
          //       Sign Up
          //     </li>
          //   </ul>
          // </div>

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