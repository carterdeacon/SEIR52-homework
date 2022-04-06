class RockpaperscissorsController < ApplicationController
    def form
    end
    def results

        @user_choice = params[:throw]
        comp_choices = ['Rock', 'Paper', 'Scissors']
        @comp_choice = comp_choices.sample
        if @user_choice == @comp_choice
            @prc_result = "Tie game"
        else
            if @comp_choice == 'Rock' && @user_choice == 'Scissors' || @comp_choice == 'Scissors' && @user_choice == 'Paper' || @comp_choice == 'Paper' && @user_choice == 'Rock'
                @prc_result = "you did not win"
            else
                @prc_result = "you win!!" 
            end
            
            

        end
    end
end
