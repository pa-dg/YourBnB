Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]                     #signup
    resource :session, only: [:create, :show, :destroy]   #login, logout
    resources :listings, only: [:create, :index, :show]   #TO BE ADDED :destroy
    resources :reservations
    resources :reviews
  end
  
  root 'static_pages#root'
end
