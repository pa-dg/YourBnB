host = @listing.host

json.partial! 'listing', listing: @listing
  json.host_name host.first_name


# json.listing do
#     json.partial! 'listing', listing: @listing
# end

json.reviews do
  @listing.reviews.each do |review|
    reviewer = review.reviewer

    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
        json.reviewer_name reviewer.first_name
          json.reviewer_photo url_for(reviewer.profile_photo) if reviewer.profile_photo.attached?
    end
  end
end