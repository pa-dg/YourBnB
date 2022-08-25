export const fetchReservations = () => {
  return $.ajax({
    url: `api/reservations`,
    method: "GET",
  });
};

// TO DO: REMOVE, NOT NEEDED
export const fetchReservation = (id) => {
  return $.ajax({
    url: `api/reservations/${id}`,
    method: "GET",
  });
};

export const createReservation = (reservation) => {
  return $.ajax({
    url: `/api/reservations`,
    method: "POST",
    data: { reservation },
    // contentType: false,
    // dataType: "json",
    // processData: false,
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
