class SecretController < ApplicationController    
    def number
    end

    def answer
        @rand = rand(1...10)
    end
end