import React from "react";
import Filter from '../filter/filter';
import ListingIndexContainer from "../listing/listing_index_container";

const Splash = () => {
  return (
    <div id="splash-container">
      <Filter />
      <ListingIndexContainer />
    </div>
  );
};

export default Splash;
