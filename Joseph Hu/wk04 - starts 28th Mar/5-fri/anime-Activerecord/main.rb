require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Anime < ActiveRecord::Base
    belongs_to :studio #associating studio with anime. An anime BELONGS to a studio
end

class Studio < ActiveRecord::Base
    has_many :anime #A Studio HAS MANY animes
end

#HOME
get '/' do
    erb :home  
end

#INDEX
get '/animes' do
    @animes = Anime.all #Uses ActiveRecord to access all the objects in the Anime
    erb :animes_index
end

#NEW
get '/animes/new' do
    erb :animes_new 
end


#CREATE
post '/animes' do 
    anime = Anime.new
    anime.title = params[:title]
    anime.genres = params[:genres]
    studio = Studio.find_by(name: params[:studio])
    if studio.nil?
        studio = Studio.new
        studio.name = params[:studio]
        studio.save
    end
    anime.studio_id = studio.id
    anime.image= params[:image]
    anime.save
    redirect to("/animes/#{anime.id}") #GET request that redirects to /animes
end


#SHOW
get '/animes/:id' do #takes the anime being iterated from the Index page via id.
    #get the anime
    @anime = Anime.find params[:id] #finds the anime object in the animes table from the specific :id from Index 
    @studio = Studio.find(@anime.studio_id) #takes the anime object and uses the studio_id (referencing the primary key id of the studio in the studio's table)
    #uses the studio_id to find the object in the studios table with the same id and stores it in @studio
    erb :animes_show
end

#EDIT

get '/animes/:id/edit' do #convention is to put edit at the end. We want to edit anime id number ...
    @anime = Anime.find params[:id]
    @studio = Studio.find(@anime.studio_id)
    erb :animes_edit
end

#UPDATE
post '/animes/:id' do
    anime = Anime.find params[:id] #find the specific anime in the Anime table using the specific :id from the edit table
    anime.title = params[:title] #changes the title to be the input value of title
    anime.genres = params[:genres]
    studio = Studio.find_by(name: params[:studio])#finds the specific studio object related to the anime being updated by checking if the name of the :studio input is the same as the "name" key value in the studio object
    if studio.nil? #if the studio object is not in the database
        studio = Studio.new #create a new object to enter into the database
        studio.name = params[:studio] #set it's name value to be the :studio input value in the edit form
        studio.save #save it so it's stored in the database
    end
    anime.studio_id = studio.id #even if the studio dosen't exist, assign the studio_id of the anime to the primary key id of the studio object in the table
    anime.image= params[:image] 
    anime.save
    redirect to("/animes/#{ params[:id] }") #GET request
end


#DELETE
get '/animes/:id/delete' do
    anime= Anime.find params[:id]
    anime.destroy
    redirect to('/animes') #redirects to index
end

#### STUDIOS ###############

#INDEX
get '/studios' do
    @studios = Studio.all
    erb :studios_index
end

#NEW
get '/studios/new' do
    erb :studios_new
end


#CREATE
post '/studios' do 
    studio = Studio.new
    studio.name = params[:name]
    studio.years = params[:years]
    studio.location = params[:location]
    studio.works = params[:works]
    studio.logo= params[:logo]
    studio.save
    redirect to('/studios') #GET request that redirects to /studios
end


#SHOW
get '/studios/:id' do
    #get the studio
    @studio = Studio.find params[:id]
    @animes = Anime.where(studio_id:params[:id]) #access the table animes and find the particular anime objects where the id of the studio is the same as the studio_id value
    p @animes
    erb :studios_show
end

#EDIT

get '/studios/:id/edit' do #convention is to put edit at the end. We want to edit studio id number ...
    @studio = Studio.find params[:id]
    erb :studios_edit
end

#UPDATE
post '/studios/:id' do
    studio = Studio.find params[:id]
    studio.name = params[:name]
    studio.years = params[:years]
    studio.location = params[:location]
    studio.works = params[:works]
    studio.logo= params[:logo]
    studio.save
    redirect to("/studios/#{studio.id}") #GET request
end


#DELETE
get '/studios/:id/delete' do
    studio= Studio.find params[:id]
    studio.destroy
    redirect to('/studios') #redirects to index
end

