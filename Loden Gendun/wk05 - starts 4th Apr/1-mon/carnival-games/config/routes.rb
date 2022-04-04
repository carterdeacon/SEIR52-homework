Rails.application.routes.draw do
  root :to => 'pages#index'

  get '/eightball' => 'eightball#play'
  get '/eightball/fortune' => 'eightball#fortune'

  get '/secretnumber' => 'secretnumber#play'
  get '/secretnumber/results' => 'secretnumber#results'

  get '/rps' => 'rps#play'
  get '/rps/results' => 'rps#results'

end
