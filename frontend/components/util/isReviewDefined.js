export const isReviewDefined = (reviewObject) => {
  return (
    reviewObject.accuracy &&
    reviewObject.checkIn &&
    reviewObject.cleanliness &&
    reviewObject.communication &&
    reviewObject.location &&
    reviewObject.message &&
    reviewObject.value
  );
};
