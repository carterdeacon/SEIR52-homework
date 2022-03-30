require 'pry'

# MTA LABS TAKE TWO

# OBJECTIVES
# Apply your knowledge of Ruby to solve a real world problem.
# Get really good at array manipulation.

# ACTIVITY
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

# subway = {
#     "N line" => ['Times Square' , '34th', '28th', '23rd', 'Union Square', '8th'],
#     "L line" => ['8th', '6th', 'Union Square', '3rd', '1st'],
#     "6 line" => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
# }

# Single line solution
# def plan_trip( start, stop)
#     subway = {
#     "N" => ['Times Square' , '34th', '28th', '23rd', 'Union Square', '8th'],
#     "L" => ['8th', '6th', 'Union Square', '3rd', '1st'],
#     "6" => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
# }

#     s1 = subway["N"].index("#{ start }") # Stop 1
#     s2 = subway["N"].index("#{ stop }") # Stop 2

#     if s1 > s2
#         subway["N"].reverse!
#         ns1 = subway["N"].index("#{ start }") # New Stop 1
#         ns2 = subway["N"].index("#{ stop }") # New Stop 2
#         stops = subway["N"][ns1+1...ns2+1]
#     else
#         stops = subway["N"][s1+1...s2+1]
#     end

#     p "You must travel through the followings stops on the N Line: #{ stops }."
#     p "#{ stops.count } stops in total."
# end

# plan_trip( 'Times Square', '23rd' )

# Multi line solution
def plan_trip( line1, start, line2, stop)
    subway = {
    "N" => ['Times Square' , '34th', '28th', '23rd', 'Union Square', '8th'],
    "L" => ['8th', '6th', 'Union Square', '3rd', '1st'],
    "6" => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
}

    l1 = "#{ line1 }" # Start line
    l2 = "#{ line2 }" # End line

    s1 = subway[l1].index("#{ start }") # Stop 1
    s2 = subway[l2].index("#{ stop }") # Stop 2
    union1 = subway[l1].index("Union Square") # Line 1 Union Square index
    union2 = subway[l2].index("Union Square") # Line 2 Union Square index

    if l1 == l2 # Check if the journey is only one train line
        if s1 > s2
            subway[l1].reverse!
            ns1 = subway[l1].index("#{ start }") # New Stop 1
            ns2 = subway[l1].index("#{ stop }") # New Stop 2
            stops = subway[l1][ns1+1...ns2+1]
        else
            stops = subway[l1][s1+1...s2+1]
        end
        p "You must travel through the followings stops on the #{ l1 } Line: #{ stops }."
    end

    if l1 != l2 # Check if the journey is multiple lines
        
        if s1 > union1 # Check if the first stop is above Union Square
            subway[l1].reverse!
            ns1 = subway[l1].index("#{ start }") # New Stop 1
            nUnion = subway[l1].index("Union Square") # New Union Square index
            part1 = subway[l1][ns1+1...nUnion+1]
            p "You must travel through the followings stops on the #{ l1 } Line: #{ part1 }."
            p "Change at Union Square."

            if s2 < union2 # Check if the last stop is below Union Square
                subway[l2].reverse!
                ns2 = subway[l2].index("#{ stop }") # New Stop 2
                nUnion2 = subway[l2].index("Union Square") # New Union Square index on line 2
                part2 = subway[l2][nUnion2+1...ns2+1]
                p "Your journey continues through the following stops: #{ part2 }"

                stops = part1 + part2
            else
                part2 = subway[l2][union2+1...s2+1]
                p "Your journey continues through the following stops: #{ part2 }"
                stops = part1 + part2
            end

        else
            part1 = subway[l1][s1+1...union1+1]
            p "You must travel through the followings stops on the #{ l1 } Line: #{ part1 }."
            p "Change at Union Square."
            part2 = subway[l2][union2+1...s2+1]
            p "Your journey continues through the following stops: #{ part2 }"
            stops = part1 + part2
        end

    end

    p "#{ stops.count } stops in total."
end

plan_trip( 'L', '1st', 'N', 'Times Square' )