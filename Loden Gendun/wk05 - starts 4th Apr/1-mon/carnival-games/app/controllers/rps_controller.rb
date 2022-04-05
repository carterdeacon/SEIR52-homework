class RpsController < ApplicationController
    def play
    end

    def results
        computer = ['rock', 'paper', 'scissors'].sample
        player = params[:player]

        if (player == computer)
            @output = "It's a tie..."
        elsif (player == 'rock')
            if (computer == 'scissors')
                @output = "You win!"
            else
                @output = "You lose :'("
            end
        elsif (player == 'paper')
            if (computer == 'rock')
                @output = "You win!"
            else
                @output = "You lose :'("
            end
        else
            if (computer == 'paper')
                @output = "You win!"
            else
                @output = "You lose :'("
            end
        end

        @output = "You threw #{ player }. Computer throws... #{ computer }! " + @output

    end
end