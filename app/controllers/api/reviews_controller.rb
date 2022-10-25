class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.all.where(listing_id: params[:listing_id])
  end

  def show
    @review = Review.find(params[:id])
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

    params.require(:review).permit(:reviewer_id, :listing_id, :message, :cleanliness, :accuracy, :communication, :check_in, :value, :location)
  end

end
