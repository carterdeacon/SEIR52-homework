require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home
end

get '/cover' do
    @title = params[:title]

    @book_url = "https://www.googleapis.com/books/v1/volumes?q=#{@title}"

    @book = HTTParty.get(@book_url)

    @cover_url = @book["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]

    erb :cover
end
