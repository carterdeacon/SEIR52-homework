def show_menu
    puts "Trip Calculator".center(30,"-") 
    puts "==============================="
    puts "|         LET'S GO!           |"
    puts "|=============================|"
    puts "|         [g] - Go            |"
    puts "|         [q] - Quit          |"
    puts "==============================="  
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when "g"
        print "Enter the total distance (km): "
        distance = gets.to_f
        print "Enter the miles per gallon (mpg): "
        mpg = gets.to_f
        print "Enter the price per gallon (aud): "
        price_gallon = gets.to_f
        print "Enter speed in miles per hour (km/h): "
        speed = gets.to_f
        puts "You will spend #{distance/speed} hours to finish your trip!"
        puts "You will use #{distance/mpg} gallon of fuel to finish your trip!"
        puts "You will spend #{distance/mpg * price_gallon } dollors on the trip!"
    end
    show_menu
    menu_choice = gets.chomp.downcase

end
