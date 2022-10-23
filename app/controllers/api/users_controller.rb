class Api::UsersController < ApplicationController
  def create
    @user = User.new(new_user_params)
    if @user.save
      login_user!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  private

  def new_user_params
    snake_case_params!(params[:user])
    
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
end

