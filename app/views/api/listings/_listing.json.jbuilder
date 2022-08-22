json.extract! listing, :id, :host_id, :title, :description, :latitude, :longitude, :street, :city, :state, :country, :zip_code, :price, :additional_fees, :property_type, :num_guest, :num_beds, :num_baths

if listing.photos.length != 0
  json.photoUrls listing.photos.map { |file| url_for(file) }
end

