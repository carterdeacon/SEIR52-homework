class MastersController < ApplicationController
  def index
    @masters =Master.all
  end

  def new
    @master = Master.new
    
  end

  def create
   master = Master.create master_params
   redirect_to master
  end

  def update
    master = Master.find params[:id]
    master.update master_params
    redirect_to master
  end

  def destroy
    master = Master.find params[:id]
    master.destroy
    redirect_to masters_path
  end

  def edit
    @master = Master.find params[:id]
  end

  def show
    @master = Master.find params[:id]
  end


  private
  def master_params
    params.require(:master).permit(:name, :alias, :gender, :image)
  end
end
