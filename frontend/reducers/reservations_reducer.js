import {
  RECEIVE_ALL_RESERVATIONS,
  RECEIVE_RESERVATION,
  REMOVE_RESERVATION,
} from "../actions/reservation_actions";

const reservationsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_RESERVATIONS:
      return action.reservations;
    case RECEIVE_RESERVATION:
      return Object.assign({}, state, {
        [action.reservation.id]: action.reservation,
      });
    case REMOVE_RESERVATION:
      delete nextState[action.reservationId];
      return nextState;
    default:
      return state;
  }
};

export default reservationsReducer;
