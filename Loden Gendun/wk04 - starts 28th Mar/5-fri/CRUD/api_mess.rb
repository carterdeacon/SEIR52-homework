require 'httparty'
response = HTTParty.get('https://api.gbif.org/v1/species/1/children').parsed_response

binding.irb