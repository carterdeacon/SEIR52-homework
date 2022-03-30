# Calculate a trip time and cost given inputs for

# distance (speed * time)
# miles per gal
# price per gal
# speed in miles per hour
def show_menu
    puts "Trip Calculator"
    puts "-" * 20
    puts "Please enter [y] to continue or [q] to quit"
end

def trip_input
    puts "Please enter the trip distance (km): "
    distance_input = gets.to_f
    puts "Please enter miles per gallon: "
    miles_input = gets.to_f
    puts "What's the price per gallon: "
    price_input = gets.to_f
    puts "Please enter speed (mph): "
    speed_input = gets.to_f

    return distance_input, miles_input,price_input,speed_input
end

continue_is_true = 'y'
until continue_is_true == 'q' 
    show_menu
    continue_is_true = gets[0].downcase
    distance, miles, price, speed = trip_input()

    cost = price * miles * distance 
    time = distance / speed
    puts " The trip will take #{time} hrs and cost will be $#{cost}."



