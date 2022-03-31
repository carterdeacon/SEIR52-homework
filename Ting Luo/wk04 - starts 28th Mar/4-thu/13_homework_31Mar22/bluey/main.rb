require "sinatra"
require "sinatra/reloader"
require "sqlite3"

# HOME
get "/" do
    erb :home
end
#INDEX
get "/bluey" do
    @bluey_family = query_db "SELECT * FROM bluey"
    erb :bluey_index
end

#NEW
get "/bluey/new" do
    erb :bluey_new
end

#SHOW
get "/bluey/:id" do
    @character = query_db "SELECT * FROM bluey WHERE id=?", [params[:id]]
    @character = @character.first
    erb :bluey_show
end

#CREATE
post "/bluey" do
    query_db "INSERT INTO bluey (name, breed, image) VALUES (?,?,?)",[params[:name],params[:breed],params[:image]]
    redirect to('/bluey')
end

#EDIT
get "/bluey/:id/edit" do
    @character = query_db "SELECT * FROM bluey WHERE id=?",[params[:id]]
    @character = @character.first
    erb :bluey_edit
end

#UPDATE
post "/bluey/:id" do
    query_db "UPDATE bluey SET name = ?, breed = ?, image = ? WHERE id =? ", [params[:name],params[:breed],params[:image],params[:id]]
    
    #query_db "UPDATE bluey SET name = '#{params[:name]}', breed = '#{params [:breed]}', image = '#{params[:image]}' WHERE id =#{params[:id]}"
    redirect to("/bluey/#{params[:id]}")
end

#DELETE
get "/bluey/:id/delete" do
    query_db "DELETE FROM bluey WHERE id=?", [params[:id]]
    redirect to("/bluey")
end


def query_db (sql_statement, db_params=[])
    puts sql_statement   #optional for debugging

    #module SQLite3, after :: is the Database function and new connection created to the file name 
    ## make it unique: SQLite3 version Database
    #talk to database
    db = SQLite3::Database.new "database.sqlite3"
    db.results_as_hash = true
    # access to the data from the database
    results = db.execute(sql_statement, db_params)
    db.close
    results
end

