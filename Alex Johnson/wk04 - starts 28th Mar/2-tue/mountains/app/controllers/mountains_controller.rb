class MountainsController < ApplicationController

    def index
        @mountains = Mountain.all
    end

    def show
        @mountain =  Mountain.find params[:id]
    end

    def new 
    end
    def create
        mountain = Mountain.create :name => params[:name], :image => params[:image], 
                    :height => params[:height], :country => params[:country], 
                    :borders => params[:borders], :year_scaled => params[:year_scaled] 
        redirect_to mountain_path(mountain.id)
    end

    def edit
        @mountain =  Mountain.find params[:id]
    end
    def update
        mountain = Mountain.find params[:id]
        mountain.name = params[:name]
        mountain.image = params[:image]
        mountain.height = params[:height]
        mountain.country = params[:country] 
        mountain.borders = params[:borders] 
        mountain.year_scaled = params[:year_scaled] 
        mountain.save
        # This doesn't work....can it?
        # mountain = Mountain.find params[:id], :name => params[:name], :image => params[:image], 
        #             :height => params[:height], :country => params[:country], 
        #             :borders => params[:borders], :year_scaled => params[:year_scaled] 
        redirect_to mountain_path(mountain.id)
    end
    
    def destroy
        mountain = Mountain.find params[:id]
        mountain.destroy
        redirect_to mountains_path
    end
end
