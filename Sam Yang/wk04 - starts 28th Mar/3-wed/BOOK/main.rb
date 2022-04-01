require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'

get '/' do
    erb :home
end

get '/info' do
    title = params[:title]
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ title }"
    book_dpt = HTTParty.get(book_url)
    @thumbnail = book_dpt["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    erb :info
end