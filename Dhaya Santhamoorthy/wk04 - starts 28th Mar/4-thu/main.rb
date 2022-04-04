require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

# INDEX 
# Show all the stadiums - summary

get '/stadiums' do
    @stadiums = query_db "SELECT * FROM stadiums"
    erb :stadiums_index
end

get '/stadiums/new' do
    erb :stadiums_new
end

# Create new stadium
post '/stadiums' do
    query_db "INSERT INTO stadiums (name, country, image) VALUES ('#{ params[:name] }', '#{ params[:country] }', '#{ params[:image] }');"
    redirect to('/stadiums')  # GET Request to show updated stadiums after form is submitted
end

# SHOW page - Dynamic URLs
# Displaying information about each stadium

get '/stadiums/:id' do
    @stadium = query_db "SELECT * FROM stadiums WHERE id=#{ params[:id] }"
    @stadium = @stadium.first # To extract the stadium hash from the array
    erb :stadiums_show
end

# Edit stadium /stadiums/234/edit
get '/stadiums/:id/edit' do
    @stadium = query_db "SELECT * FROM stadiums WHERE id=#{ params[:id] }"
    @stadium = @stadium.first # To extract the stadium hash from the array
    erb :stadiums_edit
end

# Update the edited record
post '/stadiums/:id' do
    query_db "UPDATE stadiums SET name='#{ params[:name] }', country='#{ params[:country] }', image='#{ params[:image] }' WHERE id=#{params[:id]}  "
    redirect to("/stadiums/#{ params[:id] }")
end

# DELETE record
get '/stadiums/:id/delete' do
    query_db "DELETE FROM stadiums WHERE id=#{ params[:id] }"
    redirect to('/stadiums') # Please do not kill another stadium
end

def query_db(sql_statement)
    puts sql_statement # Optional statment useful for debugging
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end