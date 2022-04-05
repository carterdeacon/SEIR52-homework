Rails.application.routes.draw do
  get '/mountains' => 'mountains#index'
  get '/mountains/show/:id' => 'mountains#show', :as => :mountain
  get '/mountains/new' => 'mountains#new', :as => :new_mountain
  post '/mountains' => 'mountains#create'
end
