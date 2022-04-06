class DriversController < ApplicationController
  def index
    @drivers = Driver.all
  end

  def new
    @driver = Driver.new
  end

  def create
    driver = Driver.create driver_params
    redirect_to driver
  end

  def edit
    @driver = Driver.find params[:id]
  end

  def update
    driver = Driver.find params[:id]
    driver.update driver_params
    redirect_to driver_path
  end

  def show
    @driver = Driver.find params[:id]
  end

  def destroy
    driver = Driver.find params[:id]
    driver.destroy
    redirect_to drivers_path
  end

  private
  def driver_params
    params.require(:driver).permit(:gname, :surname, :dob, :nationality, :image, :team_id)
  end
end
