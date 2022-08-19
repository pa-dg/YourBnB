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
    render :index
  end

  def show
    @listing = Listing.find(params[:id])
  end

  def create
    @listing = Listing.create!(new_listing_params)
    if @listing.save
      render :show
    end
  end

  #TO BE ADDED
  # def destroy 
  # end

  private

  def bounds
    params[:bounds]
  end
  
  def guest
    params[:guest]
  end
  
  def selected_listing
  end
  
  def new_listing_params
    params.require(:listing).permit(:title, :description, :latitude, :longitude, :street, :city, :state, :country, :zip_code, :price, :additional_fees, :property_type, :num_beds, :num_baths)
  end

end
