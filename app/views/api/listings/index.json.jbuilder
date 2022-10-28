  @listings.each do |listing|
    host = listing.host
    
    json.set! listing.id do
      json.partial! 'listing', listing: listing
        json.host_name host.first_name
    end
    
  end





