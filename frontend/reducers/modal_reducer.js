import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

const modalReducer = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return null;
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
};

export default modalReducer;
