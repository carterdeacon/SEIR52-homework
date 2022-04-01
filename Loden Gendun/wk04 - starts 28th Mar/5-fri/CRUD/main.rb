require 'sinatra'
require 'sinatra/reloader'

require 'active_record'
require 'sqlite3'

require 'httparty'

headers = {
  'x-ebirdapitoken' => "dh0370q27iv9"
}
response = HTTParty.get('https://api.ebird.org/v2/data/obs/AU/recent', :headers => headers)

# Config: next week, Rails will do this for you automatically
ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

# Optional bonus:
ActiveRecord::Base.logger = Logger.new(STDERR)

# Models ########################################################

# class Animal < ActiveRecord::Base
# end

# {"speciesCode"=>"asikoe3", "comName"=>"Pacific Koel", "sciName"=>"Eudynamys orientalis", "locId"=>"L963957", "locName"=>" Ellenborough", "obsDt"=>"2022-04-02 02:14", "howMany"=>1, "lat"=>-31.4447925, "lng"=>152.468133, "obsValid"=>true, "obsReviewed"=>false, "locationPrivate"=>true, "subId"=>"S106012286"} 

# speciesCode TEXT,
# comName TEXT,
# sciName TEXT,
# locID TEXT
# locName TEXT,
# obsDt TEXT
# howmany NUMBER,
# lat NUMBER,
# lng NUMBER

class Sighting < ActiveRecord::Base
    def initialize(speciesCode, comName, sciName, locID, locName, obsDt, howmany, lat, lng)
        @speciesCode = speciesCode
        @comName = comName
        @sciName = sciName
        @locID = locID
        @locName = locName
        @obsDt = obsDt
        @howmany = howmany
        @lat = lat
        @lng = lng
    end
end

response.take(10).each { |bird|
    # Bird.new(bird['speciesCode'], bird['comName'], bird['sciName'], bird['locID'], bird['locName'], bird['obsDt'], bird['howmany'], bird['lat'], bird['lng']).save


    tweety = Sighting.new(:speciesCode => bird['speciesCode'], :comName => bird['comName'], :sciName => bird['sciName'], :locID => bird['locID'], :locName => bird['locName'], :obsDt => bird['obsDt'], :howmany => bird['howmany'], :lat => bird['lat' ], :lng => bird['lng']).save

    # spotting.speciesCode = bird['speciesCode']
    # spotting.comName = bird['comName']
    # spotting.sciName = bird['sciName']
    # spotting.locID = bird['locID']
    # spotting.locName = bird['locName']
    # spotting.obsDt = bird['obsDt']
    # spotting.howMany = bird['howMany']
    # spotting.lat = bird['lat']
    # spotting.lng = bird['lng']
    # spotting.save
}
