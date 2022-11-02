export const updateUserPhoto = (formData, userId) => {
  return $.ajax({
    url: `api/users/${userId}`,
    method: "PATCH",
    data: formData,
    contentType: false,
    processData: false,
  });
};
