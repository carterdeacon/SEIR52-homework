def show_menu
    puts "Calculator" #to do: .center to make it nicer
    puts "=-" * 40 # just a line for terminal
    puts "[a] - addition"
    puts "[m] - multiply"
    puts "[d] - divide"

    ## needs a quit menu
    puts "[q] - Quit"
    print 'Enter your choice:'
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        print "give me a number: "
        number = gets.to_f
        print "...and another:"
        toAdd = gets.to_f
        puts "#{ number + toAdd }"
    when 'm'
        print "give me a number: "
        number = gets.to_f
        print "...and another:"
        toAdd = gets.to_f
        puts "#{ number * toAdd }"
    when 'd'
        print "give me a number: "
        number = gets.to_f
        print "...and another:"
        toAdd = gets.to_f
        puts "#{ number / toAdd }"

    else puts "invalid selection. You dolt."
    end

        show_menu
        menu_choice = gets.chomp.downcase
end
puts "thanks for using dumb calculator"