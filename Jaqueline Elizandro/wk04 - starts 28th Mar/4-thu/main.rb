require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    @movies = query_db("select * from movies")
    erb :home
end

# new - step one
get '/movies/new' do
    erb :movies_new
end

# create - step two
post '/' do
    query_db "insert into movies (name, rate, year_watched, watch_again, comments) values ('#{params[:name]}', '#{params[:rate]}', '#{params[:year_watched]}', '#{params[:watch_again]}', '#{params[:comments]}')"
    redirect to('/')
end

# show
get '/movies/:id' do
    movies = query_db("select * from movies where id=#{params[:id]}")
    @movie = movies.first
    erb :movies_show
end

# edit - step one
get '/movies/:id/edit' do
    movies = query_db("select * from movies where id=#{params[:id]}")
    @movie = movies.first
    erb :movies_edit
end

# update - step two
post '/movies/:id' do
    query_db "update movies set name='#{params[:name]}', rate='#{params[:rate]}', year_watched='#{params[:year_watched]}', watch_again='#{params[:watch_again]}', comments='#{params[:comments]}' where id=#{params[:id]}"
    redirect to("/movies/#{params[:id]}")
end

# delete
get '/movies/:id/delete' do
    query_db "delete from movies where id=#{params[:id]}"
    redirect to('/')
end

def query_db(sql_statement)
    puts sql_statement
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end