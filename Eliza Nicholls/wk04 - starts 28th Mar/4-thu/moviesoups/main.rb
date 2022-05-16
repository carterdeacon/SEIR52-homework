require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    "soup page"
    erb :home
end

get '/soups' do
    @soups = query_db 'SELECT * FROM soups'
    erb :soups_index
end

get '/soups/new' do
    erb :soups_new
end

post '/soups' do
    query_db "INSERT INTO soups (movie, soupname, scene_action, description_soup, desireabilty, image) VALUES ('#{params[:movie]}', '#{params[:soupname]}', '#{params[:scene_action]}', '#{params[:description_soup]}', '#{params[:desireabilty]}', '#{params[:image]}')"
    redirect to('/soups')
end

get '/soups/:id' do
    @soup = query_db "SELECT * FROM soups WHERE id=#{params[:id]}"
    @soup = @soup.first
    erb :soups_show
end

get '/soups/:id/edit' do
    "edit coming soon"
    @soup = query_db "SELECT * FROM soups WHERE id=#{params[:id]}"
    @soup = @soup.first
    erb :soups_edit
end

post '/soups/:id' do
    query_db "UPDATE soups SET movie='#{ params[:movie] }', soupname='#{ params[:soupname] }', scene_action='#{ params[:scene_action] }', description_soup='#{params[:description_soup]}', desireabilty='#{params[:desireabilty]}', image='#{params[:image]}' WHERE id=#{ params[:id] }"
    redirect to("/soups/#{params[:id]}")
end

get '/soups/:id/delete' do
    query_db "DELETE FROM soups WHERE id=#{params[:id]}"
    redirect to('/soups') 
    end

def query_db(sql_statement)
    puts sql_statement
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end