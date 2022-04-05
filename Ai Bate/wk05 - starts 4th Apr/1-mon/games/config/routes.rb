Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/magic8ball' => 'magic8ball#form'
  get '/magic8ball/results' => 'magic8ball#results'

  get '/secretnumber' => 'secretnumber#form'
  get '/secretnumber/results' => 'secretnumber#results'

  get '/rockpaperscissors' => 'rockpaperscissors#form'
  get '/rockpaperscissors/results'=> 'rockpaperscissors#results'
end
