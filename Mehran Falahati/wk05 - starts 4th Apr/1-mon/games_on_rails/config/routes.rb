Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/magic' => 'magic#form'
  get '/magic/result' => 'magic#result'

  get '/secret' => 'secret#form'
  get '/secret/result' => 'secret#result'

  get '/rps' => 'rps#form'
  get '/rps/:throw' => 'rps#throw'
end
