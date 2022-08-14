class Api::UsersController < ApplicationController
  def create
    @user = User.new(new_user_params)
    if @user.save
      login_user!(@user)
      render :show
    else
      render json: errors.full_messages, status: 422
    end
  end

  private

  def new_user_params
    self.params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
end
