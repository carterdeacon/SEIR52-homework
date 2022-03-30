require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

# Define path 
get '/' do 
    erb :home

end

get '/book' do
    book_name = params[:title]
    response = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=#{title}")
    @diss = response.items.description

    erb :result

end    



