class MountainsController < ApplicationController
    def index
        @mountains = Mountain.all
    end

    def show
        @mountain = Mountain.find(params[:id])
    end

    def new
    end

    def create
        mountain = Mountain.create :name => params[:name], :image => params[:image], :ranking => params[:ranking], :height => params[:height], :country => params[:country], :ascent => params[:ascent]
        redirect_to(mountain_path(mountain.id))
    end

    def edit
        @mountain = Mountain.find(params[:id])
    end

    def update
        mountain = Mountain.find(params[:id])
        mountain.name = params[:name]
        mountain.image = params[:image]
        mountain.ranking = params[:ranking]
        mountain.height = params[:height]
        mountain.country = params[:country]
        mountain.ascent = params[:ascent]
        mountain.save
        redirect_to(mountain_path(mountain.id))
    end

    def destroy
        mountain = Mountain.find(params[:id])
        mountain.destroy
        redirect_to(mountains_path)
    end
end