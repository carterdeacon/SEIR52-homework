class SecretnumberController < ApplicationController
    def form
    end
    def results
        @random_num = rand(1...10)
        if @random_num == params[:number].to_i
            @result = "Your are correct!"
        else
            @result = "The number is #{@random_num}. Please try again!"
        end
        render :results
    end 
end