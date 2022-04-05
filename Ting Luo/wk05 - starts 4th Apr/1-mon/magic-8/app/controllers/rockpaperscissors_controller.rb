class RockpaperscissorsController < ApplicationController
    def display
        @options = ["Rock","Paper","Scissors"]
    end

    def play
        @options = ["Rock","Paper","Scissors"]
        possible_result = {
            "RockRock" => "Tie",
            'RockPaper'=> "Lose",
            "RockScissors" => "Win",
            "PaperRock" => "Win",
            "PaperPaper" => "Tie",
            "PaperScissors" => "Lose",
            "ScissorsRock" => "Lose",
            "ScissorsPaper" => "Win",
            "ScissorsScissors" => "Tie"
        }
        @server_pick = @options.sample
        current_result = params[:throw].capitalize+@server_pick
        @result = possible_result[current_result]
       
    end
end