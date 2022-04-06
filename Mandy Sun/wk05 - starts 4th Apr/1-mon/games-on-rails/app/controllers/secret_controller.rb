class SecretController < ApplicationController
    def pick
        
    end

    def lose
        @computer_pick = rand(1...10)
        redirect_to("/secret_number/win") if params[:id].to_i == @computer_pick  
    end

    def win
    end
    
end