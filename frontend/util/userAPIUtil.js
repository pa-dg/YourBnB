export const updateUserPhoto = (formData, userId) => {
  debugger;
  return $.ajax({
    url: `api/users/${userId}`,
    method: "PATCH",
    data: formData,
    contentType: false,
    processData: false,
  });
};
