class BarsController < ApplicationController
  def index
    @bars = Bar.all
  end

  def new
    @bars = Bar.new
  end
  def create
    bar = Bar.create bar_params
    redirect_to bar
  end

  def edit
    @bars = Bar.find params[:id]
  end
  def update
    bar = Bar.find params[:id]
    bar.update bar_params
    redirect_to bar
  end

  def show
    @bar = Bar.find params[:id]
  end
  
  def destroy
    bar = Bar.find params[:id]
    bar.destroy
    redirect_to bars_path
  end

  private
  def bar_params
    params.require(:bar).permit(:name, :location, :store_count, :style, :rating, :image)
  end
end
