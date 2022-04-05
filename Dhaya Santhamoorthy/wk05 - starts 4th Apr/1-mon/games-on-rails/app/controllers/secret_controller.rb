class SecretController < ApplicationController    
    def choice 
    end

    def result 
        @guess = params[:number].to_i
        @system_choice = rand(1..10)        
    end
end