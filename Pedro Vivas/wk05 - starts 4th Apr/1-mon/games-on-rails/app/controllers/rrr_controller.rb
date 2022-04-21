class RrrController < ApplicationController
    def makeplay
    end

    def whowins
        @move = params[:rrr]
        options = ['rock', 'paper', 'scissors']
        pc = options[rand(1..3)]
        @pcPlay = pc
        ans = ''
        if @move == 'rock'
            if pc == 'rock'
                ans = 'draw'
            elsif pc == 'paper'
                ans = 'lose'
            else
                ans = 'win'
            end
        elsif @move == 'paper'
            if pc == 'rock'
                ans = 'win'
            elsif pc == 'scissors'
                ans = 'lose'
            else
                ans = 'draw'
            end
        else
            if pc == 'rock'
                ans = 'lose'
            elsif pc == 'paper'
                ans = 'win'
            else
                ans = 'draw'
            end
        end
        @outcome = ans
    end
end