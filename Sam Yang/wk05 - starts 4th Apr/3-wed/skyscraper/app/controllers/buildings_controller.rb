class BuildingsController < ApplicationController
  def index
    @buildings = Building.all
  end

  def new
    @building = Building.new
  end

  def create
    building = Building.create building_params
    redirect_to building
  end


  def edit
    @building = Building.find params[:id]

  end

  def update
    building = Building.find params[:id]
    building.update building_params
    redirect_to building
  end

  def show
    @building = Building.find params[:id]
  end

  def destroy
    building =Building.find params[:id]
    building.destroy
    redirect_to buildings_path
  end

  private 
  def building_params
    params.require(:building).permit(:name, :year, :height, :floor, :image)
  end
end
