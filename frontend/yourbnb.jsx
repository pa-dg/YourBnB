import React from 'react';
import ReactDOM from 'react-dom/client';
import configureStore from './store/store';
import Root from './components/root';
// TO REMOVE
import { signup, login, logout } from './actions/session_actions';
import { fetchListing, fetchListings } from './util/listing_api_util';
import { fetchReservations } from './util/reservation_api_util';
import { fetchReview } from './util/reviews_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUserId: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } 
  else {
    store = configureStore();
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Root store={store}/>);

  // TO REMOVE, FOR TESTING ONLY
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.fetchListing = fetchListing;
  window.fetchListings = fetchListings;
  window.fetchReservations = fetchReservations;
  window.fetchReview = fetchReview;
  
}, {passive: true});
