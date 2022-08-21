import { RECEIVE_FILTER, CLEAR_FILTER } from "../actions/filter_action";

const defaultFilters = Object.freeze({
  bounds: {},
  minPrice: 0,
  maxPrice: 600,
});

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FILTER:
      return Object.assign({}, state, { [action.filter]: action.value });
    case CLEAR_FILTER:
      return defaultFilters;
    default:
      return state;
  }
};

export default filtersReducer;
