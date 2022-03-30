require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home
end

get '/info' do
    @book_title = params[:name]
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_title }"
    info = HTTParty.get book_url;
    @book_cover = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    @book_author = info["items"][0]["volumeInfo"]["authors"][0].capitalize    
    erb :info
end