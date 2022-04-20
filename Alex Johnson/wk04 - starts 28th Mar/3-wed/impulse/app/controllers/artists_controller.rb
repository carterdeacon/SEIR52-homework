class ArtistsController < ApplicationController
  def index
    @artists = Artist.all
  end

  def new
    @artist = Artist.new   
  end
  def create 
    artist = Artist.create artist_params
    redirect_to artist
  end

  def edit
    @artist = Artist.find params[:id]
  end
  def update
    artist = Artist.find params[:id]
    artist.update artist_params
    redirect_to artist
  end

  def show
    @artist = Artist.find params[:id]
  end

  def destroy 
    artist = Artist.find params[:id]
    artist.destroy
    redirect_to artists_path
  end


  private
  def artist_params
    params.required(:artist).permit(:name, :born, :dob, :instrument, :image) 
  end

end
