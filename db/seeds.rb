# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Listing.destroy_all
Reservation.destroy_all
Review.destroy_all

# Users

demo = User.create!(
  first_name: 'Demo',
  last_name: 'User',
  email: 'demouser@yourbnb.com',
  password: 'password',
)

andrea = User.create!(
  first_name: 'Andrea',
  last_name: 'de Guzman',
  email: 'andrea@yourbnb.com',
  password: 'password'
)

andy = User.create!(
  first_name: 'Andy',
  last_name: 'Liu',
  email: 'cloudy@yourbnb.com',
  password: 'password'
)

anthony = User.create!(
  first_name: 'Anthony',
  last_name: 'Chao',
  email: 'anthony@yourbnb.com',
  password: 'password'
)

michael = User.create!(
  first_name: 'Michael',
  last_name: 'Cen',
  email: 'michael@yourbnb.com',
  password: 'password'
)

goju = User.create!(
  first_name: 'Goju',
  last_name: 'Satoru',
  email: 'goju@yourbnb.com',
  password: 'password'
)

# Listings: location: New York City

l1 = Listing.create!(
  host_id: andrea.id,
  title: "SoHo Apt. in Historic Townhouse - Private Entrance",
  description: "Historic townhouse building, stylishly decorated 1 BR in chic Soho. Views of the park, steps away from fabulous restaurants, ideally located away from the fray but close to amazing shopping, dining & exploring NYC.",
  lat: 40.725088,
  lng: -74.000605,
  street: "115 Wooster St",
  city: "New York",
  state: "NY",
  country: "United States",
  zip_code: 10012,
  price: 340.00,
  price_currency: "USD" ,
  property_type: "Townhouse",
  price_per_night: "per night",
  additional_fees: 75,
  num_guest: 2,
  num_beds: 1,
  num_baths: 1
)

l2 = Listing.create!(
  host_id: andy.id,
  title: "Untitled at Freeman - Tower Balcony Apartment 1401",
  description: "Charming Apartment with a balcony located in the heart of Lower East Side of Manhattan.",
  lat: 40.727517781962,
  lng: -73.98836964777286,
  street: "270 E 6th St",
  city: "New York",
  state: "NY",
  country: "United States",
  zip_code: 10003,
  price: 270.00,
  price_currency: "USD" ,
  property_type: "Condominium",
  price_per_night: "per night",
  additional_fees: 70,
  num_guest: 4,
  num_beds: 2,
  num_baths: 2
)

l3 = Listing.create!(
  host_id: anthony.id,
  title: "Sonder Battery Park - Studio Apartment",
  description: "From the moment you see the waterfront from the roof, you\’ll know you made the right choice. Your Sonder comes with its own kitchenette and dining nook. There\’s also a (seasonal) rooftop pool to go along with that waterfront view we mentioned, a fitness center, a golf simulator, and a co-working space.",
  lat: 40.708398735680966,
  lng: -74.00694870116126,  
  street: "270 E 6th St",
  city: "New York",
  state: "NY",
  country: "United States",
  zip_code: 10003,
  price: 270.00,
  price_currency: "USD" ,
  property_type: "Studio",
  price_per_night: "per night",
  additional_fees: 60,
  num_guest: 2,
  num_beds: 1,
  num_baths: 1
)

l4 = Listing.create!(
  host_id: michael.id,
  title: "Beautiful view overlooking Central Park - Apartment",
  description: "Two bedroom apartment overlooking Central Park. Right in the heart of NYC, minutes from Times Square. This loft is located right near Central Park, Carnegie Hall and most major tourist attraction. It''s the perfect place to enjoy your vacation luxury style.",
  lat: 40.769180,
  lng: -73.984892,  
  street: "270 E 6th St",
  city: "New York",
  state: "NY",
  country: "United States",
  zip_code: 10003,
  price: 300.00,
  price_currency: "USD" ,
  property_type: "Apartment",
  price_per_night: "per night",
  additional_fees: 65,
  num_guest: 4,
  num_beds: 2,
  num_baths: 2
)

l5 = Listing.create!(
  host_id: andrea.id,
  title: "Beautiful view overlooking Central Park - Apartment",
  description: "Good-sized studio apartment in near Union Square, Irving Plaza, and Gramercy Park. The apartment has a private entrance and maintained well",
  lat: 40.735625340903795,   
  lng: -73.99166452444395,  
  street: "55 E 14th St",
  city: "New York",
  state: "NY",
  country: "United States",
  zip_code: 10003,
  price: 300.00,
  price_currency: "USD" ,
  property_type: "Studio",
  price_per_night: "per night",
  additional_fees: 50,
  num_guest: 2,
  num_beds: 1,
  num_baths: 1
)

l6 = Listing.create!(
  host_id: andy.id,
  title: "Amazing view near Empire State Building - Apartment",
  description: "Good-sized big modern apartment near Empire State Building and Madison Square Garden area. The apartment is always well maintained and cleaned.",
  lat: 40.74648489082465,
  lng: -73.98490519606982,  
  street: "11 E 31st St",
  city: "New York",
  state: "NY",
  country: "United States",
  zip_code: 10016,
  price: 345.00,
  price_currency: "USD" ,
  property_type: "Apartment",
  price_per_night: "per night",
  additional_fees: 70,
  num_guest: 4,
  num_beds: 2,
  num_baths: 2
)

l7 = Listing.create!(
  host_id: michael.id,
  title: "Walking distance near Madison Square Garden - Apartment",
  description: "Good-sized big modern apartment near Empire State Building and Madison Square Garden area. The apartment is always well maintained and cleaned.",
  lat: 40.741624,
  lng: -73.985098,  
  street: "345 Park Ave S", 
  city: "New York",
  state: "NY",
  country: "United States",
  zip_code: 10010,
  price: 285.00,
  price_currency: "USD" ,
  property_type: "Apartment",
  price_per_night: "per night",
  additional_fees: 50,
  num_guest: 3,
  num_beds: 2,
  num_baths: 2
)

l8 = Listing.create!(
  host_id: andrea.id,
  title: "Located in KoreaTown and walking distance near Madison Square Garden - Studio",
  description: "Great and amazing interior modern apartment near Empire State Building and Madison Square Garden area. The apartment is always well maintained and cleaned.",
  lat: 40.74922527343285,
  lng: -73.98458720628709,  
  street: "366 5th Ave",   
  city: "New York",
  state: "NY",
  country: "United States",
  zip_code: 10001,
  price: 160.00,
  price_currency: "USD" ,
  property_type: "Studio",
  price_per_night: "per night",
  additional_fees: 60,
  num_guest: 2,
  num_beds: 1,
  num_baths: 1
)

l9 = Listing.create!(
  host_id: andy.id,
  title: "Located in KoreaTown and walking distance near Madison Square Garden - Studio",
  description: "Great and amazing interior modern apartment near Empire State Building and Madison Square Garden area. The apartment is always well maintained and cleaned.",
  lat: 40.74809162413431,
  lng: -73.98539114585299,  
  street: "28 W 33rd St",   
  city: "New York",
  state: "NY",
  country: "United States",
  zip_code: 10001,
  price: 160.00,
  price_currency: "USD" ,
  property_type: "Studio",
  price_per_night: "per night",
  additional_fees: 50,
  num_guest: 2,
  num_beds: 1,
  num_baths: 1
)

l10 = Listing.create!(
  host_id: michael.id,
  title: "Located in Midtown and in front of Bryant Park - Apartment",
  description: "Love being in the city? This listing is the perfect fit for you, located in front of Bryant Park and  near Empire State Building and Madison Square Garden area. The apartment is always well maintained and cleaned.",
  lat: 40.756716453871285,
  lng: -73.98657307231096,  
  street: "25 W 39th St", 
  city: "New York",
  state: "NY",
  country: "United States",
  zip_code: 10018,
  price: 350.00,
  price_currency: "USD" ,
  property_type: "Apartment",
  price_per_night: "per night",
  additional_fees: 50,
  num_guest: 6,
  num_beds: 4,
  num_baths: 2
)


# AWS S3 Photos
demo_photo = URI.open('https://yourbnb-seeds.s3.amazonaws.com/profile-photo/demo.jpeg')
demo.profile_photo.attach(io: demo_photo, filename: "demo.jpeg")

andrea_photo = URI.open('https://yourbnb-seeds.s3.amazonaws.com/profile-photo/andrea.jpeg')
andrea.profile_photo.attach(io: andrea_photo, filename: "andrea.jpeg")

andy_photo = URI.open('https://yourbnb-seeds.s3.amazonaws.com/profile-photo/andy.jpeg')
andy.profile_photo.attach(io: andy_photo, filename: "andy.jpeg")

anthony_photo = URI.open('https://yourbnb-seeds.s3.amazonaws.com/profile-photo/anthony.jpg')
anthony.profile_photo.attach(io: anthony_photo, filename: "anthony.jpg")

michael_photo = URI.open('https://yourbnb-seeds.s3.amazonaws.com/profile-photo/michael.jpg')
michael.profile_photo.attach(io: michael_photo, filename: "michael.jpg")

goju_photo = URI.open('https://yourbnb-seeds.s3.amazonaws.com/profile-photo/goju.jpeg')
goju.profile_photo.attach(io: goju_photo, filename: "goju.jpeg")


l1_img01 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing01/l1_img_001.png')
l1_img02 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing01/l1_img_002.png')
l1_img03 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing01/l1_img_003.jpg')
l1_img04 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing01/l1_img_004.png')
l1_img05 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing01/l1_img_005.png')

l1.photos.attach(io: l1_img01, filename: "img_001.png")
l1.photos.attach(io: l1_img02, filename: "img_002.png")
l1.photos.attach(io: l1_img03, filename: "img_003.png")
l1.photos.attach(io: l1_img04, filename: "img_004.png")
l1.photos.attach(io: l1_img05, filename: "img_005.png")

l2_img01 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing02/l2_img_001.png')
l2_img02 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing02/l2_img_002.png')
l2_img03 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing02/l2_img_003.png')
l2_img04 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing02/l2_img_004.png')
l2_img05 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing02/l2_img_005.png')

l2.photos.attach(io: l2_img01, filename: "img_001.png")
l2.photos.attach(io: l2_img02, filename: "img_002.png")
l2.photos.attach(io: l2_img03, filename: "img_003.png")
l2.photos.attach(io: l2_img04, filename: "img_004.png")
l2.photos.attach(io: l2_img05, filename: "img_005.png")

l3_img01 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing03/l3_img_001.webp')
l3_img02 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing03/l3_img_002.webp')
l3_img03 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing03/l3_img_003.webp')
l3_img04 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing03/l3_img_004.webp')
l3_img05 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing03/l3_img_005.webp')

l3.photos.attach(io: l3_img01, filename: "img_001.png")
l3.photos.attach(io: l3_img02, filename: "img_002.png")
l3.photos.attach(io: l3_img03, filename: "img_003.png")
l3.photos.attach(io: l3_img04, filename: "img_004.png")
l3.photos.attach(io: l3_img05, filename: "img_005.png")

l4_img01 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing04/l4_img_001.webp')
l4_img02 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing04/l4_img_002.webp')
l4_img03 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing04/l4_img_003.webp')
l4_img04 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing04/l4_img_004.webp')
l4_img05 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing04/l4_img_005.webp')

l4.photos.attach(io: l4_img01, filename: "img_001.png")
l4.photos.attach(io: l4_img02, filename: "img_002.png")
l4.photos.attach(io: l4_img03, filename: "img_003.png")
l4.photos.attach(io: l4_img04, filename: "img_004.png")
l4.photos.attach(io: l4_img05, filename: "img_005.png")


l5_img01 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing05/l5_img01.jpg')
l5_img02 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing05/l5_img02.jpg')
l5_img03 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing05/l5_img03.jpg')
l5_img04 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing05/l5_img04.jpg')
l5_img05 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing05/l5_img05.jpeg')

l5.photos.attach(io: l5_img01, filename: "l5_img01.jpg")
l5.photos.attach(io: l5_img02, filename: "l5_img02.jpeg")
l5.photos.attach(io: l5_img03, filename: "l5_img03.jpg")
l5.photos.attach(io: l5_img04, filename: "l5_img04.jpg")
l5.photos.attach(io: l5_img05, filename: "l5_img05.jpeg")



l6_img01 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing06/l6_img01.jpg')
l6_img02 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing06/l6_img02.jpeg')
l6_img03 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing06/l6_img03.jpg')
l6_img04 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing06/l6_img04.jpg')
l6_img05 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing06/l6_img05.jpg')

l6.photos.attach(io: l6_img01, filename: "l6_img01.jpg")
l6.photos.attach(io: l6_img02, filename: "l6_img02.jpeg")
l6.photos.attach(io: l6_img03, filename: "l6_img03.jpg")
l6.photos.attach(io: l6_img04, filename: "l6_img04.jpg")
l6.photos.attach(io: l6_img05, filename: "l6_img05.jpg")


l7_img01 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing07/l7_img01.jpg')
l7_img02 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing07/l7_img02.webp')
l7_img03 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing07/l7_img03.jpg')
l7_img04 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing07/l7_img04.jpeg')
l7_img05 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing07/l7_img05.jpg')

l7.photos.attach(io: l7_img01, filename: "l7_img01.jpg")
l7.photos.attach(io: l7_img02, filename: "l7_img02.webp")
l7.photos.attach(io: l7_img03, filename: "l7_img03.jpg")
l7.photos.attach(io: l7_img04, filename: "l7_img04.jpeg")
l7.photos.attach(io: l7_img05, filename: "l7_img05.jpg")


l8_img01 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing08/l8_img01.jpg')
l8_img02 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing08/l8_img02.jpg')
l8_img03 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing08/l8_img03.jpeg')
l8_img04 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing08/l8_img04.jpeg')
l8_img05 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing08/l8_img05.jpeg')

l8.photos.attach(io: l8_img01, filename: "l8_img01.jpg")
l8.photos.attach(io: l8_img02, filename: "l8_img02.jpg")
l8.photos.attach(io: l8_img03, filename: "l8_img03.jpeg")
l8.photos.attach(io: l8_img04, filename: "l8_img04.jpeg")
l8.photos.attach(io: l8_img05, filename: "l8_img05.jpeg")


l9_img01 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing09/l9_img01.jpg')
l9_img02 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing09/l9_img02.jpg')
l9_img03 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing09/l9_img03.jpeg')
l9_img04 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing09/l9_img04.jpg')
l9_img05 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing09/l9_img05.jpg')

l9.photos.attach(io: l9_img01, filename: "l9_img01.jpg")
l9.photos.attach(io: l9_img02, filename: "l9_img02.jpg")
l9.photos.attach(io: l9_img03, filename: "l9_img03.jpeg")
l9.photos.attach(io: l9_img04, filename: "l9_img04.jpg")
l9.photos.attach(io: l9_img05, filename: "l9_img05.jpg")


l10_img01 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing10/l10_img01.jpg')
l10_img02 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing10/l10_img02.webp')
l10_img03 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing10/l10_img03.jpeg')
l10_img04 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing10/l10_img04.jpeg')
l10_img05 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing10/l10_img05.jpg')

l10.photos.attach(io: l10_img01, filename: "l10_img01.jpg")
l10.photos.attach(io: l10_img02, filename: "l10_img02.webp")
l10.photos.attach(io: l10_img03, filename: "l10_img03.jpeg")
l10.photos.attach(io: l10_img04, filename: "l10_img04.jpeg")
l10.photos.attach(io: l10_img05, filename: "l10_img05.jpg")



#TO REMOVE: will not need this anymore
# Reservations
# res1 = Reservation.create!(
#   user_id: andrea.id, 
#   listing_id: l3.id, 
#   check_in_date: Date.new(2022,8,27), 
#   check_out_date: Date.new(2022,9,2), 
#   num_guests: 2, 
#   # payment: 1890.00, 
#   price: 270.00
# )

# res2 = Reservation.create!(
#   user_id: andy.id, 
#   listing_id: l5.id, 
#   check_in_date: Date.new(2022,8,29), 
#   check_out_date: Date.new(2022,9,5), 
#   num_guests: 2, 
#   # payment: 1890.00, 
#   price: 300.00
# )

# res3 = Reservation.create!(
#   user_id: demo.id, 
#   listing_id: l6.id, 
#   check_in_date: Date.new(2022,8,29), 
#   check_out_date: Date.new(2022,9,3), 
#   num_guests: 2, 
#   # payment: 1890.00, 
#   price: 345.00
# )

# res4 = Reservation.create!(
#   user_id: demo.id, 
#   listing_id: l5.id, 
#   check_in_date: Date.new(2022,9,5), 
#   check_out_date: Date.new(2022,9,10), 
#   num_guests: 2, 
#   # payment: 1890.00, 
#   price: 300.00
# )


#Reviews
rev1 = Review.create!(
  reviewer_id: andrea.id,
  listing_id: l3.id,
  message: "The apartment was very nice, and we enjoyed our stay very much. Check in was smooth and Anthony communicated with us promptly. The air conditioning worked well, but it was difficult to figure it out without instructions. Finally, the bathroom was spacious and lovely. Will definitely come back to stay here again.",
  cleanliness: 5,
  accuracy: 4,
  communication: 5,
  check_in: 5,
  value: 4,
  location: 4,
)

rev2 = Review.create!(
  reviewer_id: andy.id,
  listing_id: l1.id,
  message: "The apartment was very nice, and we enjoyed our stay very much. Will definitely come back to stay here again.",
  cleanliness: 5,
  accuracy: 3,
  communication: 5,
  check_in: 5,
  value: 3,
  location: 5,
)

rev3 = Review.create!(
  reviewer_id: andrea.id,
  listing_id: l5.id,
  message: "The apartment was very clean. We enjoyed our stay.",
  cleanliness: 5,
  accuracy: 4,
  communication: 4,
  check_in: 5,
  value: 4,
  location: 5,
)

rev4 = Review.create!(
  reviewer_id: anthony.id,
  listing_id: l5.id,
  message: "Check in was smooth and the host communicated with us promptly and very accomodating.",
  cleanliness: 5,
  accuracy: 4,
  communication: 5,
  check_in: 5,
  value: 4,
  location: 5,
)

rev5 = Review.create!(
  reviewer_id: andy.id,
  listing_id: l5.id,
  message: "Amazing location and the place was very clean. We enjoyed our stay. Thank you so much!",
  cleanliness: 5,
  accuracy: 4,
  communication: 4,
  check_in: 5,
  value: 4,
  location: 5,
)

rev6 = Review.create!(
  reviewer_id: andrea.id,
  listing_id: l6.id,
  message: "Location is great! Very easy check in, we were able to drop off our luggage before check in, which was great. Room perfect for 2 people, very clean, and comfy!",
  cleanliness: 5,
  accuracy: 4,
  communication: 4,
  check_in: 5,
  value: 4,
  location: 5,
)

rev7 = Review.create!(
  reviewer_id: andrea.id,
  listing_id: l8.id,
  message: "Perfect for a busy tourist! Great central location, close to subway access, great restaurants and coffee shops nearby. Quite at night, comfortable bed, and provided ample supplies (towels, shampoo, lotion, etc.).
  Highly recommend.",
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  check_in: 5,
  value: 4,
  location: 5,
)

rev8 = Review.create!(
  reviewer_id: andrea.id,
  listing_id: l1.id,
  message: "Very cozy bedroom! Location is great if you want to travel around the Manhattan!",
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  check_in: 4,
  value: 3,
  location: 5,
)

rev9 = Review.create!(
  reviewer_id: andy.id,
  listing_id: l10.id,
  message: "We had a great stay here! The bed was very comfortable. Michael was very accommodating as well. This apartment is a great location within reasonable walking distance of Times Square and many of the Broadway theatres!",
  cleanliness: 4,
  accuracy: 4,
  communication: 5,
  check_in: 5,
  value: 3,
  location: 5,
)

rev10 = Review.create!(
  reviewer_id: andy.id,
  listing_id: l7.id,
  message: "Great room and great location! It was perfect for our short visit and we enjoyed relaxing on the comfy bed at the end of a long day in the city. The room is the perfect size for two people. Very clean and great water pressure in the shower. Would definitely stay here again!",
  cleanliness: 4,
  accuracy: 4,
  communication: 5,
  check_in: 5,
  value: 5,
  location: 5,
)

rev11 = Review.create!(
  reviewer_id: anthony.id,
  listing_id: l2.id,
  message: "Perfect for a busy tourist! Great central location, close to subway access, great restaurants and coffee shops nearby. Quite at night, comfortable bed, and provided ample supplies (towels, shampoo, lotion, etc.).
  Highly recommend.",
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  check_in: 4,
  value: 4,
  location: 5,
)

rev12 = Review.create!(
  reviewer_id: anthony.id,
  listing_id: l3.id,
  message: "Our Sonder stay was nice, clean and as advertised. Location was a bit far from our planned activities but good location otherwise. Views of Battery park and the water from our room (and the rooftop)! Loved the stocked kitchen essentials. (Dishes, cookware, cleaning supplies etc.)",
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  check_in: 4,
  value: 4,
  location: 4,
)

rev13 = Review.create!(
  reviewer_id: anthony.id,
  listing_id: l4.id,
  message: "This was a fantastic trip. You can really settle in for an authentic upper west experience from days gone by. I loved the building, and the friendly neighborhood. I would definitely come again.",
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  check_in: 4,
  value: 5,
  location: 5,
)

rev14 = Review.create!(
  reviewer_id: anthony.id,
  listing_id: l10.id,
  message: "We enjoyed our stay at the apartment very much. Great location! Perfect communication with the host, Michael, who was so kind to issue a rebate for the night we missed due to a flight cancelling. If we come back to NYC for a short period of time we will definitely stay there again.",
  cleanliness: 3,
  accuracy: 4,
  communication: 4,
  check_in: 5,
  value: 3,
  location: 5,
)

rev15 = Review.create!(
  reviewer_id: michael.id,
  listing_id: l7.id,
  message: "Studio was great for a night out in the city. Its very close to Madison Square Garden where we were seeing a show. It was a short walk back to our room. It was clean and the AC worked well. Check in/out was a breeze",
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  check_in: 5,
  value: 5,
  location: 5,
)

rev16 = Review.create!(
  reviewer_id: michael.id,
  listing_id: l2.id,
  message: "This was without a doubt the best stay Ive had in New York. Gil is the perfect host! He immediately responded to my request and any time I had a question he was there to help. The East Village location is perfect incredible 24 hour bodega/deli right on the corner. I got coffee there every morning and sandwiches for picnics. There is a really great park just around the block and to Citi Bike stands on the same street. I cant wait to come back! This will always be my first choice!",
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  check_in: 5,
  value: 5,
  location: 5,
)

rev17 = Review.create!(
  reviewer_id: michael.id,
  listing_id: l4.id,
  message: "Amazing location! The neighborhood is generally pretty quiet and Im walking distance to great coffee shops and restaurants. We were right next to the park and a couple of minutes away from the subway so we are able to to explore all of NYC. The apartment itself was clean and well stocked. Michael thought of every detail and was very warm and welcoming. We hope to come back!",
  cleanliness: 4,
  accuracy: 5,
  communication: 5,
  check_in: 4,
  value: 4,
  location: 5,
)

rev18 = Review.create!(
  reviewer_id: michael.id,
  listing_id: l10.id,
  message: "My stay was great! Its in a great location by Bryant Park and 5th ave. Quick walk to the subway & location was very calm. He was very quick to respond in our communication & flexible in adding dates to our stay. I always look at the bathrooms in an airbnb for cleanliness & enough space and can say it was perfect. Overall, great room for the weekend!",
  cleanliness: 5,
  accuracy: 4,
  communication: 5,
  check_in: 4,
  value: 3,
  location: 5,
)

rev19 = Review.create!(
  reviewer_id: goju.id,
  listing_id: l1.id,
  message: "We stayed at this listing and Andrea was the best host for a week and it was perfect. Its a great base to explore the city, and so lovely to be surrounded by some great restaurants + cafes in West Village! Andrea was very good at communicating and gave us lots of super recommendations. The place itself is lovely, so comfortable and gets some gorgeous light. Thank you for a perfect stay!",
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  check_in: 4,
  value: 4,
  location: 5,
)

rev20 = Review.create!(
  reviewer_id: goju.id,
  listing_id: l7.id,
  message: "Great spot and location. As advertised. Wonderful communication! We appreciated that Michael also offered us a late check-out time that worked best with our schedule. Would recommend.",
  cleanliness: 4,
  accuracy: 4,
  communication: 5,
  check_in: 5,
  value: 4,
  location: 4,
)

rev21 = Review.create!(
  reviewer_id: goju.id,
  listing_id: l6.id,
  message: "The room is exactly as pictured. Its located right in the middle of Manhattan and it made our trip to New York even better because of the experience of living in the city! Communication was really not needed- we just walked into the reception and checked in. Our tub didnt drain water the first day but we requested maintenance and that was fixed very quickly. Quite an amazing experience, very highly recommend!",
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  check_in: 5,
  value: 3,
  location: 4,
)

rev22 = Review.create!(
  reviewer_id: goju.id,
  listing_id: l3.id,
  message: "Convenient location for downtown areas. Also lovely to walk around Battery Park area in evening. Once the internet worked, it was great fast and brilliant for working. Anthony communicate very well and loved the building. Would recommend this!",
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  check_in: 4,
  value: 4,
  location: 4,
)

rev23 = Review.create!(
  reviewer_id: goju.id,
  listing_id: l8.id,
  message: "The room was clean and well-equipped, and the check in/check out process was smooth. Great experience overall!",
  cleanliness: 4,
  accuracy: 5,
  communication: 4,
  check_in: 5,
  value: 4,
  location: 4,
)









