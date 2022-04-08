class ReleasesController < ApplicationController
  def index
    @releases = Release.all
  end

  def new
    @release = Release.new
  end
  def create
    release = Release.create release_params
    redirect_to release
  end

  def edit
    @release = Release.find params[:id]
  end
  def update
    release = Release.find params[:id]
    release.update release_params
    redirect_to release
  end 

  def show
    @release = Release.find params[:id]
  end

  def destroy 
    release = Release.find params[:id]
    release.destroy
    redirect_to releases_path
  end



  private
  def release_params
    params.required(:release).permit(:title, :catalog, :year, :image, :artist_id )
  end

end
