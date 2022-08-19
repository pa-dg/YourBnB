import React from "react";
import Nav from "../nav/nav";
import FilterForm from '../filter/filter_form';
import ListingIndexContainer from "../listing/listing_index_container";

const Splash = () => {
  return (
    <div id="splash-container">
      <FilterForm />

      <div className="listing-index-container">
          <ListingIndexContainer />
      </div>
    </div>
  );
};

export default Splash;
