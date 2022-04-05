
lines = {
    "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Pl"],
    "n" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "l" => ["8th", "6th", "Union Square", "3rd", "1st"]
}

# On Line L, print instructions to get from 8th to 1st

print "Start line: "
start_line = gets.chomp

print "Start station: "
start_station = gets.chomp

print "End line: "
end_line = gets.chomp

print "End station: "
end_station = gets.chomp

def plan_trip(start_line, start_station, end_line, end_station)
    ###### SINGLE LINE ############
    first_arr = lines[start_line] #stores that lines stops as an array
    second_arr = lines[end_line] # as above
    ####Example: line_l, 8th to line_l, 1st
    #Check if start_line and end_line are the same line
    if start_line == end_line
        #If they are the same, get the indexes of the start and end stations
        stop = lines[start_line].index(start_station) #index of start station
        stop2 = lines[start_line].index(end_station) #index of stop station
        # then check if the start_station idx is less than end_station idx
       
        #if start_stn < end_stn, take the indexes and print everything in between.
        if stop < stop2
            list_stops = first_arr[stop+1..stop2]
            puts list_stops
        #If the start_stn > end_stn, take the indexes and print everything in between, then flip the array in the reverse order.
        if stop > stop2
            first_arr_reversed = first_arr.reverse()
            stop = first_arr_reversed.index(start_station)
            stop2 = first_arr_reversed.index(stop_station)
            list_stops = first_arr_reversed[stop+1..stop2]
            puts list_stops
    end
    ######## MULTIPLE LINES ##############

    if start_line != end_line

    #If start_line is different to end_line, check if start_stn is less than Union Square idx.
        stop = lines[start_line].index(start_station) #index of start station
        stop2 = lines[start_line].index("Union Square") #index of stop station
            #if start_stn index < Union Square index, take the indexes and print everything in between.
            if stop < stop2
                list_stops = first_arr[stop+1..stop2]
                puts list_stops
            #If the start_stn > Union Square, take the indexes and print everything in between, then flip the array in the reverse order.
            if stop > stop2
                first_arr_reversed = first_arr.reverse()
                stop = first_arr_reversed.index(start_station)
                stop2 = first_arr_reversed.index(stop_station)
                list_stops = first_arr_reversed[stop+1..stop2]
                puts list_stops
    # Print "change at union square"
        puts "Change at Union Square"
    # Check if Union Square > end_stn. If it is, take the indexes and print everything in between, then reverse the array.
        # if union square < end_stn, take the indexs and print everything in between.


    # puts first_trip
    # puts change_union_square
    # puts end_trip
end

# "You must travel through the following stops on the L line: 6th, Union Square, 3rd, 1st."

# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.

# # `puts` shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."



    #If start_line is different to end_line, check if start_stn is less than Union Square idx.
            #if start_stn index < Union Square index, take the indexes and print everything in between inc Union Square.
            #If the start_stn > Union Square, take the indexes and print everything in between, then flip the array in the reverse order.
    # Print "change at union square" in terminal
    # Check if Union Square > end_stn. If it is, take the indexes and print everything in between, then reverse the array.
        # if union square < end_stn, take the indexs and print everything in between.