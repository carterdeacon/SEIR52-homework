class RpsController < ApplicationController
    def form
    end

    def result
        pPick = params[:throw]
        cPick = ['rock', 'paper', 'scissors'].sample
        @cPick = cPick

        if  pPick=='rock' && cPick=='scissors' ||
            pPick=='paper' && cPick=='rock' ||
            pPick=='scissors' && cPick=='paper'
            @result = "Player Wins"
        end

        if  cPick=='rock' && pPick=='scissors' ||
            cPick=='paper' && pPick=='rock' ||
            cPick=='scissors' && pPick=='paper'
            @result = "Computer Wins"
        end

        if  cPick=='rock' && pPick=='rock' ||
            cPick=='paper' && pPick=='paper' ||
            cPick=='scissors' && pPick=='scissors'
            @result = "Draw"
        end
        
    end
end