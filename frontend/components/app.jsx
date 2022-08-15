import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { 
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';

const App = () => {
  return (
    <div className="app-container">
      <header>
        <h1>Welcome to YourBnB!</h1>
        <GreetingContainer />
      </header>
      {/* <Switch>
        <AuthRoute exact path="/login" component={Log}></AuthRoute>
      </Switch> */}
    </div>
  );
}

export default App;