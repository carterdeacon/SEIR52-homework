Rails.application.routes.draw do
  get '/islands' => 'islands#index'
  get '/islands/new' => 'islands#new', :as => :new_island
  post '/islands' => 'islands#create'
  get '/islands/:id' => 'islands#show', :as => :island
  get '/islands/:id/edit' => 'islands#edit', :as => :edit_island
  post '/islands/:id' => 'islands#update'
  get '/islands/:id/delete' => 'islands#destroy', :as => :delete_island
end
