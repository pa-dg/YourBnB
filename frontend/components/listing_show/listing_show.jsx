import React, { useState, useEffect } from "react";
import { BsFillStarFill } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';
import ListingMap from '../listing_map/listing_map';
import ReservationForm from '../reservation/reservation_form';
import CircularProgress from '@mui/material/CircularProgress';
import ReviewsIndex from './reviews_index';

const ListingShow = ({ listingId, selectedListing, fetchListing, createReservation, userId, openModal }) => {
  const [listing, setListing] = useState(selectedListing);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!selectedListing) {
      // check if selectedListing is undefined from props
      // (user is directly going to listing show page)
      const fetchData = async () => {
        const response = await fetchListing(parseInt(listingId));
        setListing(response.listing);
      }
      fetchData();
    }

    if (selectedListing) {
      setListing(selectedListing);
    }
  }, [selectedListing]);

  // TO DO: remove
  useEffect(() => {
    const intervalId = setTimeout(() => setIsLoading(true), 2000);

    return () => {
      clearTimeout(intervalId);
    }
  }, []);

  return (
    <div className="listing-show-container">
      {isLoading && listing ? (
        <>
          <div className="listing-show-heading">
            <div className="listing-show-title">
              <h1>{listing.title}</h1>
            </div>

            <div className="listing-show-subheading">
              <div className="listing-show-subheading-left">
                <h3><BsFillStarFill id="star" /> 5.0 &middot; 5 reviews &middot; {listing.city}, {listing.state}, {listing.country}</h3>
              </div>
              <div className="listing-show-subheading-right">
                <h3><FiShare id="share" /> Share <FaRegHeart id="heart" /> Save</h3>
              </div>
            </div>
          </div>

          <div className="listing-show-images-container">

            <div className="listing-show-img-main">
              <div><img id="img-main" src={listing.photoUrls[0]} alt="listing-image" /></div>
            </div>
              
            <div className="listing-show-img-others">
              {listing.photoUrls && (listing.photoUrls.filter((photoUrl, index) => index !== 0).map((photoUrl, index) =>
                <div key={index}>
                  {
                    <img id="listing-show-img" key={index} src={photoUrl} alt="listing-image" /> 
                  }
                </div>
                )
              )}
            </div>

          </div>

          <div className="listing-show-info-and-reservation-container">
            <div className="listing-show-info">
              <div className="listing-host">
                <h1>Entire {listing.propertyType} hosted by {listing.hostName}</h1>
                <h2>{listing.numGuest} guest &middot; {listing.numBeds} bed &middot; {listing.numBaths} bath</h2>
              </div> 

              <div className="listing-aircover">
                <img src={window.aircover} alt="aircover-icon" height={26}/>
              </div>
              
              <div className="listing-description">
                <span>{listing.description}</span>
              </div>
            </div>

            <div className="listing-reservation-form">
              <ReservationForm key={`${Math.random()}`} listing={listing} listingId={listingId} createReservation={createReservation} userId={userId} openModal={openModal} />
            </div>
            
          </div>

          <ReviewsIndex listingId={listingId} />
          
          <>  
            <div className="map-header">Where you'll be</div>
            <ListingMap key={`${Math.random()}`} selectedListing={selectedListing}/>
          </>
        </>
      ) : (
        <div style={{ textAlign: 'center', alignContent: 'center', padding: 40 }}>
          <CircularProgress />
        </div>
      )}

    </div>
  );
}

export default ListingShow;