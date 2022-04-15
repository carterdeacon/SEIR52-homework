class SkifieldsController < ApplicationController
    def index
        @skifields = Skifield.all
    end

    def show
        @skifield = Skifield.find params[:id]
    end

    def new
    end

    def create
        skifield = Skifield.create :name => params[:name], :image => params[:image], :country => params[:country], :lifts => params[:lifts], :runs => params[:runs], :longest => params[:longest], :top => params[:top], :base => params[:base], :snowfall => params[:snowfall], :skied => params[:skied]
        redirect_to skifield_path(skifield.id)
    end

    def edit
        @skifield = Skifield.find params[:id]
    end

    def update
        skifield = Skifield.find params[:id]
        skifield.name = params[:name]
        skifield.image = params[:image]
        skifield.country = params[:country]
        skifield.lifts = params[:lifts]
        skifield.runs = params[:runs]
        skifield.longest = params[:longest]
        skifield.top = params[:top]
        skifield.base = params[:base]
        skifield.snowfall = params[:snowfall]
        skifield.skied = params[:skied]
        skifield.save
        redirect_to skifield_path(skifield.id)
    end

    def destroy
        skifield = Skifield.find params[:id]
        skifield.destroy
        redirect_to skifields_path
    end

end