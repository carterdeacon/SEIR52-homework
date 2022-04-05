require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'


get '/' do
    erb :home
end


# INDEX
get '/plants' do
    @plants = query_db 'SELECT * FROM plants'
    erb :plants_index
end

# NEW

get '/plants/new' do
    erb :plants_new
end


# CREATE PLANT
post '/plants' do
    query_db "INSERT INTO plants (name, scientific, family, season, image) VALUES ('#{ params[:name] } ', '#{ params[:scientific] } ', '#{ params[:family] }', '#{ params[:season] }', '#{ params[:image] }' )"
    redirect to('/plants') #GET request
end

# SHOW PLANT
get '/plants/:id' do
    @plant = query_db "SELECT * FROM plants WHERE id=#{ params[:id] }"  #you want a single plant.
    @plant = @plant.first
    erb :plants_show
end

# EDIT PLANT
get '/plants/:id/edit' do
    @plant = query_db "SELECT * FROM plants WHERE id=#{ params[:id] }"
    @plant = @plant.first
    erb :plants_edit
end

# UPDATE PLANT
post '/plants/:id' do
    query_db "UPDATE plants SET name='#{ params[:name] } ', scientific='#{ params[:scientific] } ', family='#{ params[:family] }', season='#{ params[:season] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }" 
    redirect to("/plants/#{ params[:id] }")
end

# DELETE PLANT
get '/plants/:id/delete' do
    query_db "DELETE FROM plants WHERE id=#{ params[:id] }"
    redirect to('/plants')

end


def query_db (sql_statement)
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end