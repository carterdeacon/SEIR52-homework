require "sinatra"
require 'sinatra/reloader'
require 'stock_quote'

get '/' do 
    erb:home
end

get '/info' do
    erb:info
end