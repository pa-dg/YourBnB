import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import { dateParser } from "../util/dateParser";

const UserAccount = ({ user: { currentUserId, firstName, email, createdAt, updateUserPhoto } }) => {
  
  const [profilePhoto, setProfilePhoto] = useState(null);

  console.log('func', updateUserPhoto)
  
  const accountCreationDate = dateParser(createdAt);
  const year = accountCreationDate.split(' ')[2];
  
  const handleFile = (e) => {
    e.preventDefault();
    setProfilePhoto(e.currentTarget.files[0]);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[photo]', profilePhoto)
    updateUserPhoto(formData, currentUserId)
  }

  console.log('#', profilePhoto)
  
  return (
    <div className="user-account-container">

      <div className="user-photo">
        <Avatar
          className="user-avatar"
          alt={firstName}
          src={"https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240"}
        />    

        <form onSubmit={handleSubmit}>
          <label htmlFor="user-photo">Select your profile photo:</label>
          <input 
            type="file" 
            name="profilePhoto"
            onChange={handleFile}
          />
          <input 
            type="submit" 
            value="Submit"
          />
        </form>
      </div>

      <div className="user-profile">
        <p className="user-name">Hi, I'm {firstName}</p>
        <p className="user-joined">Joined in {year}</p>
        <p className="user-email">Email: {email}</p>
      </div>
    </div>
  )
}

export default UserAccount;