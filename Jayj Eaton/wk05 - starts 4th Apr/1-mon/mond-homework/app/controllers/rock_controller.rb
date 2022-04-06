class RockController < ApplicationController
    def home
    end
    def results
        @user= params[:value]
        game = ['rock', 'paper', 'scissors']
        @computer = game[rand(0..2)]
        @winner = ''
        # if statements
        if @user == 'rock' && @computer == 'scissors' || 
            @user == 'scissors' && @computer == 'paper' || 
            @user == 'paper' && @computer == 'rock'
            @winner = 'player wins well done!'
        elsif @computer == 'rock' && @user == 'scissors' || 
            @computer == 'scissors' && @user == 'paper' || 
            @computer == 'paper' && @user == 'rock'
            @winner = 'computer wins your garbage!'
        else @winner = 'its a tie play again'
        end
    end
end