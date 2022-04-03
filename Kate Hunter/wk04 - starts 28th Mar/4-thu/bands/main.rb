require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

# INDEX
# Show all the bands (in summary)

get '/bands' do
    @bands = query_db 'SELECT * FROM bands'
    erb :bands_index
end


#NEW

get '/bands/new' do
    erb :bands_new
    
end

#CREATE

post '/bands' do 
     query_db "INSERT INTO bands (name, country, image) VALUES ('#{ params[:name] }', '#{ params[:country] }', '#{ params[:image] }')"
    redirect to('/bands') # GET
end


#SHOW
# Show a single band in detail

get '/bands/:id' do
    # connect to the database
    # set result as hash = true
    # get the bands
    @band = query_db "SELECT * FROM bands WHERE id=#{ params[:id] }"
    @band = @band.first #extract the butterfly from the array
    erb :bands_show
end


# EDIT

get '/bands/:id/edit' do 
    @bands = query_db "SELECT * FROM bands WHERE id=#{ params[:id] }"
    @bands = @bands.first #extract the butterfly from the array
    erb :bands_edit
end


# UPDATE

post '/bands/:id' do 
    # Update the butterfly
    "UPDATE bands SET name='#{ params[:name]}', country='#{ params[:country] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    redirect to("/bands/#{ params[:id] }")
end
    # Redirect to the added band


# DELETE

get '/bands/:id/delete' do
    query_db "DELETE FROM bands WHERE id=#{ params[:id] }"
    redirect to('/bands') 
end


def query_db(sql_statement)
    puts sql_statement                                  # optional but nice for debugging
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end



