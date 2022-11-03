import React, { StrictMode } from 'react';
import { 
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';

// import SignUpFormContainer from './session_form/signup_form_container';
// import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util'; 
import Splash from './splash/splash';
import Nav from './nav/nav';
import Footer from './footer/footer';
import ListingShowContainer from './listing_show/listing_show_container';
import ReservationIndexContainer from './reservation/reservation_index_container';
import CreateReviewFormContainer from './review/createReviewFormContainer';
import UpdateReviewFormContainer from './review/updateReviewForm';
import UserAccountContainer from './user/userAccountContainer';
import ModalContainer from './modal/modal';
// import 'react-dates/lib/css/_datepicker.css';
// import 'react-date-range/dist/styles.css';
// import 'react-date-range/dist/theme/default.css';

const App = () => {
  return (
    <div className='app-container'>
      <ModalContainer />
      <header className='nav-header-container'>
        <Nav />
      </header>

      <React.StrictMode>
      <Switch>
        {/* <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
        <ProtectedRoute exact path="/user/account" component={UserAccountContainer} />
        <ProtectedRoute exact path="/reservations" component={ReservationIndexContainer} />
        <Route exact path="/listing/:listingId/review/new" component={CreateReviewFormContainer} />
        <Route exact path="/listing/:listingId/review/:reviewId/edit" component={UpdateReviewFormContainer} />
        <Route exact path="/listing/:listingId" component={ListingShowContainer} />
        <Route exact path="/" component={Splash} />
      </Switch>
      </React.StrictMode>

      <footer className='footer-container'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;