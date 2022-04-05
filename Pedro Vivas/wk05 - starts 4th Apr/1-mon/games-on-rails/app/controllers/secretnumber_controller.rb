class SecretnumberController < ApplicationController
    def makeguess
    end

    def answer
        @guess = params[:guess]
        secret = rand(1..10)
        answer = @guess.to_i == secret
        @response = answer ? :"#{secret}, You guessed right! Are you a psychic?" : :"Wrong! it was #{secret}"
    end

end