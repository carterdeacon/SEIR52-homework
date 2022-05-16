require "sinatra"
require "sinatra/reloader"
require "sqlite3"

get "/" do 
    erb:home
end

get "/footballers" do 
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    @footballers = db.execute 'SELECT * FROM footballers'
    # @footballers = query_db 'SELECT * FROM footballers'
    erb:footballers_index
end


# def query_db(sql_statement)
#     puts sql_statement
#     db = SQLite3::Database.new 'database.sqlite3'
#     result = db.execute sql_statement
#     db.close
#     results
# end