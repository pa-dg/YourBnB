# debugger
  @listings.each do |listing|
    # debugger
    host = listing.host
    
    json.set! listing.id do
      json.partial! 'listing', listing: listing
      json.host_name host.first_name
    end
    
  end

# @listings.each do |listing|
#   json.set! listing.id do
#     json.partial! 'listing', listing: listing
#   end
# end





