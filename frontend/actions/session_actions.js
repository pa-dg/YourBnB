import * as sessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const signup = (user) => (dispatch) => {
  return sessionAPIUtil.signup(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (error) => dispatch(receiveErrors(error))
  );
};

export const login = (user) => (dispatch) => {
  return sessionAPIUtil.login(user).then(
    (user) => dispatch(receiveCurrentUser),
    (error) => dispatch(receiveErrors(error))
  );
};

export const logout = () => (dispatch) => {
  return sessionAPIUtil.logout().then((user) => dispatch(logoutCurrentUser()));
};
