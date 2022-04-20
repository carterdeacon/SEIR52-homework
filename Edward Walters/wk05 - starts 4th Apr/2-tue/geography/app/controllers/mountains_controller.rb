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
    mountain = Mountain.create :name => params[:name], :country => params[:country], :height => params[:height], :prominence_rank => params[:prominence_rank], :photo => params[:photo], :first_climbed_year => params[:first_climbed_year], :first_climbed_by => params[:first_climbed_by]
    redirect_to mountain_path(mountain.id)
   end

   def edit
    @mountain = Mountain.find params[:id]
   end

   def update
    @mountain = Mountain.find params[:id]
    @mountain.name = params[:name]
    @mountain.country = params[:country]
    @mountain.height = params[:height]
    @mountain.prominence_rank = params[:prominence_rank]
    @mountain.photo = params[:photo]
    @mountain.first_climbed_by = params[:first_climbed_by]
    @mountain.first_climbed_year = params[:first_climbed_year]
    @mountain.save
    redirect_to mountain_path(@mountain.id)
   end

   def delete
    @mountain = Mountain.find params[:id]
    @mountain.destroy
    redirect_to mountains_path
   end
   
end


