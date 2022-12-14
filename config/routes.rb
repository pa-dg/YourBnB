Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]              #signup
    resource :session, only: [:create, :show, :destroy]   #login, logout
    resources :listings, only: [:create, :index, :show]   #TO BE ADDED :destroy
    resources :reservations, only: [:index, :show, :create, :update, :destroy]
    resources :reviews, only: [:index, :show, :create, :update, :destroy]
  end
  
  root 'static_pages#root'
end
