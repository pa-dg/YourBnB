export const fetchListings = () => {
  return $.ajax({
    url: `api/listings`,
    method: "GET",
  });
};

export const fetchListing = (id) => {
  return $.ajax({
    url: `api/listings/${id}`,
    method: "GET",
  });
};

export const createListing = (listingForm) => {
  return $.ajax({
    url: `api/listings`,
    method: "POST",
    data: listingForm,
    contentType: false,
    processData: false,
  });
};

//TO BE ADDED
// export const deleteListing = (listingId) => {
//   return $.ajax({
//     url: `api/listings/${listingId}`,
//     method: "DELETE",
//   });
// };
