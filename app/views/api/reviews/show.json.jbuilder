reviewer = @review.reviewer

json.partial! 'api/reviews/review', review: @review
  json.reviewer_name reviewer.first_name