require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database =>'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Kamon < ActiveRecord::Base
end
class Plant < ActiveRecord::Base
end


get '/' do
    erb :home
end
#INDEX
get '/kamons' do

    @kamons = Kamon.all
    erb :kamons_index
end

#NEW

get '/kamons/new' do
    erb :kamons_new
end

post '/kamons' do
    kamon = Kamon.new
    kamon.name = params[:name]
    kamon.meaning = params[:meaning]
    kamon.image = params[:image]
    kamon.save
    redirect to("/kamons/#{ kamon.id }")
end

#show

get '/kamons/:id' do
    @kamon = Kamon.find params[:id]
    erb :kamons_show
end

#EDIT
get '/kamons/:id/edit' do
    @kamon = Kamon.find params[:id]
    erb :kamons_edit
end
 post '/kamons/:id' do
    kamon = Kamon.find params[:id]
    kamon.name = params[:name]
    kamon.meaning = params[:meaning]
    kamon.image = params[:image]
    kamon.save
    redirect to("/kamons/#{kamon.id}")
 end

#  Delete
get '/kamons/:id/delete' do
    kamon = Kamon.find params[:id]
    kamon.destroy
    redirect to('/kamons')
end

##########################################################
#INDEX

get '/plants' do
    @plants = Plant.all
    erb :plants_index
end
# #new
get '/plants/new' do
    erb :plants_new
end


#show 
get '/plants/:id' do
    @plant = Plant.find params[:id] ##SELECT commond
    erb :plants_show
end



#create
post '/plants' do
    plant = Plant.new 
    plant.name = params[:name]
    plant.image = params[:image]
    plant.save
    redirect to("/plants/#{ plant.id }")
end

#edit
get '/plants/:id/edit' do
    @plant = Plant.find params[:id]
    erb :plants_edit
end

post '/plants/:id' do
    plant = Plant.find params[:id]
    plant.name = params[:name]
    plant.image =params[:image]
    plant.save
    redirect to("/plants/#{plant.id}")
end

#delete

get '/plants/:id/delete' do
    plant = Plant.find params[:id]
    plant.destroy
    redirect to('/plants')
end






