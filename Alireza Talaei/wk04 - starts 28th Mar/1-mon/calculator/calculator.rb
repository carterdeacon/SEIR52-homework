def show_menu
    puts "Calculator".center(75) # TODO: checkout .center to make this look nicer
    puts "=-" *40 #Budget Horizental dividing line
    puts "[a] - Addition"
    puts "[s] - Substraction"
    puts "[m] - Multiply"
    puts "[d] - Division" 
    puts "[q] - Quit"
    puts "[sq] - Square Roots"
    puts "[e] - Exponents"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You chose addition!"
        print "Enter the first number: " 
        num1 = gets.to_f
        print "Enter the second number: "
        num2 = gets.to_f
        puts "The result is #{num1 + num2} "
    when 's'
        puts "You chose subtraction!"
        print "Enter the first number: " 
        num1 = gets.to_f
        print "Enter the second number: "
        num2 = gets.to_f
        puts "The result is #{num1 - num2} "
    when 'm'
        puts "You chose multiply!"
        print "Enter the first number: " 
        num1 = gets.to_f
        print "Enter the second number: "
        num2 = gets.to_f
        puts "The result is #{num1 * num2} "
    when 'd'
        puts "You chose division!"
        print "Enter the first number: " 
        num1 = gets.to_f
        print "Enter the second number: "
        num2 = gets.to_f
        puts "The results is #{num1 / num2} "
    when 'sq'
        puts "You chose square roots!"
        print "Enter the number: " 
        num1 = gets.to_f        
        puts "The results is #{Math.sqrt(num1)} "
    when 'e'
        puts "You chose exponents!"
        print "Enter the first number: " 
        num1 = gets.to_f
        print "Enter the second number: "
        num2 = gets.to_f
        puts "The results is #{num1 ** num2} "
    else
        puts "Invalid selection. You idiot."
    end

    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator!"