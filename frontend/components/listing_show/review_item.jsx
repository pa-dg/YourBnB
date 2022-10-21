import React from 'react';
import Avatar from '@mui/material/Avatar';
import dateParser from '../util/dateParser';

const ReviewItem = ({ review }) => {
  const { updatedAt, reviewerName, message } = review;

  const date = dateParser(updatedAt).split(' ');
  const month = date[0];
  const year = date[2];
  
  return (
    <div className="review-item">
      <div className="review-item-heading">
        <div className="review-image">
          <Avatar
            alt={reviewerName}
            src={"https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240"}
            sx={{ width: 40, height: 40 }}
          />
        </div>
        <div className="review-name-date">
          <h3 className="review-name">{reviewerName}</h3>
          <span className="review-date">{month} {year}</span>
        </div>
      </div>

      <div className="review-message">{message}</div>
    </div>
  );
};

export default ReviewItem;