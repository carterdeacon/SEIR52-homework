require 'sinatra' 
require 'sinatra/reloader'
require 'httparty'
book_url = "https://www.googleapis.com/books/v1/volumes?q=title:"

get '/' do
    erb :home        
end

get '/book_query_result' do
    get_book = "#{ book_url}#{ params[:book] }"
    info = HTTParty.get get_book
    @result = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    erb :book_query_result
end