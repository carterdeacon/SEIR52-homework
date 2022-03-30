# MTA built using Ruby

def plan_trip(start_line, starting_stop, end_line, ending_stop)
    puts "Welcome to the subway"    
    result_string = ""
    $number_stops_starting_line = 0;
    $number_stops_ending_line = 0;

    lines = [
        {
            :line_name => "N",
            :line_stops => [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ]
        }, 
        {
            :line_name => "L",
            :line_stops => [ "8th" , "6th", "Union Square", "3rd", "1st" ]
        }, 
        {
            :line_name => "6",
            :line_stops => [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ]
        }
    ]
    
    def get_array_of_hash_line(lines_arr, line)   # method to return the line hash same as line but it returned an array of hash 
        lines_arr.select { |line_hash| line == line_hash[:line_name] }       
    end
    
    starting_line_stops_arr = get_array_of_hash_line(lines, start_line)[0][:line_stops] # method call to store all the stops in starting line as array
    ending_line_stops_arr = get_array_of_hash_line(lines, end_line)[0][:line_stops]   # method call to store all the stops in ending line as array
    

    def stops_in_start_line(starting_stop, line_arr)                                # method to get number of stops in starting line  
        if line_arr.index(starting_stop) > line_arr.index("Union Square")           # and return a string containing stops in starting line 
            line_arr = line_arr.reverse                                              # from starting stop (excluding) to "Union Square" (including)
        end           
        line_arr.each {|stop|
        if ( starting_stop === stop )
            sliced_arr = line_arr[ line_arr.index(starting_stop)+1..line_arr.index("Union Square")]
            $number_stops_starting_line = sliced_arr.length
            sliced_arr_as_string = sliced_arr.join(", ")             
            return sliced_arr_as_string          
        end
    }
    end


    def stops_in_end_line(ending_stop, line_arr)                                 # method to get number of stops in ending line  
        if line_arr.index("Union Square") > line_arr.index(ending_stop)          # and return a string containing stops in ending line 
            line_arr = line_arr.reverse                                          # from "Union Square" (excluding) to ending stop (including)
        end           
        line_arr.each {|stop|
        if ( ending_stop === stop )
            sliced_arr = line_arr[ line_arr.index("Union Square")+1..line_arr.index(ending_stop)]
            $number_stops_ending_line = sliced_arr.length
            sliced_arr_as_string = sliced_arr.join(", ")             
            return sliced_arr_as_string          
        end
    }
    end

    stops_in_starting_line = stops_in_start_line(starting_stop, starting_line_stops_arr)  # method call to store all the stops in starting line as a string   
    stops_in_ending_line = stops_in_end_line(ending_stop, ending_line_stops_arr)          # method call to store all the stops in ending line as a string
    total_stops = $number_stops_starting_line + $number_stops_ending_line

    start_line_string = "You must travel through the following stops on the #{ start_line } line: #{ stops_in_starting_line }."
    change_line_string = "Change at Union Square."
    end_line_string = "Your journey continues through the following stops: #{ stops_in_ending_line }."
    total_stops_string = "#{ total_stops } stops in total."

    result_string = start_line_string + "\n" + change_line_string + "\n" + end_line_string + "\n" + total_stops_string
    puts result_string
    puts "=-" *80
end

plan_trip("N", "Times Square", "6", "33rd")
plan_trip("N", "8th", "L", "1st")
plan_trip("L", "1st", "6", "Grand Central")
plan_trip("6", "Astor Place", "N", "Times Square")
plan_trip("6", "28th", "N", "28th")

