import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route 
    path={path}
    exact={exact}
    render={props => 
      !loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => {
    if (loggedIn) {
      return <Component {...props} />;
    } else {
      window.alert('You need to be logged in');
      return <Redirect to="/" />;
    }
  }} />
);

const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.currentUserId) };
};

export const AuthRoute = withRouter(connect(mapStateToProps,null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps,null)(Protected));