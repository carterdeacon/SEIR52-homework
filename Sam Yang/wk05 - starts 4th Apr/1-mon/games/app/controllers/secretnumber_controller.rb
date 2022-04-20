class SecretnumberController < ApplicationController
    def form
    end

    def results
        @guess = params[:guess] 
        @answer = rand(1..10)
        # case results
        # when @guess == @answer 
        #      puts "yes"
        # else 
        #      puts "no"
        # end
    end
     
end