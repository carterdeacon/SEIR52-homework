require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end


get '/cameras' do
    @cameras = query_db 'SELECT * FROM cameras'
    erb :cameras
end

get '/cameras/new' do
    erb :cameras_new
end 


post '/cameras' do
    query_db "INSERT INTO cameras (name, brand, image) VALUES ('#{ params[:name] }', '#{ params[:brand] }', '#{ params[:image] }')"
    redirect to('/cameras')
end

get '/cameras/:id' do
    @camera = query_db "SELECT * FROM cameras WHERE id=#{ params[:id] }"
    @camera = @camera.first
    erb :camera_list
end

get '/cameras/:id/edit' do
    @camera = query_db "SELECT * FROM cameras WHERE id=#{ params[:id] }"
    @camera = @camera.first
    erb :camera_edit
end 

post '/cameras/:id' do
    query_db "UPDATE cameras SET name='#{ params[:name] }', brand='#{ params[:brand] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    redirect to("/cameras/#{ params[:id] }")
end 

get '/cameras/:id/delete' do
    query_db "DELETE FROM cameras WHERE id=#{ params[:id] }"
    redirect to('/cameras')
end 




def query_db(sql_statement)
    puts sql_statement # optional but nice for debigging
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end