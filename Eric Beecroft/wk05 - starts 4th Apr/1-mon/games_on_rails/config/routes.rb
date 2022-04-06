Rails.application.routes.draw do
  root :to => 'pages#home'
  
  get '/balls/question' => 'balls#question'
  get '/balls/answer' => 'balls#answer'

  get '/secrets' => 'secrets#pick'
  get '/secrets/show' => 'secrets#show'

end
