class MagicballController < ApplicationController
    def results
        @results = [
            "It is certain.", 
            "It is decidedly so.",
            "Whiteout a doubt.",
            "Yes definitely.",
            "You may reply on it.",
            "As I see it, yes.",
            "Most likely.",
            "Outlook good.",
            "Yes.",
            "Signs point to yes.",
            "Reply hazy, try again."
        ]       
        render :results
    end 
end