Rails.application.routes.draw do  
  get 'books/index'
  get 'books/new'
  get 'books/edit'
  get 'books/show'
  resources :authors
  resources :books
end
