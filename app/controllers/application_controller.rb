class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  # protect_from_forgery with: :exception   #CSRF attack protection 

  helper_method :current_user, :logged_in?

  private
  #CHRRLLL
  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_logged_in
    render json: ['Invalid credentials'], status: 401 unless logged_in?
  end
  
  def logged_in?
    !!current_user
  end

  def login_user!(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout_user!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def snake_case_params!(params)
      params.transform_keys!(&:underscore)
  end
  
end
