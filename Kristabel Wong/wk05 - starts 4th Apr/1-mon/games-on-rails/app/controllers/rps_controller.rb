class RpsController < ApplicationController

    def play
    end

    def match
        choices = ["rock", "paper", "scissors"]
        @comp_picks = choices.sample

        if @comp_picks == "rock" && params[:throw] == "paper" || @comp_picks == "scissors" && params[:throw] == "rock" || @comp_picks == "paper" && params[:throw] == "scissors"
            @output = "You win! Computer loses"
        
        
        elsif @comp_picks == "rock" && params[:throw] == "scissors" || @comp_picks == "scissors" && params[:throw] == "paper"  || @comp_picks == "paper" && params[:throw] == "rock" 
            @output = "Computer wins! You lose"
        

        elsif @comp_picks == params[:throw] 
            @output = "It's a tie"
        end

    end

end