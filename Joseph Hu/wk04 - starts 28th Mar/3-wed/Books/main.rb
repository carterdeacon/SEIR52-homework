require 'sinatra' #a DSL Domain Specific Language. It lets you solve a problem in a domain by adding features.
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home 
end

get '/book' do
    title = params[:book_title]
    response = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=#{title}")
    @cover = response["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    @authors = response["items"][0]["volumeInfo"]["authors"][0]
    @description = response["items"][0]["volumeInfo"]["description"]
    erb :book
end