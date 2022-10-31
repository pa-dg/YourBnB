import React, { useState, useEffect } from "react";
import { HiStar, HiWifi } from 'react-icons/hi';
import { FaRegHeart, FaRegSnowflake } from 'react-icons/fa';
import { FiShare, FiWind } from 'react-icons/fi';
import { BiTv, BiRestaurant } from 'react-icons/bi';
import { MdOutlineLocalLaundryService } from 'react-icons/md';
import { RiAlarmWarningLine, RiCarLine } from 'react-icons/ri';
import ListingMap from '../map/ListingMap';
import ReservationForm from '../reservation/reservation_form';
import CircularProgress from '@mui/material/CircularProgress';
import ReviewsIndex from './reviews_index';
import { reviewsCount } from "../util/reviewsCount";

const ListingShow = ({ listingId, selectedListing, currentUserId, fetchListing, createReservation, openModal }) => {
  const [listing, setListing] = useState(selectedListing);
  // const [showCalendar, setShowCalendar] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // debugger
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
  }, []);

  // TO DO: remove
  // useEffect(() => {
  //   const intervalId = setTimeout(() => setIsLoading(true), 2000);

  //   return () => {
  //     clearTimeout(intervalId);
  //   }
  // }, []);

  // window.scrollTo(0,0)
  
  const styles = {
    size: 15,
    paddingRight: 5,
  }

  const handleImageClick = (e) => {
    e.preventDefault();
    openModal({
      type: 'imageGrid',
      photoUrls: listing.photoUrls,
    });
  }

  const handleReviewsLinkClick = (e) => {
    e.preventDefault();
    openModal({
      type: 'reviewsIndex',
    })
  }

  return (
    <div className="listing-show-container">
      {listing ? (
        <>
          <div className="listing-show-heading">
            <div className="listing-show-title">
              {listing.title}
            </div>

            <div className="listing-show-subheading">
              <div className="subheading-left">
                <span><HiStar size={styles.size} style={styles} />{listing.avgRating} &middot;</span>
                <span onClick={handleReviewsLinkClick}>{reviewsCount(listing.numReviews)}</span>
                <span>&middot; </span>
                <span>{listing.city}, {listing.state}, {listing.country}</span>
              </div>
              <div className="subheading-right">
                <span><FiShare size={styles.size} style={styles} />Share</span>
                <span><FaRegHeart size={styles.size} style={styles} />Save</span>
              </div>
            </div>
          </div>

          <div className="listing-show-images-container" onClick={handleImageClick}>
            <img className="img-main" src={listing.photoUrls[0]} alt="listing-image" />
            <div className="other-img-container">
              {(listing.photoUrls.filter((photoUrl, index) => index !== 0).map((photoUrl, index) =>
                <img 
                  className="img-others" 
                  key={`${listingId}-${index}`} 
                  src={photoUrl} 
                  alt="listing-image" /> 
                )
              )}
            </div>
          </div>

          <div className="listing-show-info-and-reservation-container">
            <div className="listing-show-info">
              <div className="listing-host">
                <p>Entire {listing.propertyType} hosted by {listing.hostName}</p>
                <p>
                  <span>{listing.numGuest} {listing.numGuest > 1 ? "guests" : "guest"}</span> 
                  &middot; 
                  <span>{listing.numBeds > 1 ? '2 bedrooms' : '1 bedroom'}</span>
                  &middot;
                  <span>{listing.numBeds} {listing.numBeds > 1 ? "beds" : "bed"}</span>
                  &middot; 
                  <span>{listing.numBaths} {listing.numBaths > 1 ? "baths" : "bath"}</span>
                </p>
              </div> 

              <div className="listing-aircover">
                <img src={window.aircover} alt="aircover-icon" height={26}/>
                <p>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
              </div>
              
              <div className="listing-description">
                <p>{listing.description}</p>
              </div>

              <div className="listing-features">
                <span>What this place offers</span>
                <ul>
                  <li><HiWifi size={styles.size} style={styles} /> Wifi</li>
                  <li><BiTv size={styles.size} style={styles} /> TV</li>
                  <li><MdOutlineLocalLaundryService size={styles.size} style={styles} />Free washer/dryer -In unit</li>
                  <li><FaRegSnowflake size={styles.size} style={styles} /> Central AC unit</li>
                  <li><FiWind size={styles.size} style={styles} /> Central Heating unit</li>
                  <li><BiRestaurant size={styles.size} style={styles} /> Kitchen</li>
                  <li><RiAlarmWarningLine size={styles.size} style={styles} /> Smoke Alarm</li>
                  <li><RiCarLine size={styles.size} style={styles} /> Free parking on premises</li>
                </ul>
              </div>
            </div>

            <div className="listing-reservation-form">
              <ReservationForm 
                key={`${Math.random()}`} 
                listing={listing} 
                listingId={listingId} 
                numReviews={reviewsCount(listing.numReviews)}
                createReservation={createReservation} 
                currentUserId={currentUserId} 
                openModal={openModal} 
              />
            </div>
          </div>

          <ReviewsIndex 
            listingId={listingId} 
            currentUserId={currentUserId} 
            openModal={openModal} 
          />

          <ListingMap 
            key={`${Math.random()}`} 
            listing={selectedListing}
          />
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