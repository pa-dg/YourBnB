import React, { useEffect, useState } from "react";
import { BsFillStarFill } from 'react-icons/bs';
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

const ReservationForm = ({ listingId, createReservation, userId, openModal } ) => {

  const [reservationInfo, setReservationInfo] = useState({
    checkInDate: '',
    checkOutDate: '',
    numGuests: '',
    adults: 2,
    children: 0,
    price: 270,
    listingId,
    userId,
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
      })
    // } else if (field === 'checkInDate' || 'checkOutDate') {
    //   return e => setReservationInfo({
    //     ...reservationInfo, [field]: new Date(Date.parse(e.currentTarget.value))
    //   })
    } else {
    return e => setReservationInfo({
      ...reservationInfo, [field]: e.currentTarget.value
    })};
  };  

  let history = useHistory();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userId) {
      openModal('login');
    }
    const reservation = Object.assign({}, reservationInfo);
    createReservation(reservation)
      .then(reservation => history.push(`/reservations`));
  };
    
    // debugger;
  return (
    <div className="reservation-form-container">
      <div className="form-top">
        
        <div className="reservation-form-header">
          <span>
            <h1>$ {price}</h1>
            <h3>night</h3>
          </span>
          <span><BsFillStarFill id="star" />5.0 &middot; 5 reviews</span>
        </div>

        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="reservation-form-input-container">

            <div className="date-input-container">

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
            </div>

            <div className="num-guests-input">
              <h1>Guest:</h1>
              <input type="number" className="reservation-input" placeholder="1 guest" value={reservationInfo.numGuests} onChange={update('numGuests')} min="1" max={numGuest} />
            </div>


            <label htmlFor="reserve-button">
              <input type="submit" className="reserve-button" value="Reserve"/>
            </label>
          </div>
        </form>

      </div>

      <div className="form-bottom">
      </div>

    </div>
  )
};

export default withRouter(ReservationForm);