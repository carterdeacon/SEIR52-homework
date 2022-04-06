require "sinatra"
require "sinatra/reloader"
require "sqlite3"
require 'active_record' 

def query_db (sql_statement)
    db = SQLite3::Database.new "database.sqlite3"
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close 
    results 
end

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Director < ActiveRecord::Base
    has_many :movies
end

class Movie < ActiveRecord::Base
    belongs_to :director, foreign_key: "director_id"
end

get "/" do 
    erb :home
end

get "/directors" do
    @director = Director.all
    erb :director_index
end

get "/directors/new" do
    erb :director_new
end

post "/directors" do
    director = Director.new
    director.name = params[:name]
    director.save
    redirect to("/directors")
end




get "/directors/:id" do
    @director = Director.find params[:id]
    @movies = @director.movies
    erb :director_show
end

get "/movies/:id" do
    @movies = Movie.find params[:id]
    erb :movie_show
end
    
get "/movies/:id/edit" do
    @movies = Movie.find params[:id]
    erb :movie_edit
end

post "/movies/:id" do
    movie = Movie.find params[:id]
    movie.name = params[:name]
    movie.image = params[:image]
    movie.save
    redirect to ("/movies/#{params[:id]}")
end

get "/movies/:id/delete" do
    movie = Movie.find params[:id]
    movie.destroy
    redirect to("/directors/#{movie.director_id}")
end

get "/directors/:id/edit" do
    @director = Director.find params[:id] 
    erb :director_edit
end

post "/directors/:id" do
    director = Director.find params[:id] 
    director.name=params[:name]
    director.save
    movie = Movie.new
    movie.name = params[:movie_name]
    movie.image=params[:image]
    movie.director_id = params[:id]
    movie.save
    redirect to("/directors/#{params[:id]}")
end

get "/directors/:id/delete" do
    director = Director.find params[:id]
    director.destroy
    redirect to("/directors")
end