import React, { useEffect, useState } from "react";
import ListingIndexItem from './listing_index_item';
import CircularProgress from '@mui/material/CircularProgress';

const ListingIndex = ({ listings, fetchListings }) => {

  // const [allListings, setAllListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [filteredListings, setFilteredListings] = useState(listings);
  
  // useEffect(() => {
    // filter based on minPrice, maxPrice, etc..
    // setFilteredListings
  // }, [filters]) // from msp (ui slice of state)
  
  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      const response = await fetchListings();
      // setAllListings(Object.values(response.listings));
      setIsLoading(false);
    };
    fetchData();
  }, []);

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

  return (
    <div className="listing-index-container">
      {isLoading ? <CircularProgress color="secondary" />
        :  <> {listings.map((listing, index) => (
            <ListingIndexItem 
              key={index} 
              listing={listing} 
            />
          ))}
          </>
      }                
    </div>
    
  );
};

export default ListingIndex;
