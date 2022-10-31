export const reviewsCount = (numReviews) => {
  if (numReviews === 0) return "No review";
  if (numReviews === 1) return `${numReviews} review`;
  if (numReviews > 1) return `${numReviews} reviews`;
};
