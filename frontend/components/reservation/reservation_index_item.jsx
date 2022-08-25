import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const ReservationIndexItem = ({
  reservation: { listingId, checkInDate, checkOutDate },
  listings,
  fetchListing
}) => {
  useEffect(() => {
    fetchListing(listingId);
  }, [])

  let history = useHistory();

  const handleClick = () => {
    return history.push(`/listing/${listingId}`); 
  }

  const listing = listings[listingId];
  return (
    <div className="reservation-index-item-container" onClick={handleClick}>
      {listing && (
        <>
          <div className="reservation-details">
            <div className="reservation-info">
                <h2>{listing.city}</h2>
                <h3>Entire {listing.propertyType} hosted by {listing.hostName}</h3>
            </div>

            <div className="reservation-date-and-loc">
              <div className="reservation-dates">
                <h2>{checkInDate}  -</h2>
                <h2>{checkOutDate}</h2>
              </div>

              <div className="reservation-loc">
                <h2>{listing.street}</h2> 
                <h2>{listing.city}, {listing.state} {listing.zipcode}</h2>
                <h2>{listing.country}</h2>
              </div>
            </div>


          </div>

          <div className="reservation-item-img">
            <img id="reservation-img" src={listing.photoUrls[0]} alt="listing-image" />
          </div>
        </>
      )}
    </div>  
  );
};

export default ReservationIndexItem;