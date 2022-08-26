import React from 'react';
import Avatar from '@mui/material/Avatar';

const ReviewItem = ({ review }) => {
  const { updatedAt, reviewerFirstName, review: message } = review;
  const date = new Date(updatedAt);
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  
  return (
    <div className="review-item">
      <div className="review-item-heading">
        <div className="review-image">
          <Avatar
            alt={reviewerFirstName}
            src={"https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240"}
            sx={{ width: 40, height: 40 }}
          />
        </div>
        <div className="review-name-date">
          <h3 className="review-name">{reviewerFirstName}</h3>
          <div className="review-date">{month} {year}</div>
        </div>
      </div>

      <div className="review-message">{message}</div>
    </div>
  );
};

export default ReviewItem;