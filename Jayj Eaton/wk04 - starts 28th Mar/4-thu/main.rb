require 'sqlite3'
require 'sinatra'
require 'sinatra/reloader'

# homepage
get '/' do
    erb :home
end
# index
get '/skaters' do
    @skaters = query_db 'SELECT * FROM skaters'
    erb :skaters_index
end
# new
get '/skaters/new' do
    erb :skaters_new
end
# create
post '/skaters' do
    query_db "INSERT INTO skaters (first_name, last_name, birthyr, location, description, image) VALUES ('#{ params[:first_name] }', '#{ params[:last_name] }', '#{ params[:birthyr] }', '#{ params[:location] }', '#{ params[:description] }', '#{ params[:image] }')"
    redirect to ('/skaters')
end
# show
get '/skaters/:id' do
    @skater = query_db "SELECT * FROM skaters WHERE id=#{ params['id'] }"
    @skater = @skater.first
    erb :skaters_show
end
# edit
get '/skaters/:id/edit' do
    @skater = query_db "SELECT * FROM skaters WHERE id=#{ params['id'] }"
    @skater = @skater.first
    erb :skaters_edit
end
# delete
get '/skaters/:id/delete' do
    query_db "DELETE FROM skaters WHERE id=#{ params[:id] }"
    redirect to('/skaters')
end
# update
post '/skaters/:id' do
    query_db "UPDATE skaters SET first_name='#{ params[:first_name] }', last_name='#{ params[:last_name] }', birthyr='#{ params[:birthyr] }', location='#{ params[:location] }', description='#{ params[:description] }', image='#{ params[:image] }' WHERE id=#{ params[:id]}"
    redirect to ('/skaters')
end

# query function
def query_db(sql_statement)
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end