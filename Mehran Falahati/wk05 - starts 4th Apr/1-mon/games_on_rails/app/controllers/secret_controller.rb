class SecretController < ApplicationController
    def form
    end 
    
    
    def result
        secret_num = [
            "YES YES YOU WON",
            "OH NOW YOU LOST"
    ].sample
    @sec_num = secret_num
    end
end 



