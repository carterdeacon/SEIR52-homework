class GodsController < ApplicationController
  def index
    @gods = God.all
  end

  def new
    @god = God.new
  end

  def edit
    @god = God.find params[:id]
  end

  def create
    god = God.create god_params
    redirect_to god
  end

  def update
    god = God.find params[:id]
    god.update god_params
    redirect_to god
  end

  def show
    @god = God.find params[:id]
  end

  def destroy
    god = God.find params[:id]
    god.destroy
    redirect_to gods_path
  end

  private # everything after this is not visible outside this file
  def god_params #strong params (see docs)
    params.require(:god).permit(:name, :parents, :domain, :home, :symbol, :sacred_animals, :retinue, :other_names, :pantheon_id)
  end
end
