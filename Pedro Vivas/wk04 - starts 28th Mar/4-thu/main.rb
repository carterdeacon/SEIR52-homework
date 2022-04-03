require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

#INDEX
get '/dogs' do
    @dogs = query_db("SELECT * FROM dogbreeds")
    erb :dogbreeds_index
end

#NEW
get '/dogs/new' do
    erb :dogbreeds_new
end

#CREATE
#insert the new params to database
post '/dogs' do
    query_db("INSERT INTO dogbreeds (breed_name, breed_size, breed_origin, breed_image) VALUES ('#{params[:name]}', '#{params[:size]}', '#{params[:origin]}', '#{params[:image]}')")
    redirect to('/dogs') #/get
end

#SHOW
get '/dogs/:id' do
    @dog = query_db("SELECT * FROM dogbreeds WHERE id=#{params[:id]}")
    @dog = @dog.first
    erb :dogbreeds_show
end

#EDIT
#modify existing breed
get '/dogs/:id/edit' do
    @dog = query_db("SELECT * FROM dogbreeds WHERE id=#{params[:id]}")
    @dog = @dog.first
    erb :dogbreeds_edit
end

#UPDATE
post '/dogs/:id' do
    query_db("UPDATE dogbreeds SET breed_name='#{ params[:name] }', breed_size='#{ params[:size] }', breed_origin='#{ params[:origin] }', breed_image='#{ params[:image] }' WHERE id=#{ params[:id] }")
    redirect to("/dogs/#{ params[:id] }") #get request redirecting to modified dog
end

#DELETE
get '/dogs/:id/delete' do
    query_db("DELETE FROM dogbreeds WHERE id=#{ params[:id] }")
    redirect to('/dogs')
end


def query_db(sql_statement)
    puts sql_statement # Optional  for debugging
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end