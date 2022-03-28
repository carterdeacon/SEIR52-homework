def show_menu
    puts "=-" * 40 #creates a nice separation line between result and user input
    puts "[a] — Addition"
    puts "[m] — Multiply"
    puts "[d] — Divide"
    puts "[s] — Subtract"
    puts "[e] — Exponent"
    puts "[q] — Quit"
    print "Enter your choice: "
end

show_menu

menu_choice = gets.chomp.downcase

until menu_choice == 'q' #asking user for a letter input...
    case menu_choice
    when 'a' 
        puts "You chose addition!"
        print "Enter first number: "
        mult1 = gets.to_f
        print "Enter second number: "
        mult2 = gets.to_f
        ans = mult1 + mult2
        puts ("#{ans}")
    when 'm'
        puts "You chose multiplication!"
        print "Enter first number: "
        mult1 = gets.to_f
        print "Enter second number: "
        mult2 = gets.to_f
        ans = mult1 * mult2
        puts ("#{ans}")
    when 'd'
        puts "You chose division!"
        print "Enter first number: "
        mult1 = gets.to_f
        print "Enter second number: "
        mult2 = gets.to_f
        ans = mult1 / mult2
        puts ("#{ans}")
    when 's'
        puts "You chose subtraction!"
        print "Enter first number: "
        mult1 = gets.to_f
        print "Enter second number: "
        mult2 = gets.to_f
        ans = mult1 - mult2
        puts ("#{ans}")
    when 'e'
        puts "You chose exponent!"
        print "Enter first number: "
        mult1 = gets.to_f
        print "Enter second number (X to the power of Y...): "
        mult2 = gets.to_f
        ans = mult1 ** mult2
        puts ("#{ans}")
        else 
        puts "Invalid selection, silly!"
    end 

    show_menu
    menu_choice = gets.chomp.downcase

end

puts "Thanks for using my calculator"