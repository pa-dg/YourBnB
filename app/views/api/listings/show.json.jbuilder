  host = @listing.host
  
  json.partial! 'listing', listing: @listing
  json.host_name host.first_name

# json.host do
#   json.set! host: @listing.host.first_name
# end



