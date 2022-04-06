def show_menu
    puts "Calculator".center(30,"-") 
    puts "==============================="
    puts "| [a] - Addition              |"
    puts "| [s] - Subtraction           |"
    puts "| [m] - Multiplication        |"
    puts "| [d] - Division              |"
    puts "| [e] - Exponents             |"
    puts "| [r] - Sqaure Root           |"
    puts "|=============================|"
    puts "| [q] - Quit                  |"
    puts "==============================="
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You chose addition!"
        print  "You are adding the number: " 
        num1 = gets.to_f
        print "to the number: " 
        num2 = gets.to_f
        puts "The answer is #{num1 + num2}"

    when 's'
        puts "You chose subtraction!"
        print  "You are using the number: " 
        num1 = gets.to_f
        print "to minus the number: " 
        num2 = gets.to_f
        puts "The answer is #{num1 - num2}"

    when 'm'
        puts "You chose subtraction!"
        print "You are multiplying the number: "
        num1 = gets.to_f
        print "to the number: " 
        num2 = gets.to_f
        puts "The answer is #{num1 * num2}"

    when 'd'
        puts "You chose subtraction!"
        print  "You are using the number: " 
        num1 = gets.to_f
        print "to divide the number: " 
        num2 = gets.to_f
        puts "The answer is #{num1 / num2}"

    when 'e'
        puts "You chose exponents!"
        print "You are raising the number: " 
        num1 = gets.to_f
        print "of the power of: " 
        num2 = gets.to_f
        puts "The answer is #{num1 ** num2}"

    when 'r'
        puts "You chose square roots!"
        print "You are checking the square root of the number: " 
        num1 = gets.to_f
        result = Math.sqrt(num1)
        puts "The answer is #{result}"


    else 
        puts "Invalid selection. Back to menu and select again."
        show_menu
        menu_choice = gets.chomp.downcase
    end

    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator!"