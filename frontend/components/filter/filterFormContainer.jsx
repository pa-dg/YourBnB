import React from "react";
import { connect } from "react-redux";
import { updateFilter as updateFilterAction } from "../../actions/filterActions";
import { closeModal as exitModal } from "../../actions/modal_actions";
import FilterForm from './FilterForm';

const mapStateToProps = (state) => {
  return {
    listings: Object.values(state.entities.listings),
    minPrice: state.ui.filters.minPrice,
    maxPrice: state.ui.filters.maxPrice,
    numBeds: state.ui.filters.numBeds,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilterAction(filter, value)),
    closeModal: () => dispatch(exitModal()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);