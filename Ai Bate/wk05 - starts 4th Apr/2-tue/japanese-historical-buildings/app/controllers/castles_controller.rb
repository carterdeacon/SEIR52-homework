class CastlesController < ApplicationController
    def index
        @castles = Castle.all
    end
    def show
        @castle = Castle.find params[:id]
    end
    def new  
    end

    def create
        castle = Castle.create :name => params[:name], :image => params[:image], :prefecture => params[:prefecture], :who => params[:who], :age => params[:age]
        redirect_to castle_path(castle.id)
    end
    def edit
        @castle = Castle.find params[:id]
    end
    def update
        castle = Castle.find params[:id]
        castle.name = params[:name]
        castle.image = params[:image]
        castle.prefecture = params[:prefecture]
        castle.who = params[:who]
        castle.age = params[:age]
        castle.save
        redirect_to castle_path(castle.id)
    end
    def delete
        castle = Castle.find params[:id]
        castle.destroy
        redirect_to castles_path
    end


end

