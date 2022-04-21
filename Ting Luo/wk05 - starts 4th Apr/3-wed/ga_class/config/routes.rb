Rails.application.routes.draw do
  get 'students/index'
  get 'students/new'
  get 'students/edit'
  get 'students/show'
  resources :courses
  resources :students
end
