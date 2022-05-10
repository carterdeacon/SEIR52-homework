def show_menu 
    puts "Calculator" #TODO: check out .center to make this look nicer
    puts "=-"*40 #budget horizontal dividing line
    puts "[a] - addition"
    puts "[s] - subtraction"
    puts "[m] multiplication"
    puts "[d] - division"
    puts "[q] - quit"
    print "enter your choice:"
    #TODO : add other operations here
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == "q"
    case menu_choice
    when "a"
        puts "you chose addition!"
        puts "addition coming soon" #TODO actually do the addition somehow
# put additional when clauses for multiply, subtract ,divide etc
    else 
        puts "invalid selection you dumbass"
    end

    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this bad calculator"