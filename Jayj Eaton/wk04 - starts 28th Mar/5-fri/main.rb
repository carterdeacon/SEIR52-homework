require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

# active record config
ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

# optional for sql logs in server console
ActiveRecord::Base.logger = Logger.new(STDERR)

class Artist < ActiveRecord::Base
    has_many :songs, dependent: :destroy 
end

class Song < ActiveRecord::Base
    belongs_to :artist
end

#  HOME
get '/' do
    erb :home
end
#  ARTISTS INDEX
get '/artists' do
    @artists = Artist.all
    erb :artists_index
end
get '/songs' do
    @songs = Song.all
    erb :songs_index
end
# NEW
get '/artists/new' do
    erb :artists_new
end
get '/songs/new' do
    erb :songs_new
end
# CREATE
post '/artists' do
    artist = Artist.new
    artist.name = params['name']
    artist.location = params['location']
    artist.sub = params['sub']
    artist.image = params['image']
    artist.video = params['video']
    artist.save
    redirect to('/artists')
end
post '/songs' do
    song = Song.new

    Artist.all.each do |artist|
        if artist.name == params['artist_id']
            song.artist_id = artist.id
        end
    end
    if song.artist_id == nil
        song.create_artist(name: params['artist_id'])
        Artist.all.each do |artist|
            if artist.name == params['artist_id']
                song.artist_id = artist.id
            end
        end
    end

    song.album = params['album']
    song.name = params['name']
    song.date = params['date']
    song.cover = params['cover']
    song.link = params['link']
    song.save
    redirect to('/songs')
end
#  SHOW singular
get '/artists/:id' do
    @artist = Artist.find params[:id]
    @songs_filtered = Song.where(artist_id: params[:id])
    erb :artists_show
end
get '/songs/:id' do
    @song = Song.find params[:id]
    erb :songs_show
end
# EDIT
get '/artists/:id/edit' do
    @artist = Artist.find params[:id]
    erb :artists_edit
end
get '/songs/:id/edit' do
    @song = Song.find params[:id]
    erb :songs_edit
end
# UPDATE
post '/artists/:id' do
    artist = Artist.find params[:id]
    artist.name = params['name']
    artist.location = params['location']
    artist.sub = params['sub']
    artist.image = params['image']
    artist.video = params['video']
    artist.save
    redirect to("/artists/#{params[:id]}")
end
post '/songs/:id' do
    song = Song.find params[:id]

    Artist.all.each do |artist|
        if artist == params['artist_id']
            song.artist_id = artist.id
        end
    end
    if song.artist_id == nil
        song.create_artist(name: params['artist_id'])
        Artist.all.each do |artist|
            if artist == params['artist_id']
                song.artist_id = artist.id
            end
        end
    end
    song.album = params['album']
    song.name = params['name']
    song.date = params['date']
    song.cover = params['cover']
    song.link = params['link']
    song.save
    redirect to("/songs/#{params[:id]}")
end
# DELETE
get '/artists/:id/delete' do
    artist = Artist.find params[:id]
    artist.destroy
    redirect to('/artists')
end
get '/songs/:id/delete' do
    song = Song.find params[:id]
    song.destroy
    redirect to('/songs')
end

