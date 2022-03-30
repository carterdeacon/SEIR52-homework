$subway = { 'N' => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"], 'L' => ["8th", "6th", "Union Square", "3rd", "1st"], '6' => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"] }

def travel(current_line, stop_on, next_stop) 
    line_indexes = [] << $subway[current_line].find_index(stop_on) << next_stop_index = $subway[current_line].find_index(next_stop)

    trip = $subway[current_line][line_indexes.min..line_indexes.max]

    trip.reverse! unless line_indexes == line_indexes.sort
    return trip
end

def plan_trip(line_on, stop_on, line_off, stop_off)
    stop_count = 0

    next_stop = stop_off

    next_stop = "Union Square" unless line_on == line_off #check if change required

    trip = travel line_on, stop_on, next_stop

    puts "You must travel through the following stops on the #{ line_on } line: #{ trip.drop(1).join ", " }."

    stop_count += trip.size - 1

    if line_on == line_off
        puts "#{ stop_count } stops in total"
        return true
    end
    
    puts "Change at Union Square."

    stop_on = "Union Square"

    current_line = line_off
    next_stop = stop_off
    
    trip = travel line_off, "Union Square", stop_off

    puts "Your journey continues through the following stops: #{ trip.drop(1).join ", " }."

    puts stop_count += trip.size - 1
end

binding.irb
