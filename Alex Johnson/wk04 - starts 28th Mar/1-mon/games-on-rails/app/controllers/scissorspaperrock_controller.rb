class ScissorspaperrockController < ApplicationController
    def form 
    end

    def results
        computer_choice = ['Rock', 'Paper', 'Scissors']
        userchoice = params[:select].capitalize                                 #ui input
        compchoice = computer_choice.sample                                     #rand choice form computer
        if userchoice == compchoice
            @result = "It's a TIE! ... You win..."
        elsif   compchoice == computer_choice[0] and userchoice != computer_choice[1] ||
                compchoice == computer_choice[1] and userchoice != computer_choice[2] ||
                compchoice == computer_choice[2] and userchoice != computer_choice[0]
            @result = "You lose: You chose #{ userchoice } and the computer chose #{ compchoice }"
        else
            @result = "You won: You chose #{ userchoice } and the computer chose #{ compchoice }" 
        end
    end
end