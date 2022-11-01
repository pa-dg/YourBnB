import { RECEIVE_FILTER } from "../actions/filterActions";

const defaultFilters = Object.freeze({
  minPrice: 0,
  maxPrice: 500,
  numBeds: 5,
});

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FILTER:
      return Object.assign({}, state, { [action.filter]: action.value });
    default:
      return state;
  }
};

export default filtersReducer;
