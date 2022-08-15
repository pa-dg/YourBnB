// This will keep track of any error messages
import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_RECEIVE_ERRORS,
} from "../actions/session_actions";

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case CLEAR_RECEIVE_ERRORS:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;
