import React, { useState } from "react";
import FilterFormContainer from './filter_form_container';

const FilterForm = () => {
  return (
    <div className="filter-container">
      
      <div id="filter-icons"><img src={window.lakeIcon} alt="lake-icon" />
        <span>Lakefront</span>
      </div>
      <div id="filter-icons"><img src={window.beachIcon} alt="beach-icon" />
        <span>Beach</span>
      </div>
      <div id="filter-icons"><img src={window.cabinIcon} alt="cabin-icon" />
        <span>Cabin</span>
      </div>
      <div id="filter-icons"><img src={window.campingIcon} alt="camping-icon" />
        <span>Camping</span>
      </div>
      <div id="filter-icons"><img src={window.islandIcon} alt="island-icon" />
        <span>Island</span>
      </div>
      <div id="filter-icons"><img src={window.arcticIcon} alt="arctic-icon" />
        <span>Arctic</span>
      </div>
      <div id="filter-icons"><img src={window.treehouseIcon} alt="treehouse-icon" />
        <span>Treehouse</span>
      </div>
      <div id="filter-icons"><img src={window.surfboardIcon} alt="surfboard-icon" />
        <span>Surf Board</span>
      </div>
      <div id="filter-icons"><img src={window.nationalparkIcon} alt="nationalpark-icon" />
        <span>National Park</span>
      </div>
      <div id="filter-icons"><img src={window.swimmingpoolIcon} alt="swimmingpool-icon" />
        <span>Swimming Pool</span>
      </div>
      <div id="filter-icons"><img src={window.iconiccityIcon} alt="iconiccity-icon" />
        <span>Iconic City</span>
      </div>
      <div id="filter-icons"><img src={window.barnIcon} alt="barn-icon" />
        <span>Barn</span>
      </div>
      <div id="filter-icons"><img src={window.caveIcon} alt="cave-icon" />
        <span>Cave</span>
      </div>
      
      <button id="filter-modal-button">
         {/* <i className="fas fa-sliders-h fa-2x"></i> */}
        <span><img src={window.sliderIcon} alt="slider-icon" /></span>
        <span>Filters</span>
      </button>

    </div>
  );
};

export default FilterForm;