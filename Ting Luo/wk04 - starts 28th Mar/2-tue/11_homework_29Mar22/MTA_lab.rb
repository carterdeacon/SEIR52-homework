# # MTA Lab

# ## Objectives:
# * Apply your knowledge of Ruby to solve a real world problem.
# * Get really good at array manipulation.

# #### Activity
# * Create a program that models a simple subway system.
SUBWAY = {
    "n_line" => ['Times Square', '34th', '28thn', '23rdn', 'Union Square', '8thn'],
    "l_line" => ['8thl', '6th', 'Union Square', '3rd', '1st'],
    "six_line" => ['Grand Central', '33rd', '28ths', '23rds', 'Union Square', 'Astor Place']
}

TRANSIT_STOP = 'Union Square'
$stop_in_line = {}
SUBWAY.each do |line, stops|
    stops.each do |stop|
        $stop_in_line[stop] = line
    end
end


def is_same_line (start, stop)
    return $stop_in_line[start] == $stop_in_line[stop]
end


def from_to (start, stop)
    if start == TRANSIT_STOP
        line = $stop_in_line[stop]
    else 
        line = $stop_in_line[start]
    end
    start_index = SUBWAY[line].index(start)
    stop_index = SUBWAY[line].index(stop)
    route = [start]
    index = start_index
    while index != stop_index do
        if  start_index > stop_index
            index -= 1
        else
            index += 1
        end
        route << SUBWAY[line][index]
    end
    return route
end


def plan_trip (start, stop)
    start_line = $stop_in_line[start]
    puts "Your must travle through the following stops on the #{start_line}"
    if is_same_line(start, stop)
        route = from_to(start, stop)
        puts route.join(', ')
        puts "#{route.size} stops in total."
    else
        first_half_route = from_to(start, TRANSIT_STOP)
        second_half_route = from_to(TRANSIT_STOP, stop).drop(1)
        stopCounter = first_half_route.concat(second_half_route.drop(1)).size
        puts "You must travel through the following stops on the #{start_line}: "
        puts first_half_route.join(', ')
        puts "Change at #{TRANSIT_STOP}"
        puts "Your journey continues through the following stops: #{second_half_route.join(', ')}"
        puts "#{stopCounter} stops in total."
    end
end

plan_trip('Times Square', '33rd')
    


        # * The program takes the line and stop that a user is getting on at and the line
# and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

# ```ruby
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.

# # `puts` shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."
# ```

# * There are 3 subway lines:
#   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
#   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
#   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
#   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


# #### Hints:
# * Work out how you would do it on paper first! Then start to explain that process in Ruby.
# * Get the program to work for a single line before trying to tackle multiple lines.
# * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```gets``` later to make it more interactive.
# * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# * The key to the lab is finding the index positions of each stop. (hint: ```index```)
# * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)