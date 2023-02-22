Rails.application.routes.draw do

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :publishers
      resources :authors
      resources :genres
      resources :books

      # Authentication
      post "/session", to: "authentication#login"

      resources :users, param: :_username
    end
  end

  get "/*a", to: "application#not_found"

  # Defines the root path route ("/")
  # root "books#index"
  get "/books", to: redirect("/")
end
