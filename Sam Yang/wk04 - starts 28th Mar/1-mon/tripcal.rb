print "Enter the distance in miles: "
distance = gets.to_i
print "miles per gallon: "
mpg = gets.to_f
print "price per gallon: "
ppg = gets.to_f
print "speed in miles per hour: "
speed = gets.to_f

trip_time = distance / speed
puts "Your trip time is #{trip_time} hrs."
cost = distance / mpg * ppg
puts "The cost of this trip is $#{cost}."