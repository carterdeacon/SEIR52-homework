require 'sinatra'
require 'sinatra/reloader'
require 'httparty'




get '/' do
    erb :home 
end

get '/info' do
    url = "https://www.googleapis.com/books/v1/volumes?q=title:#{params[:book_name]}"
    data = HTTParty.get url
    @img = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]      
    erb :info
end
