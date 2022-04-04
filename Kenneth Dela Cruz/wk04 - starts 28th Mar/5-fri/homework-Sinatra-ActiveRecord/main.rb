require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Wine < ActiveRecord::Base
end

class Cheese < ActiveRecord::Base
end

#HOME
get '/' do
    erb :home
end


#INDEX
get '/wines' do
    @wines = Wine.all
    erb :wines_index
end

#ADD
get '/wines/add' do
   erb :wines_add 
end

#CREATE
post '/wines' do
    wine = Wine.new
    wine.variant = params[:variant]
    wine.wineType = params[:wineType]
    wine.ingredient = params[:ingredient]
    wine.cheesePairing = params[:cheesePairing]
    wine.image = params[:image]
    wine.save
    redirect to("/wines")
end

#SHOW
get '/wines/:id' do
   @wine = Wine.find params[:id]
   erb :wines_show
end

#EDIT
get '/wines/:id/edit' do
    @wine = Wine.find params[:id]
    erb :wines_edit
end

#UPDATE
post '/wines/:id' do
    wine = Wine.find params[:id]
    wine.variant = params[:variant]
    wine.wineType = params[:wineType]
    wine.ingredient = params[:ingredient]
    wine.cheesePairing = params[:cheesePairing]
    wine.image = params[:image]
    wine.save
    redirect to("/wines/#{ wine.id }")
end

#DELETE
get '/wines/:id/delete' do
    wine = Wine.find params[:id]
    wine.destroy
    redirect to("/wines")
end

#INDEX
get '/cheeses' do
    @cheeses = Cheese.all
    erb :cheeses_index
end

#ADD
get '/cheeses/add' do
   erb :cheeses_add 
end

#CREATE
post '/cheeses' do
    cheese = Cheese.new
    cheese.variant = params[:variant]
    cheese.cheeseType = params[:cheeseType]
    cheese.country = params[:country]
    cheese.image = params[:image]
    cheese.save
    redirect to("/cheeses")
end

#SHOW
get '/cheeses/:id' do
    @cheese = Cheese.find params[:id]
    erb :cheeses_show
end

#EDIT
get '/cheeses/:id/edit' do
    @cheese = Cheese.find params[:id]
    erb :cheeses_edit
end

#UPDATE
post '/cheeses/:id' do
    cheese = Cheese.find params[:id]
    cheese.variant = params[:variant]
    cheese.cheeseType = params[:cheeseType]
    cheese.country = params[:country]
    cheese.image = params[:image]
    cheese.save
    redirect to("/cheeses/#{ cheese.id }")
end


#DELETE
get '/cheeses/:id/delete' do
    cheese = Cheese.find params[:id]
    cheese.destroy
    redirect to("/cheeses")
end
