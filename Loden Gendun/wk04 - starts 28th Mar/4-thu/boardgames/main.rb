require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

db = SQLite3::Database.new 'database.sqlite3'
db.results_as_hash = true

get '/' do
    erb :home
end

get '/boardgames' do
    @boardgames = query_db 'SELECT * FROM boardgames'
    erb :boardgames_index
end

# CREATE
get '/boardgames/add' do
    @boardgame = query_db("SELECT * FROM boardgames WHERE id='1'")[0]
    erb :boardgames_add
end

post '/boardgames' do
    query_db "INSERT INTO boardgames (name, player_count, playing_time, age, designer, artist, publisher, rating, image) VALUES ('#{ params[:name] }', '#{ params[:player_count] }', '#{ params[:playing_time] }', '#{ params[:age] }', '#{ params[:designer] }', '#{ params[:artist] }', '#{ params[:publisher] }', '#{ params[:rating] }', '#{ params[:image] }')"

    redirect to ("/boardgames/#{ query_db("SELECT MAX(id) FROM boardgames")[0]['MAX(id)'] }")
end

# READ
get '/boardgames/:id' do
    @boardgame = query_db("SELECT * FROM boardgames WHERE id='#{ params[:id] }'")[0]
    erb :boardgames_display
end

# UPDATE
get '/boardgames/:id/edit' do
    @boardgame = query_db("SELECT * FROM boardgames WHERE id='#{ params[:id] }'")[0]
    erb :boardgames_edit
end

post '/boardgames/:id' do
    query_db "UPDATE boardgames SET name = '#{ params[:name] }', player_count = '#{ params[:player_count] }', playing_time = '#{ params[:playing_time] }', age = '#{ params[:age] }', designer = '#{ params[:designer] }', artist = '#{ params[:artist] }', publisher = '#{ params[:publisher] }', rating = '#{ params[:rating] }', image = '#{ params[:image] }' WHERE id = #{ params[:id] }"

    redirect to ("/boardgames/#{ params[:id] }")
end

# DELETE
get '/boardgames/:id/delete' do
    query_db "DELETE FROM boardgames WHERE id='#{ params[:id] }'"
    redirect to ('/boardgames')
end

def query_db(sql_statement)
    puts sql_statement # Optional but nice for debugging
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end