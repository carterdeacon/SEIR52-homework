require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'


ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDOUT) 

# Models
class Director < ActiveRecord::Base
end


class Film < ActiveRecord::Base
end


get '/' do
    erb :home
end

# 1. INDEX - All my favourite directors

get '/directors' do
    @directors = Director.all
    erb :directors_index
end

# 3. NEW
get '/directors/new' do
    erb :directors_new
end
 
# 4. CREATE
post '/directors' do
    director =  Director.new
    director.name = params[:name]
    director.country = params[:country]
    director.image = params[:image]
    director.save
    redirect to ("/directors/#{ director.id }")
end


# 2. SHOW/READ
get '/directors/:id' do
    @director = Director.find params[:id]
    erb :directors_show
end

# 5. EDIT/READ
get '/directors/:id/edit' do 
    @director = Director.find params[:id]
    erb :directors_edit
end

# 6. UPDATE
post '/directors/:id' do
    director = Director.find params[:id]
    director.name = params[:name]
    director.country = params[:country]
    director.image = params[:image]
    director.save
    redirect to("/directors/#{ director.id }")
end


# 7. DELETE
get '/directors/:id/delete' do
    director = Director.find params[:id]
    director.destroy
    redirect to('/directors')
end



########## FILMS CRUD #############

# 1. INDEX - All my favourite films

get '/films' do
    @films= Film.all
    erb :films_index
end


# 3. NEW
get '/films/new' do
    erb :films_new
end
 
# 4. CREATE
post '/films' do
    film =  Film.new
    film.title = params[:title]
    film.director = params[:director]
    film.country = params[:country]
    film.year = params[:year]
    film.image = params[:image]
    film.save
    redirect to ("/films/#{ film.id }")
end


# 2. SHOW/READ
get '/films/:id' do
    @film = Film.find params[:id]
    erb :films_show
end

# 5. EDIT/READ
get '/films/:id/edit' do 
    @film = Film.find params[:id]
    erb :films_edit
end

# 6. UPDATE
post '/films/:id' do
    film = Film.find params[:id]
    film.title = params[:title]
    film.director = params[:director]
    film.country = params[:country]
    film.year = params[:year]
    film.image = params[:image]
    film.save
    redirect to("/films/#{ film.id }")
end


# 7. DELETE
get '/films/:id/delete' do
    film = Film.find params[:id]
    film.destroy
    redirect to('/films')
end