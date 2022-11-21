import React from "react";
import { connect } from "react-redux";
import { updateFilter } from "../../actions/filterActions";
import SearchForm from './SearchForm';

const mapStateToProps = (state) => {
  return {
    city: state.ui.filters.city,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateFilter: (filter) => dispatch(updateFilter(filter)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);