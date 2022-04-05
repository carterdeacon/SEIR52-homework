Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => "pages#home"

  get "/magic_8_ball" => "magic#ask"
  get "/magic_8_ball/answer" => "magic#answer"

  get "/secret_number" => "secret#pick"
  get "/secret_number/lose" => "secret#lose"
  get "/secret_number/win" => "secret#win"

  get "/rock_paper_scissors" => "rock#play"
  get "/rock_paper_scissors/result" => "rock#result"

end
