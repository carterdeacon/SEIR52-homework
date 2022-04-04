require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sql3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Director < ActiveRecord::Base
    has_many :movies, dependent: :destroy
end

class Movie < ActiveRecord::Base
    belongs_to :director
end

get '/' do 
    erb :home
end

#INDEX
get '/directors' do
    @directors = Director.all
    erb :directors_index
end


# NEW
get '/directors/new' do
    erb :directors_new
end

#SHOW
get '/directors/:id' do
    @director = Director.find(params[:id])
    @movies = Movie.where(director_id: params[:id])
    erb :directors_show
end

#CREATE
post '/directors' do
    director = Director.new
    director.first_name = params[:first_name]
    director.last_name = params[:last_name]
    director.birth_year = params[:birth_year]
    director.photo = params[:photo]
    director.bio = params[:bio]
    director.save
    redirect to("/directors/#{ director.id }")
end

#EDIT 
get '/directors/:id/edit' do
    @director = Director.find(params[:id])
    erb :directors_edit
end

#UPDATE

post '/directors/:id' do
    director = Director.find(params[:id])
    director.update(first_name: params[:first_name], last_name: params[:last_name], birth_year: params[:birth_year], photo: params[:photo], bio: params[:bio])
    director.save
    redirect to("/directors/#{ director.id }")
end

#DELETE
get '/directors/:id/delete' do
    director = Director.find(params[:id])
    director.destroy
    redirect to("/directors")
end


########### 
# MOVIES
###########

#INDEX
get '/movies' do
    @movies = Movie.all
    erb :movies_index
end


# NEW

get '/directors/:id/newmovie' do
    @director = Director.find(params[:id])
    erb :movies_new
end


#SHOW

get '/movies/:id' do    
    @movie = Movie.find(params[:id])
    @director = @movie.director
    erb :movies_show
end

#CREATE 

post '/movies' do
    movie = Movie.new
    movie.title = params[:title]
    movie.director_id = params[:director_id].to_i
    movie.release_year = params[:release_year]
    movie.genre = params[:genre]
    movie.synopsis = params[:synopsis]
    movie.photo = params[:photo]
    movie.save
    redirect to("/movies/#{ movie.id }")
end

#EDIT

get '/movies/:id/edit' do
    @movie = Movie.find(params[:id])
    erb :movies_edit
end

#UPDATE

post '/movies/:id' do
    movie = Movie.find(params[:id])
    movie.update(title: params[:title], release_year: params[:release_year], genre: params[:genre], synopsis: params[:synopsis], photo: params[:photo])
    movie.save
    redirect to("/movies/#{ movie.id }")
end


#DELETE

get '/movies/:id/delete' do
    movie = Movie.find(params[:id])
    movie.destroy
    redirect to("/movies")
end





# INDEX
# NEW
# CREATE
# SHOW
# EDIT
# UPDATE
# DELETE


#CREATE IN THIS ORDER
#INDEX
#SHOW
#NEW ( needs to go above show in main.rb)
#CREATE


