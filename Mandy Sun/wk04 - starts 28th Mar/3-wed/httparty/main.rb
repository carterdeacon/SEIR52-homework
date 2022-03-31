require "sinatra"
require "sinatra/reloader"
require "httparty"

get "/" do
    erb :home 
end

get "/result" do
    bookname = params[:book_name]
    book_url="https://www.googleapis.com/books/v1/volumes?q=title:#{bookname}"
    info=HTTParty.get book_url
    @imgURL = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    erb :result

end


