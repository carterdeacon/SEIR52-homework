require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home
end

get '/result' do   
    book = params[:book]
    @result = HTTParty.get "https://www.googleapis.com/books/v1/volumes?q=#{book}"
    erb :result
    require 'pry'
    binding.pry
end
