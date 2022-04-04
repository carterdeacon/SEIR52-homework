class RpsController < ApplicationController
    def home
    end

    def result
        computer = ['rock', 'paper', 'scissors'].sample
        human = params[:guess]

        if human == "rock"
            @h_image = "/assets/rock.jpeg"
            if computer == "rock"
                @message = "It's a Draw!"
                @p_image = "/assets/rock.jpeg"
            end

            if computer == "paper"
                @message = "You Lose!"
                @p_image = "/assets/paper.jpeg"
            end

            if computer == "scissors"
                @message = "You Win!"
                @p_image = "/assets/scissors.jpeg"
            end
        end

        if human == "paper"
            @h_image = "/assets/paper.jpeg"
            if computer == "paper"
                @message = "It's a Draw!"
                @p_image = "/assets/paper.jpeg"
            end

            if computer == "scissors"
                @message = "You Lose!"
                @p_image = "/assets/scissors.jpeg"
            end

            if computer == "rock"
                @message = "You Win!"
                @p_image = "/assets/rock.jpeg"
            end
        end

        if human == "scissors"
            @h_image = "/assets/scissors.jpeg"
            if computer == "scissors"
                @message = "It's a Draw!"
                @p_image = "/assets/scissors.jpeg"
            end

            if computer == "rock"
                @message = "You Lose!"
                @p_image = "/assets/rock.jpeg"
            end

            if computer == "paper"
                @message = "You Win!"
                @p_image = "/assets/paper.jpeg"
            end
        end
    
    end
 
end
