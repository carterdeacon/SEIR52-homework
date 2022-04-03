require "sinatra"
require 'sinatra/reloader'
require 'sqlite3'

def query_db(sql_statement)
    puts sql_statement # optional but nice for debugging
    db = SQLite3::Database.new 'database.sql3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end

get '/' do
    erb :home
end

#INDEX
get '/cars' do
    @cars = query_db "SELECT * FROM cars"
    erb :cars_index
end

#NEW
get '/cars/new' do
    erb :cars_new
end

#CREATE
post '/cars' do
   query_db "INSERT into CARS (make, model, body, electric, price, photo) VALUES ('#{ params[:make]}', '#{ params[:model]}', '#{ params[:body]}', '#{ params[:electric]}', '#{ params[:price]}', '#{ params[:photo]}')"
   redirect to('/cars')          
end

#SHOW

get '/cars/:id' do
    @car = query_db "SELECT * FROM cars WHERE id=#{ params[:id]}"
    @car = @car[0]
    erb :cars_show
end

#EDIT

get '/cars/:id/edit' do
    @car = query_db "SELECT * FROM cars WHERE id=#{ params[:id]}"
    @car = @car[0]
    erb :cars_edit
end


#UPDATE

post '/cars/:id' do
    query_db "UPDATE CARS SET make = '#{ params[:make] }', model = '#{ params[:model] }', body = '#{ params[:body] }', electric = '#{ params[:electric] }', price = '#{ params[:price] }', photo = '#{ params[:photo] }' WHERE id = '#{ params[:id]}'"
    redirect to "/cars/#{ params[:id] }"
end

#DELETE

get '/cars/:id/delete' do
    query_db "DELETE FROM cars WHERE id = '#{ params[:id] }'"
    redirect to('/cars')
end











