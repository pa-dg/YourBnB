reviewer = @review.reviewer

json.set! @review.id do
  json.partial! 'api/reviews/review', review: @review
    json.reviewer_name reviewer.first_name
end