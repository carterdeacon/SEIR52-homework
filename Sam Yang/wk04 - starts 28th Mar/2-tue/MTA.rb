require 'pry'

mta = {
    "n" => ["time square", "34th", "28th", "23rd", "union square"],
    "l" => ["8th", "6th", "union square", "3rd", "1st"],
    "6" => ["grand central", "33rd", "28th", "23rd", "union square", "astor place"]
}


 
puts "Trip planner"
puts "=-" * 40
puts "[N] - line N"
puts "[L] - line L"
puts "[6] - line 6"
print "Enter the starting line: "
line_1 = gets.chomp.downcase
puts "=-" * 40
puts "[N] - line N"
puts "[L] - line L"
puts "[6] - line 6"
print "Enter the second line: "
line_2 = gets.chomp.downcase
puts "=-" * 40
print "Enter the first stop: "
stop_first = gets.chomp.downcase
puts "=-" * 40
print "Enter the last stop: "
stop_last = gets.chomp.downcase



if  line_1 == line_2
    stop_1 = mta[line_1].index(stop_first)
    stop_2 = mta[line_1].index(stop_last)
    if stop_1 < stop_2
        all_station = mta[line_1][stop_1..stop_2]
        total_stops = all_station.size
        puts "Your stops are #{all_station}"
        puts "Your total stops are #{total_stops}. "
    else 
        all_station = mta[line_1][stop_2..stop_1].reverse
        total_stops = all_station.size
        puts "Your stops are #{all_station}"
        puts "Your total stops are #{total_stops}. "
    end
else 
    stop_1 = mta[line_1].index(stop_first)
    stop_2 = mta[line_2].index(stop_last)
    station_union_1 = mta[line_1].index("union square")
    station_union_2 = mta[line_2].index("union square")
    if stop_1 < station_union_1
        stations_line_1 = mta[line_1][stop_1..station_union_1]
        stops_in_line_1 = stations_line_1.size
        if stop_2 < station_union_2
            stations_line_2 = mta[line_2][stop_2..station_union_2 - 1].reverse
        else 
            stations_line_2 = mta[line_2][station_union_2 + 1..stop_2]
        end
    else 
        stations_line_1 = mta[line_1][station_union_1..stop_1].reverse
        stops_in_line_1 = stations_line_1.size
        if stop_2 < station_union_2
            stations_line_2 = mta[line_2][stop_2..station_union_2 - 1].reverse
        else 
            stations_line_2 = mta[line_2][station_union_2 + 1..stop_2]    
          
        end

    end
    stops_in_line_2 = stations_line_2.size
    total_stops = stops_in_line_1 + stops_in_line_2    
    puts "You need to travel through the following stops on line #{line_1}: #{stations_line_1.join(", ")}, changed at Union Square, then through the following stops: #{stations_line_2.join(", ")}, #{total_stops} stops in total." 
end

