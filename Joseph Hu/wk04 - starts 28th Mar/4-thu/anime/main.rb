require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
#HOME
get '/' do
    erb :home 
end

#INDEX
get '/animes' do
    @animes = query_db 'SELECT * FROM animes'
    erb :animes_index
end

#NEW
get '/animes/new' do
    erb :animes_new
end


#CREATE
post '/animes' do 
    query_db"INSERT INTO animes (name, genre, rating, image) VALUES ('#{params[:name]}','#{params[:genre]}','#{params[:rating]}','#{params[:image]}')"
    redirect to('/animes') #GET request that redirects to /animes
end


#SHOW
get '/animes/:id' do
    #get the anime
    @anime = query_db "SELECT * FROM animes WHERE id=#{params[:id]}"
    @anime = @anime.first
    erb :animes_show
end

#EDIT

get '/animes/:id/edit' do #convention is to put edit at the end. We want to edit anime id number ...
    @anime = query_db"SELECT * FROM animes WHERE id=#{params[:id]}"
    @anime = @anime.first
    erb :animes_edit
end

#UPDATE
post '/animes/:id' do
    "update soon"
    # #update the anime
    query_db"UPDATE animes SET name='#{params[:name]}',genre='#{params[:genre]}',rating='#{params[:rating]}',image='#{params[:image]}' WHERE id=#{ params[:id]}"
    # #redirect to that anime
    redirect to("/animes/#{params[:id]}") #GET request
end


#DELETE
get '/animes/:id/delete' do
    query_db"DELETE FROM animes WHERE id=#{params[:id]}"
    redirect to('/animes') #redirects to index
end


def query_db(sql_statement)
    puts sql_statement #optional but nice for debugging
    db = SQLite3::Database.new 'database.sqlite3' #author has packaged data in a module. Modules name is SQLite3 the :: means can i use the Database.new functionality.
    #give me a new connection to the SQLite3. They could have just called it 'Database' They wrapped it in a WRAPPER called SQLite3 to avoid conflict with other stuff.
    db.results_as_hash = true   #converts gem arrays into hash, nicer to look at
    results = db.execute sql_statement #'could be SELECT * FROM ...whatever'
    db.close
    results
end