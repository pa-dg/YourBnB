import React, { useEffect, useState } from "react";
import ListingIndexItem from './listing_index_item';
import CircularProgress from '@mui/material/CircularProgress';

const ListingIndex = ({ fetchListings }) => {

  const [allListings, setAllListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      const response = await fetchListings();
      setAllListings(Object.values(response.listings));
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
        :  <> {allListings.map((listing, index) => (
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
