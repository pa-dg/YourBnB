class Api::ListingsController < ApplicationController
  def index
    listings = bounds ? Listing.in_bounds(bounds) : Listing.all

    #condition for the filter/search bar
    if params[:minPrice] && params[:maxPrice] 
      price_range = (params[:minPrice]..params[:maxPrice])
      listings = listings.where(price: price_range)
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

  def bounds
    params[:bounds]
  end
  
  def guest
    params[:guest]
  end
  
  def new_listing_params
    params.require(:listing).permit(:title, :description, :lat, :lng, :street, :city, :state, :country, :zip_code, :price, :additional_fees, :property_type, :num_beds, :num_baths, photos: [])
  end

end
