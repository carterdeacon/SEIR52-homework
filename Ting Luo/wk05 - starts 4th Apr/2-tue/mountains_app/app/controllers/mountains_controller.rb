class MountainsController < ApplicationController
    def index
        @mountains = Mountain.all
    end

    def show
        @mountain = Mountain.find params[:id]
    end

    def new
    end

    def create
        mountain = Mountain.create :name =>params[:name], :elevation=>params[:elevation], :country=>params[:country], :image=> params[:image]
        redirect_to mountain_path(mountain.id)
    end

    def edit
        @mountain = Mountain.find params[:id]
    end

    def update
        @mountain = Mountain.find params[:id] 
        @mountain.name = params[:name] 
        @mountain.elevation = params[:elevation] 
        @mountain.country = params[:coutnry] 
        @mountain.image = params[:image]
        @mountain.save
        redirect_to mountain_path(@mountain.id)        
    end

    def delete
        mountain = Mountain.find params[:id] 
        mountain.destroy
        redirect_to mountains_path
    end
end