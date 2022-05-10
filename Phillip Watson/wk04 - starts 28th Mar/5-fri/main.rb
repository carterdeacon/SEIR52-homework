require 'sinatra'
require 'sinatra/reloader'  
require 'active_record'
require 'sqlite3'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Anime < ActiveRecord::Base
end

class Charater < ActiveRecord::Base
end

get '/' do

    erb :home
end
