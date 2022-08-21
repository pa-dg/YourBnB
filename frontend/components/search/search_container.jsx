import { connect } from "react-redux";
import SearchForm from './search_form';
import { withRouter } from "react-router-dom";


const mapStateToProps = (state) => {
  return {
    listings: Object.values(state.entities.listings),
    minPrice: state.ui.filters.minPrice,
    maxPrice: state.ui.filters.maxPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    udpateFilter: (filter, value) => dispatch(updateFilter(fiter, value)),
    clearFilter: () => dispatch(clearFilter(filter, value))
  }
};