class Api::ListingsController < ApplicationController
  def index
    listings = bounds ? Listing.in_bounds(bounds) : Listing.all

    #Query based on filter inputs (minPrice - maxPrice) or (numBeds)
    if params[:minPrice] && params[:maxPrice] 
      listings = listings.where(price: price_range)
    elsif params[:minPrice] && params[:maxPrice] && params[:numBeds]
      listings = listings.where(price: price_range, num_beds: beds_range)
    elsif bounds && guest
      listings = listings.where('guest >= (?)', guest)
    else 
      listings = Listing.all
    end

    @listings = listings.includes(:reviews)
  end

  def show
    @listing = Listing.find(params[:id])
  end

  # TO REMOVE: might not implement this functionality
  # def create
  #   @listing = Listing.create!(new_listing_params)
  #   if @listing.save
  #     render :show
  #   end
  # end

  private

  # need to implement 'Any' which will filter ALL numBeds
  def beds_range
    params[:numBeds]
  end
  
  def price_range
    (params[:minPrice]..params[:maxPrice])
  end
  
  def bounds
    params[:bounds]
  end
  
  def guest
    params[:guest]
  end
  
  # TO REMOVE: might not implement this functionality
  # def listing_params
  #   snake_case_params!(params[:listing])

  #   params.require(:listing).permit(::title, :description, :lat, :lng, :street, :city, :state, :country, :zip_code, :price, :additional_fees, :property_type, :num_beds, :num_baths, photos: [])
  # end
  
end
