require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Camera < ActiveRecord::Base
end 

class Shop < ActiveRecord::Base
end


get '/' do
    erb :home
end


get '/cameras' do
    @cameras = Camera.all
    erb :cameras
end

get '/cameras/new' do
    erb :cameras_new
end 


post '/cameras' do
    # query_db "INSERT INTO cameras (name, brand, image) VALUES ('#{ params[:name] }', '#{ params[:brand] }', '#{ params[:image] }')"
    camera = Camera.new
    camera.name = params[:name]
    camera.brand = params[:brand]
    camera.image = params[:image]
    camera.save
    redirect to('/cameras')
end

get '/cameras/:id' do
    @camera = Camera.find params[:id]
    erb :camera_list
end

get '/cameras/:id/edit' do
    @camera = Camera.find params[:id]
    erb :camera_edit
end 

post '/cameras/:id' do
    # query_db "UPDATE cameras SET name='#{ params[:name] }', brand='#{ params[:brand] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    camera = Camera.find params[:id]
    camera.name = params[:name]
    camera.brand = params[:brand]
    camera.image = params[:image]
    camera.save
    redirect to("/cameras/#{ params[:id] }")
end 

get '/cameras/:id/delete' do
    # query_db "DELETE FROM cameras WHERE id=#{ params[:id] }"
    camera = Camera.find params[:id]
    camera.destroy
    redirect to('/cameras')
end 

######################################################################

get '/shops' do
    @shop = Shop.all
    erb :shops
end 

get '/shops/new' do
    erb :shops_new
end 

get '/shops/:id' do
    @shop = Shop.find params[:id]
    erb :shops_list
end 

post '/shops' do
    shop = Shop.new
    shop.name = params[:name]
    shop.location = params[:location]
    shop.save
    redirect to('/shops')
end

get '/shops/:id/edit' do
    @shop = Shop.find params[:id]
    erb :shops_edit
end

post '/shops/:id' do
    shop = Shop.find params[:id]
    shop.name = params[:name]
    shop.location = params[:location]
    shop.save
    redirect to("/shops/#{ params[:id] }")
end 

get '/shops/:id/delete' do
    shop = Shop.find params[:id]
    shop.destroy
    redirect to('/shops')
end