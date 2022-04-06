class SecretnumberController < ApplicationController
    def form
        @numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    end

    def results
        @user_number = params[:number].to_i
        comp_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        @win_number = comp_numbers.sample.to_i
        if @user_number !=  @win_number
            @result_message = " Sorry, you lost"
        else
            @result_message = "You  win!!"
        end
        
    end


end
