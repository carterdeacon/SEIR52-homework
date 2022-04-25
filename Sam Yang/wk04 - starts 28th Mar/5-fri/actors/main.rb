require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR) 

class Actor < ActiveRecord::Base
end

class Movie < ActiveRecord::Base
end


get '/' do
    erb :home
end

get '/actors' do
    @actors = Actor.all
    erb :actors_index
end

#new
get '/actors/new' do
    erb :actors_new
end
#create
post '/actors' do
    actor = Actor.new
    actor.name = params[:name]
    actor.nationality = params[:nationality]
    actor.image = params[:image]
    actor.save
    redirect to ('/actors') #get
end
#show

get '/actors/:id' do
    @actor = Actor.find params[:id]
    erb :actors_show
end
#edit
get '/actors/:id/edit' do
    @actor = Actor.find params[:id]
    erb :actors_edit
end
#update
post '/actors/:id' do
    actor = Actor.find params[:id]
    actor.name = params[:name]
    actor.nationality = params[:nationality]
    actor.image = params[:image]
    actor.save
    redirect to ("/actors/#{params[:id]}")
end

#Delete
get '/actors/:id/delete' do
    actor = Actor.find params[:id]
    actor.destroy
    redirect to ('/actors')
end

get '/movies' do
    @movies = Movie.all
    erb :movies_index 
end
#NEW
get '/movies/new' do
    erb :movies_new
end

#CREATE
post '/movies' do
    movie = Movie.new
    movie.name = params[:name]
    movie.image = params[:image]
    movie.save
    redirect to ("/movies/#{ movie.id}")
end

#SHOW
get '/movies/:id' do
    @movie = Movie.find params[:id]
    erb :movies_show
end

#EDIT
get "/movies/:id/edit" do
    @movie = Movie.find params[:id]
    erb :movies_edit
    
end

#UPDATE
post '/movies/:id' do
    movie = Movie.find params[:id]
    movie.name = params[:name]
    movie.image = params[:image]
    movie.save
    redirect to ("/movies/#{movie.id}")
end

#DELETE
get '/movies/:id/delete' do
    movie = Movie.find params[:id]
    movie.destroy
    redirect to ('/movies')
end 

def query_db(sql_statement)
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end