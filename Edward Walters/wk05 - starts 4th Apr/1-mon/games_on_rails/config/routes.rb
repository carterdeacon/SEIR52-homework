Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/eightball' => 'eightball#home'
  get 'eightball/result' => 'eightball#result'
  get'/secretnum' => 'secretnum#home'
  get '/secretnum/:id' => 'secretnum#result'
  get '/rps' => 'rps#home'
  get 'rps/:guess' => 'rps#result'
end
