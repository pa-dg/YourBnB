json.extract! listing, :id, :host_id, :title, :description, :latitude, :longitude, :street, :city, :state, :country, :zip_code, :price, :additional_fees, :property_type, :num_guest, :num_beds, :num_baths

json.picture_url listing.picture_url || url_for(listing.photo)