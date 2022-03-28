def show_menu
    puts "Calculator" # TODO: check out .center to make this look nicer
    puts "=-" * 40 # Budget horizontal dividing line
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[e] - Exponentiation"
    puts "[r] - Square roots"
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You chose addition!"
        print "Type first number : "
        first_number = gets.chomp.to_f
        print "Type scound number : "
        second_number = gets.chomp.to_f
        puts "The result is #{first_number + second_number}."
    when 's'
        puts "You chose subtraction!"
        print "Type first number : "
        first_number = gets.chomp.to_f
        puts "Type scound number : "
        second_number = gets.chomp.to_f
        def subtract (first_number,second_number)
            result = first_number - second_number
            return result
        end
        puts "The result is #{subtract(first_number,second_number)}"
    when 'd'
        puts "You chose division!"
        print "Type first number : "
        first_number = gets.chomp.to_f
        print "Type scound number : "
        second_number = gets.chomp.to_f
        puts "The result is #{first_number / second_number}."
    when 'm'
        puts "You chose multiplication!"
        print "Type first number : "
        first_number = gets.chomp.to_f
        print "Type scound number : "
        second_number = gets.chomp.to_f
        puts "The result is #{first_number * second_number}."
    when 'e'
        puts "You chose exponentiation!"
        print "Type base number : "
        base_number = gets.chomp.to_f
        print "Type exponent number : "
        exponent_number = gets.chomp.to_f
        def exponentiation (base_number,exponent_number)
            result = base_number ** exponent_number
            return result
        end
        puts "The result is #{exponentiation(base_number,exponent_number)}"
    when 'r'
        puts "You chose square roots!"
        print "Type a number : "
        a_number = gets.chomp.to_f
        puts "The result is #{Math.sqrt(a_number)}."

    else
        puts "Invalid selection. You idiot."
    end

    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator!"