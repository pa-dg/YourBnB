import { RECEIVE_FILTER, CLEAR_FILTER } from "../actions/filterActions";

const defaultFilters = Object.freeze({
  city: "New York",
  minPrice: 0,
  maxPrice: 500,
  numBeds: 4,
});

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FILTER:
      return Object.assign({}, state, { ...action.filter });
    case CLEAR_FILTER:
      return Object.assign({}, state, defaultFilters);
    default:
      return state;
  }
};

export default filtersReducer;
