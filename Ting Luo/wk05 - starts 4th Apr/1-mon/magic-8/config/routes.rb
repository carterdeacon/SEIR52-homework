Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => "games#home"

  get "/games/magicball" => "magicball#display"
  get "/games/magicball/results" => "magicball#results"

  get "/games/secretnumber" => "secretnumber#form"
  get "/games/secretnumber/results" => "secretnumber#results"

  get "/games/rockpaperscissors" =>  "rockpaperscissors#display"
  get "/games/rockpaperscissors/:throw" => "rockpaperscissors#play"
end
