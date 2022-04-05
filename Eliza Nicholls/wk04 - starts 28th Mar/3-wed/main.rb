require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home

end

get '/bookland' do 
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{params["book_title"]}"
    data = HTTParty.get book_url
    @info = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    erb :bookland
end



# use gem
# install httparty

# require 'httparty'
# book_title = 'Jaws' from params
# book_url = "thebooklink#{ book_title }"  interplate will let you use whatever book book_title

# info = HTTParty.get book_url;  << only works in pry

# info.class << kind of a hash but http party
# info[...] ask... info.keys

# follow the chain 

# info["items].class

# info["items][0].keys

# info["items][0]["volumeInfo"].class

# and so on and so forth till... ["thumbnail"]

# is it a hash or array?
# if hash- KEYS 
# if array- INDEX NUMBER

