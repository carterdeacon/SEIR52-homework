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
        mountain = Mountain.create :name => params[:name], :image => params[:image], :country => params[:country], :runs => params[:runs], :beginner => params[:beginner], :intermediate => params[:intermediate], :advanced => params[:advanced]
        redirect_to mountain_path(mountain.id)
    end

    def edit
        @mountain = Mountain.find params[:id]
    end

    def update
        mountain = Mountain.find params[:id]
        mountain.name = params[:name]
        mountain.image = params[:image]
        mountain.country = params[:country]
        mountain.runs = params[:runs]
        mountain.beginner = params[:beginner]
        mountain.intermediate = params[:intermediate]
        mountain.advanced = params[:advanced]
        mountain.save
        redirect_to mountain_path(mountain.id)
    end

    def destroy
        mountain = Mountain.find params[:id]
        mountain.destroy
        redirect_to mountains_path
    end
end