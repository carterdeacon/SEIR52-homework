class SecretController < ApplicationController
    def pick
    end

    def results
        @secret = rand(1..10)
    end
end
