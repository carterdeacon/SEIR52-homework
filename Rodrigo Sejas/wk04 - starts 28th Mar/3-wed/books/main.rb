#loading gems

require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

# defines the root homepage routing
get '/' do
    erb :home
end

get '/book' do
    #fetch data from the API and put inside ruby placeholders 
    book_title = params[:title]
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ book_title }"
    # In this example, it will return the URL with 'Jaws' in book title's place

    #The next action will get the JSON info from the URL
    info = HTTParty.get book_url;
    #Next line will return a direct URL to the thumbnail of the book title chosen
    @img_url = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    @title = info["items"][0]["volumeInfo"]["title"]
    @author = info["items"][0]["volumeInfo"]["authors"][0]
    @description = info["items"][0]["volumeInfo"]["description"]
    @published_date = info["items"][0]["volumeInfo"]["publishedDate"]

    erb :book
end