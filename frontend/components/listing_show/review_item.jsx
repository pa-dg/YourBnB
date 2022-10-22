import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { dateParser } from '../util/dateParser';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

const ReviewItem = ({ currentUserId, review, openModal }) => {
  const { id, reviewerId, updatedAt, reviewerName, message } = review;
  
  const date = dateParser(updatedAt).split(' ');
  const month = date[0], year = date[2]

  const styles = {
    size: 15,
    paddingRight: 7,
    cursor: 'pointer',
  };

  console.log('#', review)
  
  const handleDelete = (e) => {
    e.preventDefault();
    openModal({
      type: 'deleteReview',
      reviewId: id,
    });
  };

  $(window).on('unload', function() {
   $(window).scrollTop(0);
  });
  
  return (
    <div className="review-item">
      <div className="review-item-heading">
        <div className="heading-left">
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

        {currentUserId && currentUserId === reviewerId ? (
          <div className="heading-right">
            <AiOutlineEdit id="review-update-button" size={styles.size} style={styles} />
            <AiOutlineDelete id="review-delete-button" size={styles.size} style={styles} onClick={handleDelete} />
          </div>
        ) : null }
      </div>

      <div className="review-message">{message}</div>
    </div>
  );
};

export default ReviewItem;