class MountainsController < ApplicationController
    def index
        @mountains = Mountain.all
    end

    def show
        @mountain = Mountain.find params[:id]
    end

    def new #new mountain will contain a form allowing us to post the info to mountains path
    end

    def create
        mountain = Mountain.create :name => params[:name], :length => params[:length], :avg_gradient => params[:avg_gradient], :category => params[:category], :elevation_gain => params[:elevation_gain], :image => params[:image], :map => params[:map]
        redirect_to mountain_path(mountain.id)
    end

    def edit
        @mountain = Mountain.find params[:id]
    end

    def update
        mountain = Mountain.find params[:id]
        mountain.name = params[:name]
        mountain.length = params[:length]
        mountain.avg_gradient = params[:avg_gradient]
        mountain.category = params[:category]
        mountain.elevation_gain = params[:elevation_gain]
        mountain.image = params[:image]
        mountain.map = params[:map]
        mountain.save
        redirect_to mountain_path(mountain.id)
    end

    def destroy
        mountain = Mountain.find params[:id]
        mountain.destroy
        redirect_to mountains_path
    end

    def categories
    end

end