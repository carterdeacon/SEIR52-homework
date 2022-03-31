require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
    erb :home
end

get '/info' do
    
    title = params[:title]
    @info = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=#{title}")
    # require 'pry'
    # binding.pry
    erb :info
end