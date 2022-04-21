class CitiesController < ApplicationController
  def index
    @cities = City.all
  end

  def new
    @city = City.new
  end

  def create
    city = City.create city_params
    redirect_to city
  end


  def edit
    @city = City.find params[:id]

  end

  def update
    city = City.find params[:id]
    city.update city_params
    redirect_to city
  end

  def show
    @city = City.find params[:id]
  end

  def destroy
    city = City.find params[:id]
    city.destroy
    redirect_to cities_path
  end

  private 
  def city_params
    params.require(:city).permit(:name, :country, :population, :metropolitan_area, :image)
  end
end
