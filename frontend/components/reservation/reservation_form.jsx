import React, { useEffect, useState } from "react";
import { BsFillStarFill } from 'react-icons/bs';

const ReservationForm = props => {

  const { listingId, listing, createReservation, currentUser } = props;

  const [reservationInfo, setReservationInfo] = useState({
    checkInDate: '',
    checkOutDate: '',
    numGuests: '',
    adults: 2,
    children: 0,
    price: 270,
    listingId,
    currentUser,
  })
  
  // useEffect(() => {
  //     if (!selectedListing) {
  //       const fetchData = async () => {
  //       const response = await fetchListing(parseInt(listingId));
  //       setListing(response.listing);
  //       }
  //       fetchData();
  //     }
  //   }, []);
    
  const { price, additionalFees, numGuest } = props.listing;
  
  const update = (field) => {
    if (field === 'numGuests') {
      return e => setReservationInfo({
      ...reservationInfo, [field]: parseInt(e.currentTarget.value)
    })} else {
    return e => setReservationInfo({
      ...reservationInfo, [field]: e.currentTarget.value
    })};
  };  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = Object.assign({}, reservationInfo);
    createReservation(reservation);
  };
    
    // debugger;
  return (
    <div className="reservation-form-container">
      <div className="form-top">
        
        <div className="reservation-form-header">
          <h1>{price}</h1>
          <span><BsFillStarFill id="star" /> 5.0 &middot; 5 reviews</span>
        </div>

        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="checkin-date-input">
            <label htmlFor="checkin-date">CHECK-IN
              <input type="date" className="reservation-input" value={reservationInfo.checkInDate} onChange={update('checkInDate')} />
            </label>
          </div>
          <div className="checkout-date-input">
            <label htmlFor="checkout-date">CHECKOUT
              <input type="date" className="reservation-input" value={reservationInfo.checkOutDate} onChange={update('checkOutDate')} />
            </label>
          </div>
          <div className="num-guests-input">
            <h1>Guest:</h1>
            <input type="number" className="reservation-input" placeholder="1 guest" value={reservationInfo.numGuests} onChange={update('numGuests')} min="1" max={numGuest} />
          </div>

          <label htmlFor="reserve-button">
            <input type="submit" className="reserve-button" value="Reserve"/>
          </label>
        </form>

      </div>

      <div className="form-bottom">

      </div>
    </div>
  )
};

export default ReservationForm;