Rails.application.routes.draw do
  get '/castles' => 'castles#index'
  get '/castles/new' => 'castles#new', :as => :new_castles
  post '/castles' => 'castles#create'
  get '/castles/:id' => 'castles#show', :as => :castle
  get '/castles/:id/edit' => 'castles#edit', :as => :edit_castle
  post '/castles/:id' => 'castles#update'
  get '/castles/:id/delete' => 'castles#delete', :as => :delete_castle
  
end

