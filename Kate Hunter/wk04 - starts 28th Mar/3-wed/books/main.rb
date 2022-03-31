require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

# Define path 
get '/' do 
    erb :home

end

get '/book' do
    book_name = params[:book_name]
    response = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=#{book_name}")
    @diss = response["items"][0]["volumeInfo"]["imageLinks"]["smallThumbnail"]

    erb :result

end    



