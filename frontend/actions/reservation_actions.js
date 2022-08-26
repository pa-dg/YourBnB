import * as reservationAPIUtil from "../util/reservation_api_util";

export const RECEIVE_ALL_RESERVATIONS = "RECEIVE_ALL_RESERVATIONS";
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";

export const receiveAllReservations = (reservations) => {
  return {
    type: RECEIVE_ALL_RESERVATIONS,
    reservations,
  };
};

export const receiveReservation = (reservation) => {
  return {
    type: RECEIVE_RESERVATION,
    reservation,
  };
};

export const removeReservation = (id) => {
  return {
    type: REMOVE_RESERVATION,
    id,
  };
};

export const fetchReservations = () => (dispatch) => {
  return reservationAPIUtil
    .fetchReservations()
    .then((reservations) => dispatch(receiveAllReservations(reservations)));
};

export const fetchReservation = (id) => (dispatch) => {
  return reservationAPIUtil
    .fetchReservation(id)
    .then((reservation) => dispatch(receiveReservation(reservation)));
};

export const createReservation = (reservationForm) => (dispatch) => {
  return reservationAPIUtil
    .createReservation(reservationForm)
    .then((createdReservation) =>
      dispatch(receiveReservation(createdReservation))
    );
};

export const updateReservation = (reservation) => (dispatch) => {
  return reservationAPIUtil
    .updateReservation(reservation)
    .then((updatedReservation) =>
      dispatch(receiveReservation(updatedReservation))
    );
};

export const deleteReservation = (reservationId) => (dispatch) => {
  return reservationAPIUtil
    .deleteReservation(reservationId)
    .then(() => dispatch(removeReservation(id)));
};
