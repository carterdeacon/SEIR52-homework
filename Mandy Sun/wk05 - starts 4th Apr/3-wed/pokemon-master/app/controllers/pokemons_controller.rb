class PokemonsController < ApplicationController
  def index
    @pokemons = Pokemon.all
  end

  def new
    @pokemon = Pokemon.new
  end

  def create
    pokemon = Pokemon.create pokemon_params
    redirect_to pokemon
  end

  def edit
    @pokemon = Pokemon.find params[:id]
  end

  def destroy
    pokemon = Pokemon.find params[:id]
    pokemon.destroy
    redirect_to pokemons_path
  end

  def update
    pokemon = Pokemon.find params[:id]
    pokemon.update pokemon_params
    redirect_to pokemon
  end

  def show
    @pokemon = Pokemon.find params[:id]
  end

  private
  def pokemon_params
    params.require(:pokemon).permit(:name, :category, :abilities, :image, :master_id)
  end
end
