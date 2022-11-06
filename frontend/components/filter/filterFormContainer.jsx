import React from "react";
import { connect } from "react-redux";
import { updateFilter, clearFilter } from '../../actions/filterActions';
import { closeModal } from "../../actions/modal_actions";
import FilterForm from './FilterForm';

const mapStateToProps = (state) => {
  return {
    minPrice: state.ui.filters.minPrice,
    maxPrice: state.ui.filters.maxPrice,
    numBeds: state.ui.filters.numBeds,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateFilter: (filter) => dispatch(updateFilter(filter)),
    closeModal: () => dispatch(closeModal()),
    clearFilter: () => dispatch(clearFilter()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);