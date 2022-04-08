class SecretnumberController < ApplicationController
    def form
        @buttons = (1..10).to_a
        
    end

    def result
        @buttons = (1..10).to_a
        @result = case params[:number]
        when '2' then "You found the secret number!"
        when '6' then "You found the secret number!"
        else "Keep looking!"
        end
    end


end
