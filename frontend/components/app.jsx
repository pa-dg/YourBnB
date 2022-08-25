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
import ModalContainer from './modal/modal';
import Splash from './splash/splash';
import Nav from './nav/nav';
import Footer from './footer/footer';
import ListingShowContainer from './listing_show/listing_show_container';
import ReservationIndexContainer from './reservation/reservation_index_container';


const App = () => {
  return (
    <>
      <ModalContainer />
      <header id='nav-header-container'>
        <Nav />
      </header>
      <React.StrictMode>
      <Switch>
        {/* <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
        <ProtectedRoute exact path="/reservations" component={ReservationIndexContainer} />
        <Route exact path="/listing/:listingId" component={ListingShowContainer} />
        <Route exact path="/" component={Splash} />
      </Switch>
      </React.StrictMode>
      <footer id='footer-container'>
        <Footer />
      </footer>
    </>
  );
}

export default App;