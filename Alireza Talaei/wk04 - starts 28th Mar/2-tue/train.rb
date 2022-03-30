lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
lineL = ["8th", "6th", "Union Square", "3rd", "1st"]
line6= ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]



puts "Welcome to the Train Stations "
puts "=-" * 40
puts "[N] - line N"
puts "[L] - line L"
puts "[6] - line 6"
print "Enter your starting line: "
starting_line = gets.chomp.upcase
puts "You have chose line #{starting_line} as starting line"
print "Enter the starting station: "
starting_point = gets.chomp
print "Enter your stopping line: "
stopping_line = gets.chomp.upcase
puts "You have chose line #{stopping_line} as starting line"
print "Enter the stopping point: "
stopping_point = gets.chomp

puts "You must travel through the following stops on the #{starting_line} line:"


if (starting_line == stopping_line)
    case starting_line
    when 'N'    
        start = lineN.index(starting_point)
        stop = lineN.index(stopping_point)     
        if (start < stop)
            puts lineN[start+1..stop].shift
        else
            stops = lineN.reverse
            start = stops.index(starting_point)
            stop = stops.index(stopping_point)
            puts stops[start+1..stop]
        end
    when 'L'    
        start = lineL.index(starting_point)
        stop = lineL.index(stopping_point)     
        if (start < stop)
            puts lineL[start+1..stop].shift
        else
            stops = lineL.reverse
            start = stops.index(starting_point)
            stop = stops.index(stopping_point)
            puts stops[start+1..stop]
        end
    when '6'    
        start = line6.index(starting_point)
        stop = line6.index(stopping_point)     
        if (start < stop)
            puts line6[start+1..stop].shift
        else
            stops = line6.reverse
            start = stops.index(starting_point)
            stop = stops.index(stopping_point)
            puts stops[start+1..stop]
        end
    end
else
    case starting_line
    when 'N'
        start = lineN.index(starting_point)
        central = lineN.index("Union Square")
        if (start < central)
            puts lineN[start+1..central]
        else
            stops = lineN.reverse
            start = stops.index(starting_point)
            central = stops.index("Union Square")
            puts stops[start+1..central]
        end
    when 'L'
        start = lineL.index(starting_point)
        central = lineL.index("Union Square")
        if (start < central)
            puts lineL[start+1..central]
        else
            stops = lineL.reverse
            start = stops.index(starting_point)
            central = stops.index("Union Square")
            puts stops[start+1..central]
        end
    when '6'
        start = line6.index(starting_point)
        central = line6.index("Union Square")
        if (start < central)
            puts line6[start+1..central]
        else
            stops = line6.reverse
            start = stops.index(starting_point)
            central = stops.index("Union Square")
            puts stops[start+1..central]
        end
    end
    
    puts "Change at Union Square"
    puts "Your journey continues through the following stops on #{stopping_line} line:"
    
    case stopping_line
    when 'N'
        central = lineN.index("Union Square")
        stop = lineN.index(stopping_point)
        if (central < stop)
            puts lineN[central+1..stop]
        else
            stops = lineN.reverse
            central = stops.index("Union Square")
            stop = stops.index(stopping_point)
            puts stops[central+1..stop]
        end
    when 'L'
        central = lineL.index("Union Square")
        stop = lineL.index(stopping_point)        
        if (central < stop)
            puts lineL[central+1..stop]
        else
            stops = lineL.reverse
            central = stops.index("Union Square")
            stop = stops.index(stopping_point)
            puts stops[central+1..stop]
        end

    when '6'
        central = line6.index("Union Square")
        stop = line6.index(stopping_point)
        
        if (central < stop)
            puts line6[central+1..stop]
        else
            stops = line6.reverse
            central = stops.index("Union Square")
            stop = stops.index(stopping_point)
            puts stops[central+1..stop]
        end
    end
end




