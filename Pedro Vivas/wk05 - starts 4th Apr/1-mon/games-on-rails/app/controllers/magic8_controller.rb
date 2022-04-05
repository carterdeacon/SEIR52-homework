class Magic8Controller < ApplicationController
    def question
    end

    def prediction
        @question = params[:question]
        chance = ['Definitely', 'Very likely', 'Not sure', 'Doubtful', 'Hard no']
        fate = chance[rand(1..5)]
        @answer = fate
    end
end