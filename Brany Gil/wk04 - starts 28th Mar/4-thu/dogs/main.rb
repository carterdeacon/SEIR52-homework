require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do

    erb :home

end

get '/dogs' do


@dogs = query_db 'SELECT * FROM dogs'
erb :dogs_index

end

# new page

get '/dogs/new' do

    erb :dogs_new


   
end

post '/dogs' do

    query_db "INSERT INTO dogs (name, breed, image) VALUES ('#{ params[:name] }', '#{ params[:breed] }', '#{ params[:image] }')"
    redirect to('/dogs')  # to create bty

end

get '/dogs/:id' do
   @dogs = query_db "SELECT * FROM dogs WHERE id=#{ params[:id] }"
   @dogs = @dogs.first
   erb :dogs_show


end

def query_db(sql_statement)
    
    puts sql_statement
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
     results = db.execute sql_statement
     db.close
     results
   
end































