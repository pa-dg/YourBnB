import * as userAPIUtil from "../util/userAPIUtil";

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user,
  };
};

export const updateUserPhoto = (formData, userId) => (dispatch) => {
  return userAPIUtil
    .updateUserPhoto(formData, userId)
    .then((user) => dispatch(receiveUser(user)));
};
