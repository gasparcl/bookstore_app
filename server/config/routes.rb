Rails.application.routes.draw do
  get 'private/test'
  get '/current_user', to: 'current_user#index'
  namespace :api do
    namespace :v1 do
      resources :publishers
      resources :authors
      resources :genres
      resources :books
    end
  end

  # devise_for :users, 
  #             controllers: {
  #               sessions: "users/sessions",
  #               registrations: "users/registrations"
  #             }
  # get "/member-data", to: "members#show"
  
  # Authentication
  resources :users, param: :_username
  post '/auth/login', to: 'authentication#login'
  get '/*a', to: 'application#not_found'

  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "books#index"
  get "/books", to: redirect("/")  
end
