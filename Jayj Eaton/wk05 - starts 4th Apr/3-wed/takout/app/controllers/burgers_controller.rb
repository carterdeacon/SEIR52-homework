class BurgersController < ApplicationController
  def index
    @burgers = Burger.all
  end

  def new
    @burger = Burger.new
  end
  def create
    burger = Burger.create burger_params
    redirect_to burger
  end

  def edit
    @burger = Burger.find params[:id]
  end
  def update
    burger = Burger.find params[:id]
    burger.update burger_params
    redirect_to burger
  end

  def show
    @burger = Burger.find params[:id]
  end
  
  def destroy
    burger = Burger.find params[:id]
    burger.destroy
    redirect_to burgers_path
  end

  private
  def burger_params
    params.require(:burger).permit(:name, :ingredients, :price, :image, :bar_id)
  end
end
