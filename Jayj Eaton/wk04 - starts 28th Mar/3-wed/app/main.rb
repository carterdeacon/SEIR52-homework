require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home
end



get '/bookpage' do
    title = params[:title]
    response = HTTParty.get "https://www.googleapis.com/books/v1/volumes?q=title:#{title}"
    @cover = response["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    @description = response["items"][0]["volumeInfo"]["description"]
    # require 'pry'
    # binding.pry
    erb :bookpage

end
