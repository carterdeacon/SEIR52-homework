require 'pry'

# MTA Lab

## Objectives:
# Apply your knowledge of Ruby to solve a real world problem.
# Get really good at array manipulation.

## Activity
# Create a program that models a simple subway system.
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.
# `puts` shows output similar to this:
# "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# "Change at Union Square."
# "Your journey continues through the following stops: 23rd, 28th, 33rd."
# "7 stops in total."

# There are 3 subway lines:
    # The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
    # The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
    # The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
    # All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

# Hints:
# Work out how you would do it on paper first! Then start to explain that process in Ruby.
# Get the program to work for a single line before trying to tackle multiple lines.
# Don't worry about prompting the user for input. Hard code some values to get it working. You can use gets later to make it more interactive.
# Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# The key to the lab is finding the index positions of each stop. (hint: index)
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

def plan_trip (start_line, start_stop, end_line, end_stop)

    subway = {
    "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
    }

    intersection = subway.values.map.inject &:&

    first_travel = subway[start_line].index(start_stop)
    first_change = subway[start_line].index(intersection[0])
    second_travel = subway[end_line].index(end_stop)
    second_change = subway[end_line].index(intersection[0])

    if first_travel < first_change
        first_travel += 1
        first_stops = subway[start_line][first_travel..first_change]
    else
        first_travel -= 1
        first_stops = subway[start_line][first_change..first_travel].reverse()
    end
    
    if second_change < second_travel
        second_change += 1
        second_stops = subway[end_line][second_change..second_travel]
    else
        second_change -= 1
        second_stops = subway[end_line][second_travel..second_change].reverse()
    end
    
    total_stops = first_stops.count() + second_stops.count()
    messages(start_line, first_stops, total_stops, end_line, second_stops, intersection.join(''))

end

def messages(start_line, first_stops, total_stops, end_line, second_stops, intersection)
    if first_stops == []
        puts "You must travel through the following stops on the #{end_line} line: #{second_stops.join(', ')}. #{total_stops} stops in total."
    elsif second_stops == []
        puts "You must travel through the following stops on the #{start_line} line: #{first_stops.join(', ')}. #{total_stops} stops in total."
    elsif start_line == end_line
        puts "You must travel through the following stops on the #{start_line} line: #{first_stops.join(', ')}, #{second_stops.join(', ')}. #{total_stops} stops in total."
    else
        puts "You must travel through the following stops on the #{start_line} line: #{first_stops.join(', ')}. Change at #{intersection}. Your journey continues through the following stops: #{second_stops.join(', ')}. #{total_stops} stops in total."
    end
end

puts(plan_trip('N', 'Times Square', '6', '33rd'))

binding.pry