Rails.application.routes.draw do
  get '/home' => 'pages#home'
  get '/home/new' => 'pages#new'
  post '/home' => 'pages#create'
  get '/home/:id' => 'pages#show', :as => :ocean
  get '/home/:id/edit' => 'pages#edit', :as => :edit
  post '/home/:id' => 'pages#update'
  get '/home/:id/delete' => 'pages#delete', :as => :delete
end
