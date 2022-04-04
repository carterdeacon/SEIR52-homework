require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

get '/cats' do
    @cats = query_db 'SELECT * FROM cats'
    erb :cats_index
end

get '/cats/new' do
    erb :cats_new
end

post '/cats' do
    query_db "INSERT INTO cats (breed, image) VALUES ('#{ params[:breed] }', '#{ params[:image] }')"
    redirect to ('/cats') 
end

get '/cats/:id' do
    @cat = query_db "SELECT * FROM cats WHERE id = #{ params[:id]}"
    @cat = @cat.first 
    erb :cats_show
end

get '/cats/:id/edit' do
    @cat = query_db "SELECT * FROM cats WHERE id = #{ params[:id]}"
    @cat = @cat.first  
    erb :cats_edit
end

post '/cats/:id' do
    query_db "UPDATE cats SET breed ='#{params[:breed]}', image ='#{params[:image]}' WHERE id=#{params[:id]}"
    redirect to ("/cats/#{params[:id]}")
end

#Delete
get '/cats/:id/delete' do
    query_db "DELETE FROM cats WHERE id=#{params[:id]}"
    redirect to ('/cats')
end

def query_db(sql_statement)
    puts sql_statement 
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end