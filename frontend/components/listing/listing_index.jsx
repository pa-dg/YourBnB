import React, { useEffect, useState } from "react";
import ListingIndexItem from './listing_index_item';
import LoadingContainer from "../util/LoadingContainer";

const ListingIndex = ({ listings, fetchListings }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      await fetchListings();
      setIsLoading(!isLoading);
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
      {isLoading ? <LoadingContainer />
        : (
          <>
            <div className="listings-count">
                {listings.length} Yourbnb stays
            </div>

            <div className="listing-index-container"> 
              {listings.map((listing, index) => (
                <ListingIndexItem 
                  key={index} 
                  listing={listing} 
                />
              ))}
            </div>
          </>
        )
      }                
    </>
    
  );
};

export default ListingIndex;
