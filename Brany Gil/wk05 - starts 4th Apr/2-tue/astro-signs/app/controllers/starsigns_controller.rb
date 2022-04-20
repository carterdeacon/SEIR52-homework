class StarsignsController < ApplicationController


    def index

        @starsigns = Starsign.all  
    end

    def show
    
        @starsign = Starsign.find params[:id]

    end

end