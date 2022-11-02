json.partial! "api/users/user", user: @user

# json.reviews do
#   @user.reviews.each do |review|
#     reviewer = review.reviewer
#     listing = review.listing

#     json.set! review.id do
#       json.partial! 'api/reviews/review', review: review
#         json.reviewer_photo url_for(reviewer.profile_photo) if reviewer.profile_photo.attached?
#           json.listing listing
#     end
#   end
# end

# json.reviews do
#   @listing.reviews.each do |review|
#     reviewer = review.reviewer

#     json.set! review.id do
#       json.partial! 'api/reviews/review', review: review
#         json.reviewer_name reviewer.first_name
#           json.reviewer_photo url_for(reviewer.profile_photo) if reviewer.profile_photo.attached?
#     end
#   end
# end