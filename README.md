# YourBnB

- YourBnB, an AirBnB clone, is a full-stack, single-page page online marketplace application for lodging that allows users to look for accommodations and make reservations in specific locales. This application was developed using React for front-end and Redux for state management, Ruby on Rails for back-end and PostgresSQL for database management.

Check out the Live Site! --> [YourBnB](https://yourbnb.herokuapp.com/#/)

## Technologies, Libraries, APIs

- Front-End: React, Redux, jQuery, SCSS
- Back-End: Ruby on Rails, PostgresSQL, AWS S3 (Amazon Simple Storage Services)
- Google Maps Platform Maps and Places

## Features

### User Authentication

- Users are able to sign up, log in, and log out. Users can sign up for a new account by providing first name, last name, email, and password. Upon logging in, users will gain additional features such as make reservations, and provide reviews on listings.

* Sign up/Sign in modal appears when users attempt to do reservations/reviews without being logged in.

## ![](https://github.com/pa-dg/airbnb_clone/blob/master/app/assets/images/gifs/user-auth.gif)

---

### User Account

- Logged in users can view their personal Account Page which displays reviews made by user, name, email, and year of when account was created. User also has the ability to update their profile photo.

![](https://github.com/pa-dg/airbnb_clone/blob/master/app/assets/images/gifs/user-account.gif)

---

### Splash & Listing Page

- Users can view available listings, listing information, listing images on the app on the Splash Page. On click of the listing, users will be redirected to the listing show page which contains all information about the listing including Google Maps Location. Only logged in users can create reservations and reviews.

![](https://github.com/pa-dg/airbnb_clone/blob/master/app/assets/images/gifs/listings.gif)

---

### Reservations

- Logged in users can make reservations on a listing by providing check-in and check-out dates and number of guests. Users may view all their reservations and have the ability to cancel reservations on the Trips Page.

![](https://github.com/pa-dg/airbnb_clone/blob/master/app/assets/images/gifs/reservations.gif)

---

### Reviews

- Logged in users can create, update, and delete their reviews on a listing.

![](https://github.com/pa-dg/airbnb_clone/blob/master/app/assets/images/gifs/reviews.gif)

---

### Filter Listings

- Users can filter listings by price and/or by up to number of beds.

![](https://github.com/pa-dg/airbnb_clone/blob/master/app/assets/images/gifs/filters.gif)

---

### Responsive Web Design

![](https://github.com/pa-dg/airbnb_clone/blob/master/app/assets/images/gifs/web-responsive-1.gif)

![](https://github.com/pa-dg/airbnb_clone/blob/master/app/assets/images/gifs/web-responsive-2.gif)

---

## Future Implementations

- Search Listing by location, and dynamically display Google Maps with all available listings.
- Add User's wishlist page
