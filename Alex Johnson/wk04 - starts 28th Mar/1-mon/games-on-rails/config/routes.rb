Rails.application.routes.draw do

    root :to => 'pages#home'

    get '/eightball' => 'eightball#form'
    get '/eightball/results' => 'eightball#results'


    get '/secretnumber' => 'secretnumber#form'
    get '/secretnumber/results' => 'secretnumber#results'



    get '/scissorspaperrock' => 'scissorspaperrock#form'
    get '/scissorspaperrock/results' => 'scissorspaperrock#results'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
