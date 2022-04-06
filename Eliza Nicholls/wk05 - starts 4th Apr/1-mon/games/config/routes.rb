Rails.application.routes.draw do
  root :to => 'pages#home'
  # get '/' => 'pages#home'

  get '/games' => 'games#play'
  get '/results' => 'results#results'
  get '/secrets' => 'secrets#secrets'
  get '/secretnumbers' =>'secretnumbers#win'
end
