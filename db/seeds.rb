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

# Users

demo = User.create!(
  first_name: 'Demo',
  last_name: 'User',
  email: 'demouser@yourbnb.com',
  password: '123456'
)

andrea = User.create!(
  first_name: 'Andrea',
  last_name: 'de Guzman',
  email: 'padgzmn@gmail.com',
  password: '123456'
)

andy = User.create!(
  first_name: 'Andy',
  last_name: 'Liu',
  email: 'cloudy1126@gmail.com',
  password: '123456'
)

anthony = User.create!(
  first_name: 'Anthony',
  last_name: 'Chao',
  email: 'anthonyschaowder@gmail.com',
  password: '123456'
)

michael = User.create!(
  first_name: 'Michael',
  last_name: 'Cen',
  email: 'michaelngcen@yahoo.com',
  password: '123456'
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
  title: "Untitled at Freeman - Tower Balcony Studio 1401",
  description: "Charming Studio with a balcony located in the heart of Lower East Side of Manhattan.",
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
  additional_fees: 0,
  num_guest: 3,
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
  additional_fees: 0,
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
  additional_fees: 0,
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
  additional_fees: 0,
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
  additional_fees: 0,
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
  additional_fees: 0,
  num_guest: 3,
  num_beds: 2,
  num_baths: 2
)

l7 = Listing.create!(
  host_id: anthony.id,
  title: "In the heart of KoreaTown and walking distance near Madison Square Garden - Apartment",
  description: "Great and amazing interior modern apartment near Empire State Building and Madison Square Garden area. The apartment is always well maintained and cleaned.",
  lat: 40.74726749079826, 
  lng: -73.98515809845861,  
  street: "319 5th Ave",   
  city: "New York",
  state: "NY",
  country: "United States",
  zip_code: 10016,
  price: 189.00,
  price_currency: "USD" ,
  property_type: "Apartment",
  price_per_night: "per night",
  additional_fees: 0,
  num_guest: 2,
  num_beds: 1,
  num_baths: 1
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
  additional_fees: 0,
  num_guest: 2,
  num_beds: 1,
  num_baths: 1
)

l9 = Listing.create!(
  host_id: andy.id,
  title: "Located in KoreaTown and walking distance near Madison Square Garden - Studio",
  description: "Great and amazing interior modern apartment near Empire State Building and Madison Square Garden area. The apartment is always well maintained and cleaned.",
  lat: 40.746734, 
  lng: 73.986132,  
  street: "28 W 33rd St",   
  city: "New York",
  state: "NY",
  country: "United States",
  zip_code: 10001,
  price: 160.00,
  price_currency: "USD" ,
  property_type: "Studio",
  price_per_night: "per night",
  additional_fees: 0,
  num_guest: 2,
  num_beds: 1,
  num_baths: 1
)

l10 = Listing.create!(
  host_id: michael.id,
  title: "Located in Midtown and in front of Bryant Park - Apartment",
  description: "Love being in the city? This listing is the perfect fit for you, located in front of Bryant Park and  near Empire State Building and Madison Square Garden area. The apartment is always well maintained and cleaned.",
  lat: 40.746734, 
  lng: 73.986132,  
  street: "25 W 39th St", 
  city: "New York",
  state: "NY",
  country: "United States",
  zip_code: 10018,
  price: 350.00,
  price_currency: "USD" ,
  property_type: "Apartment",
  price_per_night: "per night",
  additional_fees: 0,
  num_guest: 4,
  num_beds: 3,
  num_baths: 2
)


# AWS S3 Photos
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
l5_img05 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing05/l5_img05.jpg')

l5.photos.attach(io: l5_img01, filename: "l5_img01.jpg")
l5.photos.attach(io: l5_img02, filename: "l5_img02.jpg")
l5.photos.attach(io: l5_img03, filename: "l5_img03.jpgg")
l5.photos.attach(io: l5_img04, filename: "l5_img04.jpg")
l5.photos.attach(io: l5_img05, filename: "l5_img05.jpg")



l6_img01 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing05/l6_img01.jpg')
l6_img02 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing05/l6_img02.jpg')
l6_img03 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing05/l6_img03.jpg')
l6_img04 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing05/l6_img04.jpg')
l6_img05 = URI.open('https://yourbnb-seeds.s3.amazonaws.com/listing05/l6_img05.jpg')

l6.photos.attach(io: l6_img01, filename: "l6_img01.jpg")
l6.photos.attach(io: l6_img02, filename: "l6_img02.jpg")
l6.photos.attach(io: l6_img03, filename: "l6_img03.jpgg")
l6.photos.attach(io: l6_img04, filename: "l6_img04.jpg")
l6.photos.attach(io: l6_img05, filename: "l6_img05.jpg")


# Reservations
res1 = Reservation.create!(
  user_id: andrea.id, 
  listing_id: l3.id, 
  check_in_date: DateTime.new(2022,8,27), 
  check_out_date: DateTime.new(2022,9,2), 
  num_guests: 2, 
  # payment: 1890.00, 
  price: 270.00,
  adults: 2,
  children: 0, 
)

res2 = Reservation.create!(
  user_id: andy.id, 
  listing_id: l5.id, 
  check_in_date: DateTime.new(2022,8,29), 
  check_out_date: DateTime.new(2022,9,5), 
  num_guests: 2, 
  # payment: 1890.00, 
  price: 300.00,
  adults: 2,
  children: 0, 
)

res3 = Reservation.create!(
  user_id: demo.id, 
  listing_id: l6.id, 
  check_in_date: DateTime.new(2022,8,29), 
  check_out_date: DateTime.new(2022,9,3), 
  num_guests: 2, 
  # payment: 1890.00, 
  price: 345.00,
  adults: 2,
  children: 0, 
)


#Reviews
rev1 = Review.create!(
  reviewer_id: andrea.id,
  listing_id: l3.id,
  review: "The apartment was very nice, and we enjoyed our stay very much. Check in was smooth and Anthony communicated with us promptly. The air conditioning worked well, but it was difficult to figure it out without instructions. Finally, the bathroom was spacious and lovely. Will definitely come back to stay here again.",
  cleanliness: 5,
  accuracy: 4,
  communication: 5,
  check_in: 5,
  value: 4,
  location: 4,
)

