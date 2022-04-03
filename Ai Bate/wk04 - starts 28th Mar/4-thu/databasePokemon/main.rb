require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# homepage Home page
get '/' do
    erb :home
end
# this is index page which shows all pokemons
get '/pokemons' do
    @pokemons = query_db 'SELECT * FROM pokemons'
    erb :pokemons_index
end
# new pokemon
get '/pokemons/new' do
    erb :pokemons_new
end
# adding pokemon
post '/pokemons' do
    query_db "INSERT INTO pokemons (name, regions, image) VALUES ('#{ params[:name] }', '#{ params[:regions] }', '#{ params[:image] }')"
    redirect to('/pokemons')
end


# showing each pokemon
get '/pokemons/:id' do
    @pokemon = query_db "SELECT * FROM pokemons WHERE id=#{ params[:id]}"
    @pokemon = @pokemon.first
    erb :pokemons_show
end
 #editing the pokemon
get '/pokemons/:id/edit' do
    @pokemon = query_db "SELECT * FROM pokemons WHERE id=#{ params[:id]}"
    @pokemon = @pokemon.first
    erb :pokemons_edit
end
 #UPDATE
 post '/pokemons/:id' do
    query_db "UPDATE pokemons SET name='#{ params[:name] }', regions='#{ params[:regions] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    redirect to("/pokemons/#{ params[:id] }")
end

 #DELETE

get '/pokemons/:id/delete' do
    query_db "DELETE FROM pokemons WHERE id=#{ params[:id]}"
    redirect to('/pokemons')
end



def query_db(sql_statement)
    puts sql_statement
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end






