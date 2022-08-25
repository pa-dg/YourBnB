import React, { useState } from "react";
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const Filter = () => {
  const openModal = (formType) => {
    return e => {
      e.preventDefault();
      openModal(formType)
    };
  };

  return (
    <div className="filter-form-container">
      
      <button id="filter-icons"><img src={window.lakeIcon} alt="lake-icon" />
        <span>Lakefront</span>
      </button>
      <button id="filter-icons"><img src={window.beachIcon} alt="beach-icon" />
        <span>Beach</span>
      </button>
      <button id="filter-icons"><img src={window.cabinIcon} alt="cabin-icon" />
        <span>Cabin</span>
      </button>
      <button id="filter-icons"><img src={window.campingIcon} alt="camping-icon" />
        <span>Camping</span>
      </button>
      <button id="filter-icons"><img src={window.islandIcon} alt="island-icon" />
        <span>Island</span>
      </button>
      <button id="filter-icons"><img src={window.arcticIcon} alt="arctic-icon" />
        <span>Arctic</span>
      </button>
      <button id="filter-icons"><img src={window.treehouseIcon} alt="treehouse-icon" />
        <span>Treehouse</span>
      </button>
      <button id="filter-icons"><img src={window.surfboardIcon} alt="surfboard-icon" />
        <span>Surf Board</span>
      </button>
      <button id="filter-icons"><img src={window.nationalparkIcon} alt="nationalpark-icon" />
        <span>National Park</span>
      </button>
      <button id="filter-icons"><img src={window.swimmingpoolIcon} alt="swimmingpool-icon" />
        <span>Swimming Pool</span>
      </button>
      <button id="filter-icons"><img src={window.iconiccityIcon} alt="iconiccity-icon" />
        <span>Iconic City</span>
      </button>
      <button id="filter-icons"><img src={window.barnIcon} alt="barn-icon" />
        <span>Barn</span>
      </button>
      <button id="filter-icons"><img src={window.caveIcon} alt="cave-icon" />
        <span>Cave</span>
      </button>
      
      <button id="filter-modal-button" onClick={openModal('filter')}>
        <span><img src={window.sliderIcon} alt="slider-icon" /></span>
        <div id="button-text">Filter</div>
      </button>


    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    // listings: Object.values(state.entities.listings)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: formType => dispatch(openModal(formType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
