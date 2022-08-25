@reviews.each do |review|
  reviewer = review.reviewer

  json.set! review.id do
    json.partial! 'review', review: review
      json.reviewer_first_name reviewer.first_name
      json.reviewer_last_name reviewer.last_name
  end

end