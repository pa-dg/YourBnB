import React from "react";
import Nav from "../nav/nav";
import Filter from '../filter/filter';
import ListingIndexContainer from "../listing/listing_index_container";

const Splash = () => {
  return (
    <div id="splash-container">
      <Filter />

      <div className="listing-index-container">
          <ListingIndexContainer />
      </div>
    </div>
  );
};

export default Splash;
