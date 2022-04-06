require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

Httparty.get book_url;

get '/' do

    erb :home

end

get '/info' do

erb :info

end