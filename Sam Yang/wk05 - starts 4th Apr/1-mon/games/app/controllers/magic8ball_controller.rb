class Magic8ballController < ApplicationController
    def form
    end

    def results
        @question = params[:question] 
        @answer = ["Without a doubt", "Yes definitely", "Signs point to yes", "Ask again later", "Better not tell you now", "Don't count on it", "Very doubtful", "Only god knows"].sample
        
    end


end