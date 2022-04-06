require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

#Config ruby on rails next week. Rails will do it for us.
ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database =>'database.sqlite3'
);

# Optional:
ActiveRecord::Base.logger = Logger.new(STDERR)

## Models ######### 
class Bands < ActiveRecord::Base
    belongs_to :venue, :optional => true
end    

class Venues < ActiveRecord::Base
    has_many :bands
end    

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
# Inserts the parameters from the new form into the database
post '/bands' do 
    bands = Bands.new
    bands.name = params[:name]
    bands.country = params[:country]
    bands.image = params[:image]
    band.venue_id = params[:venue_id] 
    bands.save 
    #  query_db "INSERT INTO bands (name, family, image) VALUES ('#{ params[:name] }', '#{ params[:family] }', '#{ params[:image] }')"
    redirect to('/bands') # GET
end

#SHOW
# Show a single bands in detail

get '/bands/:id' do
    # connect to the database
    # set result as hash = true
    # get the butterflies
    @band = Bands.find params[:id]
 

    # @bands = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
    # @bands = @bands.first #extract the bands from the array
    erb :bands_show
end

# EDIT /butterflies/77/edit
get '/bands/:id/edit' do
    @bands = Bands.find params[:id] 
    # @bands = query_db "SELECT * FROM bands WHERE id=#{ params[:id] }"
    # @bands = @bands.first #extract the bands from the array
    erb :butterflies_edit
end


# UPDATE
post '/bands/:id' do 
    # Update the bands
    bands = Bands.find params[:id]
    bands.name = params[:name]
    bands.family = params[:family]
    bands.image = params[:image]
    bands.venue_id = params[:venue_id]
    bands.save
    #"UPDATE butterflies SET name='#{ params[:name]}', family='#{ params[:family] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    redirect to("/bands/#{ params[:id] }")
end
    # Redirect to that bands

# DELETE

get '/bands/:id/delete' do
    bands = bands.find params[:id]
    bands.destroy
    # query_db "DELETE FROM butterflies WHERE id=#{ params[:id] }"
    redirect to('/butterflies') 
end

def query_db(sql_statement)
    puts sql_statement # optional but nice for debugging
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end


# Plants CRUD #############################

# INDEX
get '/venues' do 
    @venues = Venues.all
    erb :venues_index
end

#NEW
get '/venues/new' do
    erb :venues_new 
end


#CREATE
post '/venues' do 
    venue = Venues.new
    venues.name = params[:name]
    venues.image = params[:image]
    venues.save
    redirect to("/venues/#{ venue.id }")
end

#SHOW
get '/venues/:id' do 
    @venue = Venues.find params[:id]
    erb :venues_show
end


#EDIT
get '/venues/:id/edit' do
    @venue = Venues.find params[:id]
    erb :venues_edit
end

#UPDATE
post '/venues/:id' do 
    venue = Venues.find params[:id]
    venue.name = params[:name]
    venue.image = params[:image]
    venue.save
    redirect to("/[venues]/#{ params[:id] }")
end


#DELETE
get '/venues/:id/delete' do 
    venue = Venues.find params[:id]
    venue.destroy 
    redirect to('/venues')
end    

