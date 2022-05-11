require 'pry'

def show_menu
    p"Plan Trip" 
    p "=-" * 40

    p "[N] - North Line"
    p "[L] - L Line"
    p "[6] - 6 Line"
    p "[Q] - Cancel Trip"
    print "Enter your choice:"
end

show_menu 
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when n #= ["Times Square", "34th", "28th", "23rd", "Union Square", "8th" ] 
        print 'Enter Current Station :'
        #:n = gets.chomp()
        print 'Enter desination :'
        #:n = gets.chomp().length







 

 

    end 
show_menu
menu_choice = gets.chomp.downcase
end 
binding.pry