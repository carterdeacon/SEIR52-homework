Rails.application.routes.draw do
    root :to => 'pages#home'

    get '/magic' => 'magic#form'
    get '/magic/results' => 'magic#results'

    get 'secret' => 'secret#pick'
    get 'secret/results' => 'secret#results'

    get '/rps' => 'rps#play'
    get '/rps/:throw' =>'rps#match'
end
