require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

# Spaceship Index
get '/spaceships' do
    @spaceships = query_db 'SELECT * FROM spaceships'
    erb :spaceships_index
end

# New
get '/spaceships/add' do
    erb :spaceships_add
end

# Create
post '/spaceships' do
    query_db "INSERT INTO spaceships (name, class, affiliation, source, image) VALUES ('#{ params[:name] }', '#{ params[:class] }', '#{ params[:affiliation] }', '#{ params[:source] }', '#{ params[:image] }')"
    redirect to('/spaceships') # Get request
end

# Show
get '/spaceships/:id' do
    @spaceship = query_db "SELECT * FROM spaceships WHERE id=#{ params[:id] }"
    @spaceship = @spaceship.first
    erb :spaceships_show
end

# Edit
get '/spaceships/:id/edit' do
    @spaceship = query_db "SELECT * FROM spaceships WHERE id=#{ params[:id] }"
    @spaceship = @spaceship.first
    erb :spaceships_edit
end

# Update
post '/spaceships/:id' do
    query_db "UPDATE spaceships SET name='#{ params[:name] }', class='#{ params[:class] }', affiliation='#{ params[:affiliation] }', source='#{ params[:source] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    redirect to("/spaceships/#{ params[:id] }")
end

# Delete
get '/spaceships/:id/delete' do
    query_db "DELETE FROM spaceships WHERE id=#{ params[:id] }"
    redirect to('/spaceships')
end

# Database Query Method
def query_db(sql_statement)
    puts sql_statement # Optional but nice for debugging
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end