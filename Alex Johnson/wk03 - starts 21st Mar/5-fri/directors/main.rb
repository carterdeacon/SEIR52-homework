require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)
ActiveRecord::Base.logger = Logger.new(STDERR)
class Director < ActiveRecord::Base
end
class Movie < ActiveRecord::Base
end

# Home screen 
get '/' do
    erb :home
end
#Movie CRUD 
# show all movies in the table
get '/movies' do
    @movies = Movie.all
    erb :movies_index
end
#NEW  - user input fields for a new movie 
get '/movies/new' do
    erb :movies_new
end
#CREATE -  commit new record from user input to db
post '/movies' do
    movie = Movie.new
    movie.name = params[:name]
    movie.released = params[:released]
    movie.director = params[:director]
    movie.image = params[:image]
    movie.save
    redirect to("/movies/#{ movie.id }")
    
end
#SHOW show a specific movie record in the db   
get '/movies/:id' do
    @movie = Movie.find params[:id]
    erb :movies_show
end
#EDIT - retrieve user input for an updated record
get '/movies/:id/edit' do
    @movie = Movie.find params[:id]
    erb :movies_edit
end
#UPDATE - post user input for an updated record
post '/movies/:id' do
    movie = Movie.find params[:id]
    movie.name = params[:name]
    movie.director = params[:director]
    movie.released = params[:released]
    movie.image = params[:image]
    movie.save
    redirect to("/movies/#{ movie.id }")
end
#DELETE - delete a movie  record
get '/movies/:id/delete' do
    movie = Movie.find params[:id]
    movie.destroy
    redirect to("/movies")
end



#Director CRUD 
# show all dirs in the table
get '/directors' do
    @directors = Director.all
    erb :directors_index
end
#NEW  - user input fields for a new director 
get '/directors/new' do
    erb :directors_new
end
#CREATE -  commit new record from user input to db
post '/directors' do
    director = Director.new
    director.name = params[:name]
    director.years_active = params[:years_active]
    director.image = params[:image]
    director.save
    redirect to("/directors/#{ director.id }")
    
end
#SHOW show a specific director record in the db   
get '/directors/:id' do
    @director = Director.find params[:id]
    erb :directors_show
end
#EDIT - retrieve user input for an updated record
get '/directors/:id/edit' do
    @director = Director.find params[:id]
    erb :directors_edit
end
#UPDATE - post user input for an updated record
post '/directors/:id' do
    director = Director.find params[:id]
    director.name = params[:name]
    director.years_active = params[:years_active]
    director.image = params[:image]
    director.save
    redirect to("/directors/#{ director.id }")
end
#DELETE - delete a director  record
get '/directors/:id/delete' do
    director = Director.find params[:id]
    director.destroy
    redirect to("/directors")
end