require "sinatra"
require "sinatra/reloader"
require "active_record"
require "sqlite3"


ActiveRecord::Base.establish_connection(
    :adapter => "sqlite3",
    :database => "database.sqlite3"
)

ActiveRecord::Base.logger = Logger.new(STDERR)


class Musician < ActiveRecord::Base
    has_many :musics, dependent: :destroy
end

class Music < ActiveRecord::Base
    belongs_to :musician, foreign_key: "musician_id"
end

get "/" do
    erb :home
end

get "/musicians" do
    @musicians = Musician.all 
    erb :musicians_index
end

#CREATE
post "/musicians" do
    musician = Musician.new
    musician.name = params[:name]
    musician.born = params[:born]
    musician.deceased = params[:deceased]
    musician.image = params[:image]
    musician.save 
    redirect to("/musicians/#{musician.id}")
end

#NEW
get "/musicians/new" do
    erb :musicians_new
end

#SHOW
get "/musicians/:id" do
    @musician = Musician.find params[:id]
    @musics = @musician.musics
    erb :musicians_show
end

#EDIT
get "/musicians/:id/edit" do
    @musician = Musician.find params[:id]
    erb :musicians_edit
end

#UPDATE
post "/musicians/:id" do
    @musician = Musician.find params[:id] 
    @musician.name = params[:name] 
    @musician.born = params[:born]
    @musician.deceased = params[:deceased] 
    @musician.image = params[:image] 
    @musician.save
    redirect to ("/musicians/#{params[:id]}")
end

#DELETE
get "/musicians/:id/delete" do
    @musician = Musician.find params[:id] 
    @musician.destroy
    redirect to ("/musicians")
end


#musics part

#CREATE
post "/musics/create" do
    music = Music.new
    music.name = params[:name]
    music.publish = params[:publish]
    music.keys = params[:keys]
    music.description = params[:description] 
    music.musician_id = params[:musician_id]
    music.save 
    redirect to("/musicians/#{music.musician_id}")
end

#NEW
get "/musics/new" do
    musician_id = params[:musician_id]
    @musician = Musician.find musician_id
    erb :musics_new
end


#SHOW
get "/musics/:id" do
    @music = Music.find params[:id]
    @musician = Musician.find (@music.musician_id)
    erb :musics_show
end
 
#EDIT
get "/musics/:id/edit" do
    @music = Music.find params[:id]   
    @musician_selected = @music.musician
    @musicians = Musician.all
    erb :musics_edit
end

#UPDATE
post "/musics/:id" do
    @music = Music.find params[:id] 
    @music.musician_id = params[:musician_id]
    @musician = @music.musician.name
    @music.name = params[:name] 
    @music.publish = params[:publish]
    @music.keys = params[:keys] 
    @music.description = params[:description] 
    @music.save
    redirect to ("/musics/#{params[:id]}")
end

#DELETE
get "/musics/:id/delete" do
    @music = Music.find params[:id]
    id = @music.musician_id
    @music.destroy
    redirect to ("/musicians/#{id}")
end
