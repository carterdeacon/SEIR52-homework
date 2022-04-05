class SecretnumberController < ApplicationController
    def home
    end
    
    def results
        @randomnumb = rand(1..10)
        @usernumb = params[:numb].to_i
    end
end