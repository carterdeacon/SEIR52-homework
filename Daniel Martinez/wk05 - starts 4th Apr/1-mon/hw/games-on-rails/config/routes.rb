Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/magic' => 'ball#magic'
  get '/magic/results' => 'ball#magic'
  get '/numbers' => 'special#numbers'
  get '/rps' => 'game##rps'
end
