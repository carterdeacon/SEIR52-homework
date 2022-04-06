class SecretnumberController < ApplicationController
    def play
        puts "I'd like to play a game..."
    end
    
    def results
        @output = "Nah, that wasn't my number. You suck at this..."
        number = rand(1..10)
        p number
        if params[:guess] == number.to_s
            @output = "Oh snap! Yeah! That was my number! What the heck, are you a mind reader woooooooaaaahhhh" 
        end
    end
end