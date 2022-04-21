# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.



train_lines = {
    N => [:Times_Square, '34th', '28th_n', '23rd_n', :Union_Square, '8th_n'],
    L => ['8th_l', '6th', :Union_Square, '3rd', '1st'],
    6 => ['Grand Central', '33rd', '28th_6', '23rd_6', :Union_Square, :Astor_Place]
}

puts 'Where would you like to travel to?'
plan_trip = gets.chomp
# on_line, on_stop, off_line, off_stop
puts "To get on at ${plan_trip[1]} on the ${plan_trip[0]} line and get off at ${plan_trip[3]} on the {plan_trip[3]} line, you will travel through " 

# 







#plan_trip 
#ON at N
#      Times Square
#      6 
#      33rd

if 


