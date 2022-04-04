require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

# Config: next week, Rails will do this for you automatically
ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

# Optional bonus:
ActiveRecord::Base.logger = Logger.new(STDERR)

class Adventure < ActiveRecord::Base
end

class Author < ActiveRecord::Base
end

get '/' do
    erb :home
end

# Index
get '/adventures' do
    @adventures = Adventure.all
    erb :adventures_index
end

# New
get '/adventures/new' do
    erb :adventures_new
end

# Create
post '/adventures' do
    adventure = Adventure.new
    adventure.title = params[:title]
    adventure.system = params[:system]
    adventure.edition = params[:edition]
    adventure.levels = params[:levels]
    adventure.setting = params[:setting]
    adventure.publisher = params[:publisher]
    adventure.year = params[:year]
    adventure.cover = params[:cover]
    adventure.save

    redirect to("/adventures/#{ adventure.id }")
end

# Show
get '/adventures/:id' do
    @adventure = Adventure.find params[:id]
    erb :adventures_show
end

# Edit
get '/adventures/:id/edit' do
    @adventure = Adventure.find params[:id]
    erb :adventures_edit
end

# Update
post '/adventures/:id' do
    adventure = Adventure.find params[:id]
    adventure.title = params[:title]
    adventure.system = params[:system]
    adventure.edition = params[:edition]
    adventure.levels = params[:levels]
    adventure.setting = params[:setting]
    adventure.publisher = params[:publisher]
    adventure.year = params[:year]
    adventure.cover = params[:cover]
    adventure.save

    redirect to("/adventures/#{ adventure.id }")
end

# Delete
get '/adventures/:id/delete' do
    adventure = Adventure.find params[:id]
    adventure.destroy
    redirect to('/adventures')
end

# Authors CRUD

# Index
get '/authors' do
    @authors = Author.all
    erb :authors_index
end

# New
get '/authors/new' do
    erb :authors_new
end

# Create
post '/authors' do
    author = Author.new
    author.name = params[:name]
    author.title = params[:title]
    author.save
    redirect to("/authors/#{ author.id }")
end

# Show
get '/authors/:id' do
    @author = Author.find params[:id]
    erb :authors_show
end

# Edit
get '/authors/:id/edit' do
    @author = Author.find params[:id]
    erb :authors_edit
end

# Update
post '/authors/:id' do
    author = Author.find params[:id]
    author.name = params[:name]
    author.title = params[:title]
    author.save
    redirect to("/authors/#{ author.id }")
end

# Delete
get '/authors/:id/delete' do
    author = Author.find params[:id]
    author.destroy
    redirect to('/authors')
end