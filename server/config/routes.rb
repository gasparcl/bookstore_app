Rails.application.routes.draw do
  resources :publishers
  resources :authors
  resources :genres
  resources :books
  devise_for :users,
  controllers: {
    sessions: "users/sessions",
    registrations: "users/registrations"
  }
  get "/member-data", to: "members#show"

  namespace :api do
    namespace :v1 do
        end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
