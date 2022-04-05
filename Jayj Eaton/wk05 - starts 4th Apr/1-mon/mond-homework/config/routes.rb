Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/ball' => 'ball#home'
  get '/ball/results' => 'ball#results'

  get '/secretnumber' => 'secretnumber#home'
  get '/secretnumber/results' => 'secretnumber#results'

  get '/rock' => 'rock#home'
  get '/rock/results' => 'rock#results'

  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
