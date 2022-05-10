require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'


get '/' do

    "Hello"

    erb :home

end

get '/info' do

   
    url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ params["info"] }"
    info = HTTParty.get (url)
    @img = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    @author = info["items"][0]["volumeInfo"]["authors"][0]
    @price = info["items"][0]["saleInfo"]["listPrice"][0]
    erb :info
    #require 'pry'
    #binding.pry
end
