Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/magic' => 'magic#question'
  get '/magic/answer' => 'magic#answer'

  get '/secret_number' => 'secret#choice'
  get '/secret_number/result' => 'secret#result'

  get '/rock_paper_scissors' => 'rps#choice'
  get '/rock_paper_scissors/result' => 'rps#result'
end
