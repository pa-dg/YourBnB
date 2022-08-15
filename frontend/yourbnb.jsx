import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { signup, login, logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to YourBnB</h1>, root);
});
