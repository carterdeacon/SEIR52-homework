class SecretnumberController < ApplicationController
    def form 
    end

    def results
     secret_number = rand(1...10) 
     userchoice = params[:select].to_i     
       if secret_number == userchoice 
        @result =  "You guessed it! the secret number is #{ secret_number }"
       else
        @result = "You lost ...the secret number was Pi...not really it was #{ secret_number }"
       end
    end

end