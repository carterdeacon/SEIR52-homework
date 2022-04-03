require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'

get '/' do
    erb :home
end

#INDEX - Summary of products
get '/products' do
    db = SQLite3::Database.new("database.sqlite3") #connecting with the db and store in a var 'db'
    db.results_as_hash = true
    @products = query_db "SELECT * FROM products;"
    erb :products_index
end

# NEW

get '/products/new' do
    erb :products_new
end

# CREATE
post '/products' do
    query_db "INSERT INTO products (name, brand, type, sku, image, manual) VALUES ('#{ params[:name] }', '#{ params[:brand] }', '#{ params[:type] }', '#{ params[:sku] }', '#{ params[:image] }', '#{ params[:manual] }')"
    redirect to('/products')
end

# SHOW
# Single product in detail

get '/products/:id' do
    @product = query_db "SELECT * FROM products WHERE id=#{ params[:id] }"
    @product = @product[0]
    erb :product_show
end

# EDIT
get '/products/:id/edit' do
    @product = query_db "SELECT * FROM products WHERE id=#{ params[:id] }"
    @product = @product[0]
    erb :product_edit
end

# UPDATE
post '/products/:id' do
    query_db "UPDATE products SET name='#{ params[:name] }', brand='#{ params[:brand] }', type='#{ params[:type] }', sku='#{ params[:sku] }', image='#{ params[:image] }', manual='#{ params[:manual] }' WHERE id=#{ params[:id] }"
    redirect to("/products/#{ params[:id] }")
end

# DELETE
get '/products/:id/delete' do
    query_db "DELETE FROM products WHERE id=#{ params[:id] }"
    redirect to("/products")
end

def query_db(sql_statement)
    puts sql_statement # Optional but nice for debugging
    db = SQLite3::Database.new 'database.sqlite3' #connecting with the db and store in a var 'db'
    db.results_as_hash = true
    results =  db.execute sql_statement #param passed to query the db in sql_statement
    db.close
    results
end