class BallController < ApplicationController
    def home
    end

    def results
        my_array = Array.new
        my_array[0] = "your chances are high"
        my_array[1] = "you have a 50 50 shot"
        my_array[2] = "your chances dont look good"
        my_array[3] = "it is inevitable"
        my_array[4] = "you have zero chance"
                
        numb = rand(my_array.length).to_i
        @result = my_array[numb]
    end
end