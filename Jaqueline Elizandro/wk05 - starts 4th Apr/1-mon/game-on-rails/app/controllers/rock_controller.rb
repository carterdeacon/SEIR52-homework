class RockController < ApplicationController    
    def player_choose
        @picks = ["Rock", "Paper", "Scissors"];
    end

    def answer
        @picks = ["Rock", "Paper", "Scissors"];
        @oponent_choose = @picks.sample;
        player_pick = [params[:pick]].join;
        oponent_pick = @picks.index(@oponent_choose).to_s;

        if player_pick == oponent_pick
            result = "Draw!"
        elsif player_pick == "0" && oponent_pick == "1"
            result = "You lose!"
        elsif player_pick == "0" && oponent_pick == "2"
            result = "You win!"
        elsif player_pick == "1" && oponent_pick == "0"
            result = "You win!"
        elsif player_pick == "1" && oponent_pick == "2"
            result = "You lose"
        elsif player_pick == "2" && oponent_pick == "0"
            result = "You lose!"
        elsif player_pick == "2" && oponent_pick == "1"
            result = "You win!"
        end

        @result = result
    end


end