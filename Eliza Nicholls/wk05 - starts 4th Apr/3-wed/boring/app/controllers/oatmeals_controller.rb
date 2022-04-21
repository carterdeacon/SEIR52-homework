class OatmealsController < ApplicationController
  def index
    @oatmeals = Oatmeal.all
  end

  def new
    @oatmeal = Oatmeal.new
  end

  def create
    oatmeal = Oatmeal.create oatmeal_params
    redirect_to oatmeal
  end

  def edit
    @oatmeal = Oatmeal.find params[:id]
  end

  def update
    oatmeal = Oatmeal.find params[:id]
    oatmeal.update oatmeal_params
    redirect_to oatmeal
  end

  def show
    @oatmeal = Oatmeal.find params[:id]
  end

  def destroy
    oatmeal = Oatmeal.find params[:id]
    oatmeal.destroy
    redirect_to oatmeals_path
  end

  private
  def oatmeal_params #strong params
    params.require(:oatmeal).permit(:name, :vibe, :image)
  end
end
