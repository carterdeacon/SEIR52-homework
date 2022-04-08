Rails.application.routes.draw do

get '/starsigns' => 'starsigns#index'
get '/starsigns/:id' => 'starsigns#show', :as => :starsign


end 
