def show_menu
    puts "Trip Calculator".center(10, "-")
    puts "=-" * 40
    puts "[t] - trip time"
    puts "[c] - trip cost"
    puts "[q] - quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 't'
        puts "What is the distance you're travelling in km? "
        distance = gets.chomp.to_f.ceil(2)
        puts "What is your travel speed in km per hour?"
        speed = gets.chomp.to_f.ceil(2) 
        time = distance / speed 
        puts "It will take you #{time.to_f.ceil(2)} hours to reach your destination!"
    when 'c'
        puts "What is the distance you're travelling in km? "
        distance = gets.chomp.to_f.ceil(2)
        puts "What is your car's consumption in km/L? "
        consumption = gets.chomp.to_f.ceil(2)
        puts "What is the price per L of fuel in dollars?"
        fuel_price = gets.chomp.to_f.ceil(2)
        cost = consumption * fuel_price * distance
        puts "It will cost you $#{cost.to_f.ceil(2)} to reach your destination."
    end
    show_menu
    menu_choice = gets.chomp.downcase
end
puts "Thanks for using this crappy trip calculator!"