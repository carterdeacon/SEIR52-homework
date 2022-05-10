require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

# Optional bonus: what does this even do?
ActiveRecord::Base.logger = Logger.new(STDERR)

class Podcast < ActiveRecord::Base
    belongs_to :project
end

class Project < ActiveRecord::Base 
    has_many :podcast
end

get '/' do
    erb :home
end

# INDEX
# Show all the butterflies (in summary)
get '/podcasts' do
    @podcasts = Podcast.all
    erb :podcasts_index
end

# NEW
# A blank form in which to describe a new podcast
get '/podcasts/new' do
    erb :podcasts_new
end

# CREATE
# Inserts the parameters from the NEW form into the database
post '/podcasts' do
    podcast = Podcast.new
    podcast.number = params[:number]
    podcast.title = params[:title] 
    podcast.theme = params[:theme]
    podcast.guest_image = params[:guest_image]
    podcast.save
    redirect to('/podcasts') # GET
end

# SHOW
# Show a single podcast (in detail)
get '/podcasts/:id' do
    @podcast = Podcast.find params[:id]
    erb :podcasts_show
end

# EDIT
# A prefilled form in which to modify an existing podcast
get '/podcasts/:id/edit' do
    @podcast = Podcast.find params[:id]
    erb :podcasts_edit
end

# UPDATE
# Updates the database with the parameters entered in the EDIT form
post '/podcasts/:id' do
    podcast = Podcast.find params[:id]
    podcast.number = params[:number]
    podcast.title = params[:title] 
    podcast.theme = params[:theme]
    podcast.guest_image = params[:guest_image]
    podcast.save
    redirect to("/podcasts/#{ params[:id] }") # GET request
end

# DELETE
# Deletes the podcast entirely from the database
get '/podcasts/:id/delete' do
    podcast = Podcast.find params[:id]
    podcast.destroy
    redirect to('/podcasts') # choose your next victim
end

##have a column in theme table called theme_id

