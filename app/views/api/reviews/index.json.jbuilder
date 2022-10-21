# debugger
@reviews.each do |review|
  reviewer = review.reviewer
  # debugger
  json.set! review.id do
    json.partial! 'review', review: review
      json.reviewer_name reviewer.first_name
  end

end