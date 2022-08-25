import React, { useState, useEffect } from "react";
import { fetchReservation } from "../../actions/reservation_actions";
import { fetchReservations } from "../../util/reservation_api_util";

const ReservationIndexItem = ({ currentUserId, listings, reservation }) => {

  // const [userReservation, setUserReservation] = useState({
  //   id: '',
  //   city: '',
  //   state: '', 
  //   country: '',
  //   price: '',
  //   propertyType: '',
  //   hostName: '',
  //   photoUrls: '',
  // });
  
  // useEffect(() => {
  //   if (!reservation) {
  //     const fetchData = async () => {
  //       const response = await fetchReservations();
  //       setUserReservation(response.reservations[currentUserId])
  //     }
  //     fetchData();
  //   }
  //   if (reservation) {
  //     setUserReservation(reservation);
  //   }
  // })
  
  const { id, street, city, state, zipcode, country, propertyType, hostName, photoUrls } = props.listings[currentUserId]
  const { checkInDate, checkOutDate } = props.reservation

  const handleClick = () => {
    return history.push(`/listing/${id}`); 
  }

  return (
    <div className="reservation-index-item-container" onClick={handleClick}>
      <div className="reservation-details">
        <h1>{city}</h1>
        <h3>Entire {propertyType} hosted by {hostName}</h3>
      </div>

      <div className="reservation-date-and-loc">
        <div className="reservation-dates">
          <h2>{checkInDate} to {checkOutDate}</h2>
        </div>

        <div className="reservation-loc">
          <h2>{street}</h2> 
          <h2>{city}, {state} {zipcode}</h2>
          <h2>{country}</h2>
        </div>
      </div>

      <div className="reservation-item-img">
        <img id="reservation-img" src={photoUrls[0]} alt="listing-image" />
      </div>
    </div>  
  );
};

export default ReservationIndexItem;