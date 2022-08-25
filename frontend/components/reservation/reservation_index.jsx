import React, { useEffect } from "react";
import { fetchReservations } from "../../actions/reservation_actions";
import ReservationIndexItem from "./reservation_index_item";

const ReservationIndex = ({ reservations }) => {

  useEffect(() => {
    debugger
    fetchReservations();
  }, [])

  console.log(reservations)
  return (
    <div className="reservation-index-container">
      <div className="reservation-index-heading">
        <h1>Upcoming Trips</h1>
      </div>

      {/* <>
        {currentUserReservations.map((reservation, idx) => (
          <ReservationIndexItem key={`res-${idx}`} reservation={reservation} listings={listings} currentUserId={currentUserId} />
        ))}
      </> */}
    </div>
  );  
};

export default ReservationIndex;