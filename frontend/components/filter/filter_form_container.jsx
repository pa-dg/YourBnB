// houses the filter button
import { connect } from "react-redux";
import FilterForm from "./filter_form";
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    listings: Object.values(state.entities.listings),
    minPrice: state.ui.filters.minPrice,
    maxPrice: state.ui.filters.maxPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    udpateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    clearFilter: () => dispatch(clearFilter(filter, value)),
    closeModal: () => dispatch(closeModal()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);