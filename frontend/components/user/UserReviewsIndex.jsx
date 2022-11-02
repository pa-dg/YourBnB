import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { dateParser } from '../util/dateParser';
import ImageSlider from '../listing/image_slider';

const UserReviewsIndex = ({ review }) => {
  const { message, listing_id, updated_at } = review;

  // useEffect(() => {
  //   debugger
  //   if (!showListing) {
  //     const fetchData = async () => {
  //       const response = await fetchListing((review.listing_id));
  //       console.log('response', response)
  //       setShowListing(response.listing);
  //     }
  //   fetchData();
  //   };
  //   if (showListing) {
  //     setShowListing(showListing);
  //   }
  // }, []);

  // useEffect(() => {
  //   debugger
  //   fetchListing(review.listing_id)
  //     .then((response) => console.log(response))
  // }, [])
  
  return (
    <div className="user-reviews-item-container">
      {review && (
        <>
          <div className="user-review-message">
            <p>Review:</p>
            <p>{message}</p>
          </div>
          <div className="user-review-date">
            <p>{dateParser(updated_at)}</p>
          </div>
            {/* <div className="reservation-item-img-container">
              <ImageSlider photoUrls={listing.photoUrls} />
            </div> */}
        </>
      )}
    </div>
  );
};


export default (UserReviewsIndex);