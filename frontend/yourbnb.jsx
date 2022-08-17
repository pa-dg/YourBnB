import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// TO REMOVE
import { signup, login, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } 
  else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

  // TO REMOVE, FOR TESTING ONLY
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.onclick = function(event) {
  if (!event.target.matches('.nav-dropdown-button')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

  // END
});
