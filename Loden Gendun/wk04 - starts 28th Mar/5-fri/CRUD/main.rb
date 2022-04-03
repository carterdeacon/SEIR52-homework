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

# Models ########################################################

class Bird < ActiveRecord::Base
  has_many :sightings, dependent: :destroy
end

class Sighting < ActiveRecord::Base
  belongs_to :bird
end

# # Seed data:
# require 'httparty'
# headers = {
#   'x-ebirdapitoken' => "dh0370q27iv9"
# }
# response = HTTParty.get('https://api.ebird.org/v2/data/obs/AU/recent', :headers => headers)

# response.each { |bird|
#   @bird = Bird.create ({:speciesCode => bird['speciesCode'], :comName => bird['comName'], :sciName => bird['sciName']})

#   @bird.sightings.create ({:locName => bird['locName'], :obsDt => bird['obsDt'], :howMany => bird['howMany'], :lat => bird['lat' ], :lng => bird['lng']})
# }

get '/' do
  erb :home
end

# CREATE

get '/birds/:id/newsighting' do
  erb :birds_newsighting
end

post '/birds/:id/newsighting' do
  @bird = Bird.find_by(id: "#{ params[:id] }")
  @bird.sightings.create  ({:locName => params[:locName], :obsDt => params[:obsDt], :howMany => params[:howMany], :lat => params[:lat], :lng => params[:lng]})
  
  redirect to ("/birds/#{ params[:id] }")
end

# READ
get '/birds' do
  @birds = Bird.all
  erb :birds
end

get '/birds/:id' do
  @bird = Bird.find_by(id: "#{ params[:id] }")
  erb :birds_show
end


# UPDATE

# DELETE
