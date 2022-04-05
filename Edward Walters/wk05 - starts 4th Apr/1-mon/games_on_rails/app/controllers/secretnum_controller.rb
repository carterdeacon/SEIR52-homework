class SecretnumController < ApplicationController
    def home
    end

    def result
        if params[:id].to_i == rand(1..10) 
            render :win
        else
           render :lose 
        end   
    end
    
end
