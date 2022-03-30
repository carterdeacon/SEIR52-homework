distance = 0
mpg = 0
ppg = 0
mph = 0

until distance != 0 && mpg !=0 && ppg !=0 && mph !=0
    puts "=" * 50
    print "Enter distance in miles: "
    distance = gets.to_f
    print "Enter miles per gallon: "
    mpg = gets.to_f
    print "Enter price per gallon in $: "
    ppg = gets.to_f
    print "Enter speed in mph: "
    mph = gets.to_f
end

 trip_time = distance / mph
 trip_cost = (distance / mpg) * ppg
puts "Your trip time is: #{ trip_time.round(2) } hour(s)"
puts "Your trip cost is: $#{ trip_cost.round(2) }"
