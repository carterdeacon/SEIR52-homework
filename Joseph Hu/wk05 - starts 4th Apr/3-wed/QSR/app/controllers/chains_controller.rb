class ChainsController < ApplicationController
  def index
    @chains = Chain.all
  end

  def new
    @chain = Chain.new
  end

  def create
    chain = Chain.create chain_params
    redirect_to chain_path(chain.id) #or use redirect_to chain
  end

  def edit
    @chain = Chain.find params[:id]
  end

  def update
    chain = Chain.find params[:id]
    chain.update chain_params
    redirect_to chain_path(chain.id)
  end

  def show
    @chain = Chain.find params[:id]
  end
  
  def destroy
    chain = Chain.find params[:id]
    chain.destroy
    redirect_to chains_path
  end

  def chain_params
    params.require(:chain).permit(:name, :founder, :founded, :locations, :logo)
  end
end
