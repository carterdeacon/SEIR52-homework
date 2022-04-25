class Magic8ballController < ApplicationController
    def form
    end
    def results
       @question = params[:question].capitalize
        answers = ['Yes definitely.', 'Very doubtful.', 'Better not tell you now.', 'Ask again later.','Signs point to yes.' ]
        @answer = answers.sample

    end
end
