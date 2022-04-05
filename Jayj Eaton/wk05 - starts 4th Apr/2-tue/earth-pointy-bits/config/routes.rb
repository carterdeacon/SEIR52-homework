Rails.application.routes.draw do

  get '/mountains' => 'mountains#index'
  get '/mountains/new' => 'mountains#new', :as => :new_mountain
  post '/mountains' => 'mountains#create'
  get '/mountains/:id' => 'mountains#show', :as => :mountain
  get '/mountains/:id/edit' => 'mountains#edit', :as => :edit_mountain
  post '/mountains/:id' => 'mountains#update'
  get '/mountains/:id/delete' => 'mountains#destroy', :as => :delete_mountain
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
