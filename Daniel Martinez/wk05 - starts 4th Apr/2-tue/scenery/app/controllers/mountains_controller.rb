class MountainsController < ApplicationController

    def index
        @mountains = Mountain.all 
    end

    def show
    @moauntains = Mountain.find params[:id]
    
    end


    def create
        mountian = Mountain.create :name=>params[:name], image=>params[:image], height=> params[:height], country=> params[:country]
        redirect_to mountain_path(mountain.id)
        
    end


    def new
    end




end
