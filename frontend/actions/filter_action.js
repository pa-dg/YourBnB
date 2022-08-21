import { fetchListings } from "./listing_actions";

export const RECEIVE_FILTER = "RECEIVE_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";

export const receiveFilter = (filter, value) => {
  return {
    type: "RECEIVIE_FILTER",
    filter,
    value,
  };
};

export const clearFilter = () => {
  return {
    type: "CLEAR_FILTER",
  };
};

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(receiveFilter(filter, value));
  return fetchListings(getState().ui.filters)(dispatch);
};
