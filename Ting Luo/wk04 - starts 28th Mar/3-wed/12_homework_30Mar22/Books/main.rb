require "sinatra"
require "sinatra/reloader"
require "httparty"

get "/" do
    erb :home
end

get "/info" do
    "result coming soon"
    @book_title = params[:book_title]
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@book_title}"
    info = HTTParty.get book_url

    @book_author = info["items"][0]["volumeInfo"]["authors"].join()
    @publish_date = info["items"][0]["volumeInfo"]["publishedDate"]
    @thumbnail = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    @book_description = info["items"][0]["volumeInfo"]["description"]

    erb :info
end