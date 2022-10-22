export const fetchReviews = (listingId) => {
  return $.ajax({
    url: `api/reviews`,
    method: "GET",
    data: { listing_id: listingId },
  });
};

export const createReview = (review) => {
  return $.ajax({
    url: `api/reviews`,
    method: "POST",
    data: { review },
  });
};

export const updateReview = (review) => {
  return $.ajax({
    url: `api/reviews/${id}`,
    method: "PATCH",
    data: { review },
  });
};

export const deleteReview = (reviewId) => {
  return $.ajax({
    url: `api/reviews/${reviewId}`,
    method: "DELETE",
  });
};
