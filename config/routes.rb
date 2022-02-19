Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "pages#index"
  
  get 'images' => 'images#index'
  get 'images/:user_id' => 'images#show'
  post 'images' => 'images#create'
  delete 'images/:image_id' => 'images#destroy'

  get 'users/auth' => 'users#auth'

  resources :users, param: :username, param: :password, param: :email

  get '*path', to: 'pages#index', via: :all
end
