class HandsomespoonsController < ApplicationController

    def index
      @handsomespoons = Handsomespoon.all
    end
  
    def new
      @handsomespoon = Handsomespoon.new
    end
  
    def create
      handsomespoon = Handsomespoon.create handsomespoon_params
      redirect_to handsomespoon
    end
  
    def edit
      @handsomespoon = Handsomespoon.find params[:id]
    end
  
    def update
      handsomespoon = Handsomespoon.find params[:id]
      handsomespoon.update handsomespoon_params
      redirect_to handsomespoon
    end
  
    def show
      @handsomespoon = Handsomespoon.find params[:id]
    end
  
    def destroy
      handsomespoon = Handsomespoon.find params[:id]
      handsomespoon.destroy
      redirect_to handsomespoon_path
    end
  
    private
    def handsomespoon_params #strong params
      params.require(:handsomespoon).permit(:name, :material, :image, :oatmeal_id)
    end
  end
  