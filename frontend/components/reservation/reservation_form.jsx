import React, { useEffect, useState } from "react";
import { BsFillFlagFill } from 'react-icons/bs';
import { HiStar, HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

const ReservationForm = ({ listingId, listing, createReservation, userId, openModal } ) => {

  const [reservationInfo, setReservationInfo] = useState({
    checkInDate: currentDate,
    checkOutDate: currentDate,
    numGuests: 1,
    price: listing.price,
    listingId,
    userId,
  })

  const [toggledDropDown, setToggledDropDown] = useState(false);

  const { price, additionalFees, numGuest } = listing;

  const styles = {
    star: {
      size: 15,
      paddingRight: 3,
    },
    chevron: {
      size: 20,
      color: 'black',
    },
    flag: {
      size: 10,
    }
  }
  
  const currentDate = new Date().toJSON().slice(0, 10)

  const update = (field) => {
    if (field === 'checkInDate') {
      return e => setReservationInfo({
        ...reservationInfo, [field]: (e.currentTarget.value)
      })
    } else if (field === 'checkOutDate') {
      return e => setReservationInfo({
        ...reservationInfo, [field]: (e.currentTarget.value)
      })
    }
  };  

  const handleOnClick = (e) => {
    e.preventDefault();
    setToggledDropDown(!toggledDropDown);
  }
  
  const handleOnBlur = (e) => {
    if (e.relatedTarget === null || (e.relatedTarget.className != "guest-input" && e.relatedTarget.className != "num-guest-button")) {
      setToggledDropDown(false);
    }
  }

  const handleAddSubtractGuest = (operation) => {
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (operation.toLowerCase() === 'add') {
        if (reservationInfo.numGuests < numGuest) {
          setReservationInfo({...reservationInfo, numGuests: reservationInfo.numGuests + 1})
        }
      } else {
        if (reservationInfo.numGuests > 1) {
          setReservationInfo({...reservationInfo, numGuests: reservationInfo.numGuests - 1})
        }
      }
    }
  }
  
  const getNumDays = () => {
    if (reservationInfo.checkInDate && reservationInfo.checkOutDate) {
      const numDays = parseInt(reservationInfo.checkOutDate.split('-')[2]) - parseInt(reservationInfo.checkInDate.split('-')[2])
      return numDays;
    }
  }

  const getPrice = {
    listingSubtotal: reservationInfo.price * getNumDays(),
    cleaningFee: (reservationInfo.price * getNumDays()) * 0.10,
    serviceFee: (reservationInfo.price * getNumDays()) * 0.20,
  }
  
  let history = useHistory();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userId) {
      openModal('login');
    }
    const reservation = Object.assign({}, reservationInfo);
    createReservation(reservation)
      .then(() => history.push(`/reservations`));
  };

  console.log(reservationInfo)
  return (
    <div className="reservation-form-container">
        
      <div className="reservation-form-header">
        <p>
          <span className="price">${price}</span>
          <span>night</span>
        </p>
        <p>
          <span><HiStar size={styles.star.size} style={styles.star}/> 5.0 </span>
          <span>&middot;</span>
          <span className="reviews-link">5 reviews</span>
        </p>
      </div>

      <form className="reservation-form" onSubmit={handleSubmit}>
        <div className="reservation-form-input-container">
          <div className="date-picker-container">
              <div className="date-input">
                <label htmlFor="checkin-date">CHECK-IN</label>
                  <input 
                    type="date"
                    value={reservationInfo.checkInDate} 
                    min={currentDate}
                    onChange={update('checkInDate')} />
              </div>

              <div className="date-input">
                <label htmlFor="checkout-date">CHECKOUT</label>
                  <input 
                    type="date" 
                    value={reservationInfo.checkOutDate} 
                    min={currentDate}
                    onChange={update('checkOutDate')} />
              </div>
          </div>

          <div className="guest-input-container">
            <label htmlFor="guest">GUESTS</label>
              <div className="guest-input" onClick={handleOnClick} onBlur={handleOnBlur} tabIndex="1">
                <p>{reservationInfo.numGuests} {reservationInfo.numGuests === 1 ? 'guest' : 'guests'}</p>
                <div className="add-guest-dropdown-container">
                  {
                    toggledDropDown ? 
                    (
                      <>
                        <HiChevronUp size={styles.chevron.size} style={styles.chevron} />
                        <div className="add-guest-container">
                          <p className="guest-text">
                            Guest
                          </p>
                          <div className="add-guest">
                            <button 
                              className="num-guest-button" onClick={handleAddSubtractGuest('subtract')} id={reservationInfo.numGuests === 1 ? "disable-button" : null}>-</button>
                            <span>{reservationInfo.numGuests}</span>
                            <button className="num-guest-button" onClick={handleAddSubtractGuest('add')} id={reservationInfo.numGuests === numGuest ? "disable-button" : null}>+</button>
                          </div>
                        </div>
                      </>
                    ) : 
                    <HiChevronDown size={styles.chevron.size} style={styles.chevron} />
                  }     
                </div>          
              </div>
          </div>
        </div>
        <button className={reservationInfo.checkInDate && reservationInfo.checkOutDate ? "reserve-button" : "disable-res-button"}>
          <span>Reserve</span>
        </button>
      </form>
      {
        reservationInfo.checkInDate && reservationInfo.checkOutDate &&
        (
          <div className="reservation-price">
            <p className="reservation-footer">You won't be charged yet</p>

            <div className="price-info">
              <p>${price} x {getNumDays()} {getNumDays() > 1 ? "nights" : "night"}</p> 
              <p>${reservationInfo.price ? `${getPrice.listingSubtotal}` : null }</p>
            </div>

            <div className="price-info">
              <p>Cleaning fee</p>
              <p>${reservationInfo.price ? `${getPrice.cleaningFee}` : null }</p>
            </div>

            <div className="price-info">
              <p>Service fee</p>
              <p>${reservationInfo.price ? `${getPrice.serviceFee}` : null }</p>
            </div>

            <div className="price-info-total">
              <p>Total before taxes</p>
              <p>${reservationInfo.price ? `${getPrice.listingSubtotal + getPrice.cleaningFee + getPrice.serviceFee}` : null }</p>
            </div>

          </div>
        )
      }
              {/* <label htmlFor="reserve-button">
                <input type="submit" className="reserve-button" value="Reserve"/>
                </label>
              </div> */}
        <p className="reservation-footer">
          <BsFillFlagFill size={styles.flag.size} style={styles.flag} /> Report this listing</p>
    </div>
  )
};

export default withRouter(ReservationForm);