class Api::ReviewsController < ApplicationController
  def index
    # selected_listing = Listing.find(params[:listing_id])

    # review_ids = selected_listing.reviews.pluck(:id)
    # @reviews = Review.where(id: review_ids)

    @reviews = Review.all.where(id: params[:listing_id])
    # @reviews = Review.all
  end

  def create
    @review = Review.new(new_review_params)

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])

    if @review.update(new_review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])

    if @review
      @review.destroy
    else
      render json: { message: "Review cannot be deleted"}, status: 404
    end
  end

  private

  def new_review_params
    snake_case_params!(params[:review])

    params.require(:review).permit(:user_id, :listing_id, :review, :cleanliness, :accuracy, :communication, :check_in, :value, :location)
  end

end
