class SailorsController < ApplicationController
    def index
        @sailors = Sailor.all
    end

    def show
        @sailor = Sailor.find params[:id]
    end

    def new 
    end

    def create
        sailor = Sailor.create :name => params[:name], :image => params[:image], :identity => params[:identity], :residency => params[:residency]
        redirect_to show_sailor_path(sailor.id)
    end

    def edit
        @sailor = Sailor.find params[:id]
    end

    def update
        sailor = Sailor.find params[:id]
        sailor.name = params[:name]
        sailor.image= params[:image]
        sailor.identity = params[:identity]
        sailor.residency = params[:residency]
        sailor.save
        redirect_to show_sailor_path(sailor.id)
    end

    def delete
        sailor = Sailor.find params[:id]
        sailor.destroy
        redirect_to sailors_path
    end

end