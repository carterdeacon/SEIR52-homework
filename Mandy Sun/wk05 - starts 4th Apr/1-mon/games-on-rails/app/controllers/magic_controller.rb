class MagicController < ApplicationController
    def ask
    end

    def answer
        number = rand(1...20)
        @result = case number
        when 1 then "Without a doubt."
        when 2 then "Reply hazy, try again."
        when 3 then "Outlook not so good."
        when 4 then "As I see it, yes."
        when 5 then "Signs point to yes."
        when 6 then "Better not tell you now."
        when 7 then "Very doubtful."
        when 8 then "Concentrate and ask again."
        when 9 then "It is certain."
        when 10 then "Most likely."
        when 11 then "Cannot predict now."
        when 12 then "Don't count on it."
        when 13 then "My reply is no."
        when 14 then "Ask again later."
        when 15 then "Yes."
        when 16 then "Let's see in future."
        when 17 then "Outlook good."
        when 18 then "You may rely on it."
        when 19 then "My sources say no."
        when 20 then "Yes definitely."
        end
    end

end