import React, { useState, useEffect } from "react";
import { BsFillStarFill } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';

const ListingShow = props => {
  const [listing, setListing] = useState({ 
    title: '', 
    description: '',
    rating: '', 
    city: '',
    state: '', 
    country: '',
    price: '',
    additionalFees: '',
    propertyType: '',
    numGuest: '',
    numBeds: '',
    numBaths: '',
  });

  const { listingId, selectedListing, fetchListing } = props;

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

  const {
    title,
    description,
    rating, 
    city,
    state, 
    country,
    price,
    additionalFees,
    propertyType,
    numGuest,
    numBeds,
    numBaths,
  } = listing
  
  // console.log(`${host}`)

  return (
    <div className="listing-show-container">
      <div className="listing-show-heading">
        <div className="listing-show-title">
          <h1>{title}</h1>
        </div>

        <div className="listing-show-subheading">
          <div className="listing-show-subheading-left">
            <h3><BsFillStarFill id="star" /> 5.0 {city}, {state}, {country}</h3>
          </div>
          <div className="listing-show-subheading-right">
            <h3><FiShare id="share" /> Share <FaRegHeart id="heart" /> Save</h3>
          </div>
        </div>
      </div>

      <div className="listing-show-images-container">
        <div className="listing-show-img-main">
          <img id="test" src={window.test} alt="test" />
        </div>
        <div className="listing-show-img-others">
          <div>
            <img id="test" src={window.test} alt="test" />
          </div>
          <div>
            <img id="test" src={window.test} alt="test" />
          </div>
          <div>
            <img id="test" src={window.test} alt="test" />
          </div>
          <div>
            <img id="test" src={window.test} alt="test" />
          </div>
        </div>
      </div>

      <div className="listing-show-info-and-reservation-container">
        <div>
          <h1>Entire {propertyType} hosted by  </h1>
        </div>
      </div>

      <div className="listing-show-reviews-container">
        <h1>REVIEWS GO HERE</h1>
      </div>

      <div id="map-container">
        <h1>Where you'll be</h1>
      </div>

    </div>
  );
}

export default ListingShow;