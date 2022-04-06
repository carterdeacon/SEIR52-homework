require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do                                                                     #home
    erb :home
end

get '/impulses' do                                                             #list the db table  - whole catalogue 
     @impulses = query_db 'SELECT * FROM impulses'
     puts @impulses
    erb :impulses_index  
end

get '/impulses/new' do                                                         #get user input for new record
    erb :impulses_new
end

post '/impulses' do                                                             #add a new record
    query_db "INSERT INTO impulses (catalog_number,artist,album_name,cover_art) VALUES
    ('#{ params[:catalog_number]  }','#{ params[:artist] }','#{ params[:album_name] }','#{ params[:cover_art] }')"
    redirect to('/impulses')
end

get '/impulses/:id' do                                                          #show a db record by id
    impulse = query_db "SELECT * FROM impulses WHERE id=#{ params[:id] }"
    @impulse = impulse.first
    erb :impulses_show
end

get '/impulses/:id/edit' do                                                     #render a db record to the edit form
    impulse = query_db "SELECT * FROM impulses WHERE id=#{ params[:id] }"
    @impulse = impulse.first
    erb :impulses_edit
end

post '/impulses/:id' do                                                          #update a db record
    query_db "UPDATE impulses SET catalog_number='#{ params[:catalog_number] }',artist='#{ params[:artist] }',
    album_name='#{ params[:album_name] }',cover_art='#{ params[:cover_art] }' WHERE id='#{ params[:id] }' "
    redirect to("/impulses/#{ params[:id] }")
end

get '/impulses/:id/delete' do                                                     #delete an db record
    query_db "DELETE FROM impulses WHERE id=#{ params[:id] }"
    redirect to('/impulses')
end

def query_db(sql_statement)                                                       # database handler                              
    db = SQLite3::Database.new 'database.sqlite3'       
    db.results_as_hash = true                           
    results = db.execute sql_statement                  
    db.close                                            
    results                                            
end
