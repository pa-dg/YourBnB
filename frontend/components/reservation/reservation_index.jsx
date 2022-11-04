import React, { useEffect, useState } from "react";
import ReservationIndexItem from "./reservation_index_item";
import { MdOutlineArrowBackIos, MdOutlineWavingHand } from 'react-icons/md';
import { HiOutlineSparkles } from 'react-icons/hi';
import { Link } from "react-router-dom";


const ReservationIndex = ({ reservations, fetchReservations, fetchListing, deleteReservation }) => {
  // const [trips, setTrips] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      await fetchReservations();
    }
    fetchData();
  }, []);

   window.scrollTo(0,0,);

  return (
    <>
    
      <div className="reservation-index-container">
        <div className="back-button">
          <MdOutlineArrowBackIos size={25} id="back-button" onClick={() => history.back()}/>
        </div>
        <div className="reservation-index-heading">
          <h1>Trips</h1>
          <h2>Upcoming Trips</h2>
        </div>
  
        {reservations.length > 0 ? 
          (reservations.map((reservation, idx) => (
            <ReservationIndexItem 
              key={`res-${idx}`}
              reservation={reservation}
              fetchListing={fetchListing}
              deleteReservation={deleteReservation}
            />
            ))
          )
          :
          <div className="no-reservation-container">
            <div className="top-content">
              <MdOutlineWavingHand size={40} id="handwave-icon"/>
              <HiOutlineSparkles size={25} id="spark-icon"/>
            </div>
            <h2>No trips booked...yet!</h2>
            <h3>Time to dust off your bags and start planning your next adventure</h3>
            <button className="start-search-button">
              <Link to="/">
                <span>Start Searching</span> 
              </Link>
            </button>
            
          </div>
        }
      </div>
      
    </>
  );  
};

export default ReservationIndex;