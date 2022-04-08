require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Movie < ActiveRecord::Base
end

class Director < ActiveRecord::Base
end


get '/' do
    erb :home
end

## movies CRUD
# home movies
get '/movies' do
    @movies = Movie.all
    erb :movies_index
end
# create
get '/movies/new' do
    erb :movies_new
end
post '/movies' do
    movie = Movie.new
    movie.name = params[:name]
    movie.rate = params[:rate]
    movie.year_watched = params[:year_watched]
    movie.watch_again = params[:watch_again]
    movie.comments = params[:comments]
    movie.save
    redirect to("/movies/#{movie.id}")
end
# read
get '/movies/:id' do
    @movie = Movie.find params[:id]
    erb :movies_show
end
# update
get '/movies/:id/edit' do
    @movie = Movie.find params[:id]
    erb :movies_edit
end
post '/movies/:id' do
    movie = Movie.find params[:id]
    movie.name = params[:name]
    movie.rate = params[:rate]
    movie.year_watched = params[:year_watched]
    movie.watch_again = params[:watch_again]
    movie.comments = params[:comments]
    movie.save
    redirect to("/movies/#{movie.id}")
end
# delete
get '/movies/:id/delete' do
    movie = Movie.find params[:id]
    movie.destroy
    redirect to('/movies')
end

## directors CRUD
# home directors
get '/directors' do
    @directors = Director.all
    erb :directors_index
end
# create
get '/directors/new' do
    erb :directors_new
end
post '/directors' do
    director = Director.new
    director.firstname = params[:firstname]
    director.middlename = params[:middlename]
    director.surname = params[:surname]
    director.birthdate = params[:bithdate]
    director.birthplace = params[:birthplace]
    director.save
    redirect to ("/directors/#{director.id}")
end
# read
get '/directors/:id' do
    @director = Director.find params[:id]
    erb :directors_show
end
# update
get '/directors/:id/edit' do
    @director = Director.find params[:id]
    erb :directors_edit
end
post '/directors/:id' do
    director = Director.find params[:id]
    director.firstname = params[:firstname]
    director.middlename = params[:middlename]
    director.surname = params[:surname]
    director.birthdate = params[:bithdate]
    director.birthplace = params[:birthplace]
    director.save
    redirect to("/directors/#{director.id}")
end
# delete
get '/directors/:id/delete' do
    director = Director.find params[:id]
    director.destroy
    redirect to("/directors")
end