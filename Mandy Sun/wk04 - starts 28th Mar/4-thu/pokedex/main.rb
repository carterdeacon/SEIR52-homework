require "sinatra"
require "sinatra/reloader"
require "sqlite3"


def query_db (sql_statement)
    db = SQLite3::Database.new "database.sqlite3"
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close 
    results 
end


get "/" do
    erb :home
end

get "/pokemons" do
    @pokemons = query_db "SELECT * FROM pokemons"
    erb :pokemons_index
end

get "/pokemons/new" do
    erb :pokemons_new
end


get "/pokemons/:id" do
    @pokemons = query_db "SELECT * FROM pokemons WHERE id = #{params[:id]}"
    @pokemons = @pokemons.first
    erb :pokemons_show
end

post "/pokemons" do
    query_db "INSERT INTO pokemons (name, category, abilities, image) VALUES ('#{params[:name]}','#{params[:category]}','#{params[:abilities]}', '#{params[:image]}')"
    redirect to('/pokemons')
end

get "/pokemons/:id/edit" do
    @pokemons = query_db "SELECT * FROM pokemons WHERE id = #{params[:id]}"
    @pokemons = @pokemons.first
    erb :pokemons_edit
end

post "/pokemons/:id" do
    query_db "UPDATE pokemons SET name= '#{params[:name]}',category= '#{params[:category]}',abilities='#{params[:abilities]}', image= '#{params[:image]}' WHERE id =#{params[:id]}"
    redirect to("/pokemons/#{params[:id]}")
end

get "/pokemons/:id/delete" do
    query_db "DELETE FROM pokemons WHERE id=#{params[:id]}"
    redirect to('/pokemons') 
end

