require 'sinatra'
require 'sinatra/reloader'

get '/' do
    erb :home
end


get '/result' do
    require 'httparty'
    book_title = params[:title]
    book_url = "https://www.googleapis.com/books/v1/volumes?q=#{ book_title}"
    info = HTTParty.get(book_url)
    @img =  info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    @title = info["items"][0]["volumeInfo"]["title"]
    @authors = info["items"][0]["volumeInfo"]["authors"].join(', ')
    @desc = info["items"][0]["volumeInfo"]["description"]
    @date = info["items"][0]["volumeInfo"]["publishedDate"]
    erb :result
end
