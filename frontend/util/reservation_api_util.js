export const fetchReservations = () => {
  return $.ajax({
    url: `api/reservations`,
    method: "GET",
  });
};

export const fetchReservation = (id) => {
  return $.ajax({
    url: `api/reservations/${id}`,
    method: "GET",
  });
};

export const createReservation = (reservationForm) => {
  return $.ajax({
    url: `api/reservations`,
    method: "POST",
    data: reservationForm,
    contentType: false,
    processData: false,
  });
};

export const updateReservation = (reservation) => {
  return $.ajax({
    url: `api/reservations/${id}`,
    method: "POST",
    data: { reservation },
  });
};

export const deleteReservation = (reservationId) => {
  return $.ajax({
    url: `api/reservations/${reservationId}`,
    method: "DELETE",
  });
};
