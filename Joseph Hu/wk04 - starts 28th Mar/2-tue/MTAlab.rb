#Hash containing lines as keys and arrays of stops as values
SubwayMap = {
    "N"=> ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

def planTrip 
    #displays subway map
    puts "Here is the subway Map:"

    SubwayMap.each {|key, value| puts "stations on Line #{key} are: #{value}"}

    # asks for user input for lines and stations
    puts "Which line are you on?"
    current_line = gets.upcase.chomp
    puts "Which station are you travelling from?"
    current_station = gets.chomp
    puts "Which line would you like to travel to?"
    dest_line = gets.upcase.chomp
    puts "Which station would you like to travel to?"
    dest_station = gets.chomp

    #ensures that user enters a valid line
    if SubwayMap.has_key?(dest_line) && SubwayMap.has_key?(current_line)

        #ensures that the user enters a valid station
        if SubwayMap[current_line].include?(current_station) && SubwayMap[dest_line].include?(dest_station) 

            #my destination message and continue message
            dest_Message = "You must travel through the following stops on the #{current_line} line: "
            continue_Message = "Your journey continues through the following stops on the #{dest_line} line: "

            #my arrays to append my stations from my first line and stations from my second line 
            line1_stops =[]
            line2_stops =[]

            #Array (values) of my current and destination lines
            line1 = SubwayMap[current_line]
            line2 = SubwayMap[dest_line]

            #Indexes of Union Square for both lines
            union_square_index_1 = line1.index("Union Square")
            union_square_index_2 = line2.index("Union Square")

            #Index of starting and destination stations
            d1Index = line1.index(current_station)
            d2Index = line2.index(dest_station)

            #if my lines are not the same line
            if current_line != dest_line

                #if my starting station is before union Square, iterate forward until i reach Union Square
                if d1Index < union_square_index_1
                    line1[d1Index+1..union_square_index_1].each{|station| line1_stops << station}
                end

                #if my destination station is before destination Union Square, iterate in reverse until the destination from Union Square.
                if d2Index < union_square_index_2
                    line2[d2Index..union_square_index_2-1].reverse_each{|station| line2_stops << station }
                end

                #if my starting station is after union Square, iterate backwards until i reach union square
                if d1Index > union_square_index_1
                    line1[union_square_index_1..d1Index-1].reverse_each{|station| line1_stops << station}
                end

                #if my destination station is after my destination union square index, iterate forwards until i reach the station.
                if d2Index > union_square_index_2
                    line2[union_square_index_2+1..d2Index].each{|station| line2_stops << station}
                end

                # take all the stations pushed from my line 1 iterations and combine it with the destination message.
                dest_Message = dest_Message + line1_stops.join(", ") + "."

                # take all the stations pushed from my line 2 iterations and combine it with the continue message.
                continue_Message = continue_Message + line2_stops.join(", ") + "."

                #if my starting station is union square, i can change at Union Square right away and just put the continue message.
                if d1Index == union_square_index_1
                    puts "Change at Union Square."
                    puts continue_Message

                #if my destination station is union square then i just need to travel up to union square and change
                elsif d2Index == union_square_index_2
                    puts dest_Message
                    puts "Change at Union Square."

                #else, my lines are different and stations are different so put the dest and cont messages.
                else
                    puts dest_Message
                    puts "Change at Union Square."
                    puts continue_Message
                end

            #if i'm travelling on the same line  
            else
                #if my starting station is before my destination iterate until i reach my destination
                if d1Index < d2Index
                    line1[d1Index+1..d2Index].each{|station| line1_stops << station }
                #if my destination station before my starting station iterate backwards until i reach my destination.
                else
                    line1[d2Index..d1Index-1].reverse_each{|station| line1_stops << station}
                end
                #put out my destination message by combining the line1 array with my mesage.
                dest_Message = dest_Message + line1_stops.join(", ") + "."
                puts dest_Message
            end

            #if my lines and start/destination are the same, then say i'm already here
            if (current_line == dest_line && current_station == dest_station)
                puts "You are already here!"
            end

            # outputs the total number of stops
            puts "#{line1_stops.length + line2_stops.length} stops in total."
            
            #reprompts for a trip
            puts "Would you like to plan another trip? Y/N"
            restart = gets.chomp
            if restart == "Y"
                planTrip
            end

        #if my stations don't exist reprompt
        else
            puts "Please enter a valid station!"
            planTrip
        end

    #if my lines don't exist reprompt
    else
        puts "Please enter a valid line!"
        planTrip    
    end
end

# call the function 
planTrip