class RpsController < ApplicationController    
    def choice 
        @choices = ["rock", "paper", "scissors"]
    end

    def result 
        @choices = ["rock", "paper", "scissors"]
        @computer_choice = @choices.sample
        @player_choice = @choices[params[:choice].to_i]       
        if @computer_choice == @player_choice
            @result = "It is a draw!"""
        elsif @player_choice == "rock" && @computer_choice == "scissors"
            @result = "You win :D"
        elsif @player_choice == "rock" && @computer_choice == "paper"
            @result = "You lost!"
        elsif @player_choice == "paper" && @computer_choice == "rock"
            @result = "You win :D"
        elsif @player_choice == "paper" && @computer_choice == "scissors"
            @result = "You lost!"
        elsif @player_choice == "scissors" && @computer_choice == "paper"
            @result = "You win :D"
        elsif @player_choice == "scissors" && @computer_choice == "rock"
            @result = "You lost!"        
        end
    end
end