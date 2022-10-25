import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { dateParser } from '../util/dateParser';
import ImageSlider from '../listing/image_slider';

const ReservationIndexItem = ({ reservation: { id, listingId, checkInDate, checkOutDate }, fetchListing, deleteReservation }) => {

  const [reservedListing, setReservedListing] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchListing(listingId);
      setReservedListing(response.listing);
    }
    fetchData();
  }, [id])

  let history = useHistory();
  
  const handleBack = () => {
    return history.push(`/listing/${listingId}`); 
  }
  
  const handleCancel = (e) => {
    e.preventDefault();
    deleteReservation(id);
  }

  return (
    <>
      <div className="reservation-index-item-container">
        {reservedListing && (
          <>
            <div className="reservation-details" onClick={handleBack}>
              <div className="reservation-info">
                  <h2>{reservedListing.city}</h2>
                  <h3>Entire {reservedListing.propertyType} hosted by {reservedListing.hostName}</h3>
              </div>

              <div className="reservation-date-and-loc">
                <div className="reservation-dates">
                  <h2>{dateParser(checkInDate)} -</h2>
                  <h2>{dateParser(checkOutDate)}</h2>
                </div>

                <div className="reservation-loc">
                  <h2>{reservedListing.street}</h2> 
                  <h2>{reservedListing.city}, {reservedListing.state} {reservedListing.zipCode}</h2>
                  <h3>{reservedListing.country}</h3>
                </div>
              </div>
            </div>

            <div className="reservation-item-img-container">
              <ImageSlider photoUrls={reservedListing.photoUrls} />
            </div>
          </>
        )}
      </div> 

      <button className="cancel-res-button" onClick={handleCancel}>Cancel Reservation</button>
    </>
  );
};

export default ReservationIndexItem;