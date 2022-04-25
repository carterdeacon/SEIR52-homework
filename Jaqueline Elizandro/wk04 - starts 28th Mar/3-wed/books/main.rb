require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home
end

get '/display' do
    title = params[:book_title]
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{title}"
    info_book = HTTParty.get book_url
    @volume_info = info_book["items"][0]["volumeInfo"]
    erb :display
end