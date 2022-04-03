require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

# INDEX
get '/digimons' do
    @digimons = query_db "SELECT * FROM digimons"
    erb :digimons_index
end

# NEW
get '/digimons/add' do
    erb :digimons_add
end

#CREATE
post '/digimons' do
    query_db "INSERT INTO digimons (name, type, stage, image) VALUES ('#{ params[:name]}', '#{ params[:type] }', ' #{ params[:stage] }','#{ params[:image] }')"
    redirect to ('/digimons')
end

# SHOW
get '/digimons/:id' do
    @digimon = query_db "SELECT * FROM digimons WHERE id=#{ params[:id]}"
    @digimon = @digimon.first
    erb :digimons_show
end

# EDIT
get '/digimons/:id/edit' do
    @digimon = query_db "SELECT * FROM digimons WHERE id=#{ params[:id] }"
    @digimon = @digimon.first
    erb :digimons_edit
end

# UPDATE 
post '/digimons/:id' do
    query_db "UPDATE digimons SET name='#{ params[:name]}', type='#{ params[:type] }', stage='#{ params[:stage]}', image='#{ params[:image] }' WHERE id='#{ params[:id] }'"
    redirect to ("/digimons/#{ params[:id] }")
end

# DELETE
get '/digimons/:id/delete' do
    query_db "DELETE FROM digimons WHERE id=#{ params[:id] }"
    redirect to ("/digimons")
end



def query_db(sql_statement)
    puts sql_statement # Optional but nice for debugging
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results 
end