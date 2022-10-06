import React, { useEffect, useState } from "react";
import ListingIndexItem from './listing_index_item';
import CircularProgress from '@mui/material/CircularProgress';

const ListingIndex = ({ listings, fetchListings }) => {

  const [allListings, setAllListings] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetchListings();
      setAllListings(response);
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
    <>
      {isLoading ? <CircularProgress color="secondary" />
        :  <> {listings.map((listing, index) => (
            <ListingIndexItem 
              key={index} 
              listing={listing} 
            />
          ))}
          </>
      }                
    </>
    
  );
};

export default ListingIndex;
