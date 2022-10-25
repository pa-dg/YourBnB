export const fetchReviews = (listingId) => {
  return $.ajax({
    url: `api/reviews`,
    method: "GET",
    data: { listing_id: listingId },
  });
};

export const fetchReview = (reviewId) => {
  return $.ajax({
    url: `api/reviews/${reviewId}`,
    method: "GET",
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
    url: `api/reviews/${review.id}`,
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
