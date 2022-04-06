def show_menu
    puts 'Calculator' #TODO: check out .center
    puts '=-' * 40 # Budget horizontal dividing line
    puts '[a] - addition' #TODO Add the other operations
    puts '[q] - Quit'
    print 'Enter your choice'
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts 'You chose addition!'
        puts 'Addition coming soon' #TODO add addition
    else 
     puts 'Invalide selection, you twit.'

     show_menu
     menu_choice = gets.chomp.downcase
end

puts 'Thanks for using this crappy calculator.'