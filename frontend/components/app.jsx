import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { 
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util'; 
import ModalContainer from './modal/modal';
import Splash from './splash/splash';
import Nav from './nav/nav';
import Footer from './footer/footer';

const App = () => {
  return (
    <>
      <ModalContainer />
      <header>
        <Nav />
      </header>
      <Switch>
        {/* <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
        <Route exact path="/" component={Splash} />
      </Switch>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;