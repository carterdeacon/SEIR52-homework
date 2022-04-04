require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

#CONFIG
ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

# Optional bonus to log the query commands from active_record
ActiveRecord::Base.logger = Logger.new(STDERR)

# Models ###
class Author < ActiveRecord::Base
    has_many :books
end

class Book < ActiveRecord::Base
    belongs_to :author
end

# CRUD BOOK - Home
get '/' do
    erb :home
end

# Books index
get '/books' do
    @books = Book.all
    erb :books_index
end

# CREATE Book
get '/books/new' do
    erb :books_new
end

post '/books/new' do
    book = Book.new 
    book.name = params[:name]   
    author = Author.find_by(name: params[:author])    
    if author == nil
        author = Author.new
        author.name = params[:author]  
        author.save        
    end
    book.author_id = author.id
    book.genre = params[:genre]
    book.image = params[:image]
    book.save
    redirect to('/books') # GET request to show the books index page
end

# SHOW individual books
# Dynamic URLs
get '/books/:id' do
    @book = Book.find params[:id]
    @author = Author.find(@book.author_id)
    erb :books_show
end

# EDIT Book
get '/books/:id/edit' do    
    @book = Book.find params[:id]
    @author = Author.find(@book.author_id)
    erb :books_edit
end

post '/books/:id' do
    book = Book.find params[:id]
    book.name = params[:name]
    author = Author.find_by(name: params[:author])    
    if author.nil?
        author = Author.new
        author.name = params[:author]  
        author.save        
    end    
    book.author_id = author.id
    book.genre = params[:genre]
    book.image = params[:image]
    book.save
    redirect to("books/#{ params[:id] }")
end 

# DELETE Book
get '/books/:id/delete' do
    book = Book.find params[:id]
    book.destroy
    redirect to('/books')
end

# CRUD AUTHOR - Home
get '/authors' do
    @authors = Author.all
    erb :authors_index
end

# CREATE Author
get '/authors/new' do
    erb :authors_new
end

post '/authors/new' do
    author = Author.new
    author.name = params[:name]  
    author.image = params[:image]
    author.bio = params[:bio]
    author.save
    redirect to('/authors') # GET request to show the authors index page
end

# SHOW each author page
# Dynamic URLs
get '/authors/:id' do
    @author = Author.find params[:id]
    @books = Book.where(author_id: params[:id])       
    erb :authors_show
end

# EDIT Author
get '/authors/:id/edit' do
    @author = Author.find params[:id]   
    erb :authors_edit
end

post '/authors/:id' do
    author = Author.find params[:id]
    author.name = params[:name]  
    author.bio = params[:bio]
    author.image = params[:image]
    author.save
    redirect to("authors/#{ params[:id] }")
end

# DELETE Author
get '/authors/:id/delete' do
    author = Author.find params[:id]
    author.destroy
    redirect to('/authors')
end