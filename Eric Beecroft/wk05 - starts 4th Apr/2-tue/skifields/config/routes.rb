Rails.application.routes.draw do
  get '/skifields' => 'skifields#index'
  get '/skifields/new' => 'skifields#new', :as => :new_skifield
  post '/skifields' => 'skifields#create'
  get '/skifields/:id' => 'skifields#show', :as => :skifield
  get '/skifields/:id/edit' => 'skifields#edit', :as => :edit_skifield
  post '/skifields/:id' => 'skifields#update'
  get '/skifields/:id/delete' => 'skifields#destroy', :as => :delete_skifield
end
