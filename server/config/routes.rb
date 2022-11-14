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

  devise_for :users, path: '', path_names: {
    sign_in: "login",
    sign_out: "logout",
    registration: "signup"
  },
  controllers: {
    sessions: "users/sessions",
    registrations: "users/registrations"
  }
  # get "/member-data", to: "members#show" 

  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
