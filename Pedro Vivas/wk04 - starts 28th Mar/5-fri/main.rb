require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

#config
ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

#debug logger
ActiveRecord::Base.logger = Logger.new(STDERR)

#Models
class Movie < ActiveRecord::Base
end

class Actor < ActiveRecord::Base
end

get '/' do
    erb :home
end

#Movie Index
get '/movies' do
    @movies = Movie.all
    erb :movies_index
end

#Add new movie
get '/movies/new' do
    erb :movies_new
end

#Adds new movie data to database
post '/movies' do
    movie = Movie.new
    movie.title = params[:title]
    movie.release = params[:release]
    movie.synopsis = params[:synopsis]
    movie.pic = params[:pic]
    movie.save
    redirect to('/movies')
end

#Show specific movie
get '/movies/:id' do
    @movie = Movie.find(params[:id])
    erb :movies_show
end

#Edit movie data
get '/movies/:id/edit' do
    @movie = Movie.find(params[:id])
    erb :movies_edit
end

#Update movie data
post '/movies/:id' do
    movie = Movie.find(params[:id])
    movie.title = params[:title]
    movie.release = params[:release]
    movie.synopsis = params[:synopsis]
    movie.pic = params[:pic]
    movie.save
    redirect to("/movies/#{ movie[:id] }")
end

#Delete movie from database
get '/movies/:id/delete' do
    movie = Movie.find(params[:id])
    movie.destroy
    redirect to('/movies')
end
#___________

#ACTORS

#Actor Index
get '/actors' do
    @actors = Actor.all
    erb :actors_index
end

#Add new actor
get '/actors/new' do
    erb :actors_new
end

#Adds new actor data to database
post '/actors' do
    actor = Actor.new
    actor.actor_name= params[:actor_name]
    actor.birthplace = params[:birthplace]
    actor.photo = params[:photo]
    actor.save
    redirect to('/actors')
end

#Show specific actor
get '/actors/:id' do
    @actor = Actor.find(params[:id])
    erb :actors_show
end

#Edit actor data
get '/actors/:id/edit' do
    @actor = Actor.find(params[:id])
    erb :actors_edit
end

#Update actor data
post '/actors/:id' do
    actor = Actor.find(params[:id])
    actor.actor_name = params[:name]
    actor.birthplace = params[:birthplace]
    actor.photo = params[:photo]
    actor.save
    redirect to("/actors/#{ actor[:id] }")
end

#Delete actor from database
get '/actors/:id/delete' do
    actor = Actor.find(params[:id])
    actor.destroy
    redirect to('/actors')
end