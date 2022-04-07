class PantheonsController < ApplicationController
  def index
    @pantheons = Pantheon.all
  end

  def new
    @pantheon = Pantheon.new
  end

  def edit
    @pantheon = Pantheon.find params[:id]
  end

  def create
    pantheon = Pantheon.create pantheon_params
    redirect_to pantheon
  end

  def update
    pantheon = Pantheon.find params[:id]
    pantheon.update pantheon_params
    redirect_to pantheon
  end

  def show
    @pantheon = Pantheon.find params[:id]
  end

  def destroy
    pantheon = Pantheon.find params[:id]
    pantheon.destroy
    redirect_to pantheons_path
  end

  def show
    @pantheon = Pantheon.find params[:id]
  end

  private # everything after this is not visible outside this file
  def pantheon_params #strong params (see docs)
    params.require(:pantheon).permit(:name, :country)
  end
end
