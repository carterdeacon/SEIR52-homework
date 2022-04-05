class RockController < ApplicationController
    def play
    end

    def result
        @computer_pick =["rock", "paper", "scissors"].sample
        @your_pick =params[:id]
        if params[:id] == @computer_pick
            @output = "You guys tie!"
        elsif (params[:id] == "rock" && @computer_pick =="scissors") || (params[:id] == "paper" && @computer_pick == "rock") || (params[:id] == "scissors" && @computer_pick == "paper")
            @output = "You win!"
        else
            @output = "You lose!"
        end
    end
end