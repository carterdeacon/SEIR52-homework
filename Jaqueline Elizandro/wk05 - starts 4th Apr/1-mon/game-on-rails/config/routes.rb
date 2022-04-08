Rails.application.routes.draw do
  root :to => 'pages#home' # home page

  get '/magic' => 'magic#question'
  get '/magic/question/answer' => 'magic#answer'

  get '/secret' => 'secret#number'
  get '/secret/number/answer' => 'secret#answer'

  get '/rock' => 'rock#player_choose'
  get '/rock/player_choose/answer' => 'rock#answer'
end
