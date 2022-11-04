export const RECEIVE_FILTER = "RECEIVE_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";

export const receiveFilter = (filter) => {
  return {
    type: RECEIVE_FILTER,
    filter,
  };
};

export const clearReceiveFilter = () => {
  return {
    type: CLEAR_FILTER,
  };
};

export const updateFilter = (filter) => (dispatch) => {
  return dispatch(receiveFilter(filter));
};

export const clearFilter = () => (dispatch) => {
  return dispatch(clearReceiveFilter());
};
