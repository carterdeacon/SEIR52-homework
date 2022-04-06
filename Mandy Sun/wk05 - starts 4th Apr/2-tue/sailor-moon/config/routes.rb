Rails.application.routes.draw do
  get "/sailors" => "sailors#index"
  get "/sailors/new" => "sailors#new", :as => :new_sailor
  get "/sailors/:id" => "sailors#show", :as => :show_sailor
  post "/sailors" => "sailors#create"
  get "/sailors/:id/edit" => "sailors#edit", :as => :edit_sailor
  post "/sailors/:id" => "sailors#update"
  get "/sailors/:id/delete" => "sailors#delete", :as => :delete_sailor
  
  

end
