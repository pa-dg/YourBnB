class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login_user!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.includes(:listings).find(params[:id])
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages
    end
  end
  
  private

  def user_params
    snake_case_params!(params[:user])
    
    params.require(:user).permit(:first_name, :last_name, :email, :password, :profile_photo)
  end
end


