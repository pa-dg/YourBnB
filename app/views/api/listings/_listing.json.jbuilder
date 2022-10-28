json.extract! listing, :id, :host_id, :title, :description, :lat, :lng, :street, :city, :state, :country, :zip_code, :price, :additional_fees, :property_type, :num_guest, :num_beds, :num_baths, :num_reviews, :avg_rating

if listing.photos.length != 0
  json.photoUrls listing.photos.map { |photo| url_for(photo) }
end

