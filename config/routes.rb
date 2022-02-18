Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "pages#index"
  
  delete 'images/:id' => 'images#destroy'

  resources :users, param: :username, param: :password, param: :email
  resources :images, param: :public, param: :user_id, param: :name, param: :description, param: :image_url


  get '*path', to: 'pages#index', via: :all
end
