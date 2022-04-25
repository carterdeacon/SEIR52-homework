require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home
end

get '/output' do
    @title = params[:title]
    response = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:#{@title}")
    @thumbnail_url = response["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    erb :output
end
