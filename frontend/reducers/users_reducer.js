import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/userActions";

const _nullUser = Object.freeze({});

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {
        [action.currentUser.id]: action.currentUser,
      });
    case RECEIVE_USER:
      return Object.assign({}, state, {
        [action.user.id]: action.user,
      });
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default usersReducer;
