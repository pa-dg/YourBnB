import React from "react";
import ReservationIndexItem from './reservation_index_item';

const ReservationIndex= props => {
  
  return (
    <div className="reservation-index-container">
      <div className="heading">
        <h1>Trips</h1>
      </div>

      <>
        <ReservationIndexItem />
      </>
    </div>
  );  
};

export default ReservationIndex;