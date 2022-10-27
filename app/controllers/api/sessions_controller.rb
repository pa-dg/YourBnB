class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login_user!(@user)
      render "api/users/show"
    else
      render json: ["Invalid credentials"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout_user!
      render "api/users/show"
    else
      render json: ["You are not signed in"], status: 404
    end
  end
end
