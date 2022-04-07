class PagesController < ApplicationController
    def home
        @oceans = Ocean.all
    end

    def show
        @ocean = Ocean.find params[:id]
    end

    def new
    end

    def create
        ocean = Ocean.create :name => params[:name], :depth => params[:depth], :location => params[:location], :image => params[:image]
        redirect_to ocean_path(ocean.id)
    end

    def edit
        @ocean = Ocean.find params[:id]
    end

    def update
        ocean = Ocean.find params[:id]
        ocean.name = params[:name]
        ocean.depth = params[:depth]
        ocean.location = params[:location]
        ocean.image = params[:image]
        ocean.save
        redirect_to ocean_path(ocean.id)
    end

    def delete
        ocean = Ocean.find params[:id]
        ocean.destroy
        redirect_to home_path
    end
end