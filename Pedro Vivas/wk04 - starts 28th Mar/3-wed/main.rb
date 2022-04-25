require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
    erb:home
end

get '/result' do
    book_name = params[:book]
    @book_url = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:#{book_name}")
    erb:result
end