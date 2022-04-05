def show_menu
    puts "Calculator"   #check out .center to make this look nicer
    puts "=-" * 40
    puts "[a] - Addition"
    puts "[b] - Subtraction"
    puts "[c] - Multiplication"
    puts "[d] - Division"
    puts "[e] - Exponent"
    puts "[f] - Square root"
    # todo: add the other operation here (* / -)
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == "q"
    case menu_choice
    when "a"
        puts "You chose addition"
        puts "Enter a number"
        num1 = gets.to_f
        puts "Enter another number"
        num2 = gets.to_f
        puts ("The answer is #{(num1 + num2)}")
    when "b"
        puts "You chose subtraction."
        puts "Enter a number"
        num1 = gets.to_f
        puts "Enter another number"
        num2 = gets.to_f
        puts ("The answer is #{(num1 - num2)}")
    when "c"
        puts "You chose multiplication."
        puts "Enter a number"
        num1 = gets.to_f
        puts "Enter another number"
        num2 = gets.to_f
        puts ("The answer is #{(num1 * num2)}")
    when "d"
        puts "You chose division."
        puts "Enter a number"
        num1 = gets.to_f
        puts "Enter another number"
        num2 = gets.to_f
        puts ("The answer is #{(num1 / num2)}")
    when "e"
        puts "You chose exponent."
        puts "Enter a number"
        num1 = gets.to_f
        puts "Enter another number"
        num2 = gets.to_f
        puts ("The answer is #{(num1 ** num2)}")
    when "f"
        puts "You chose square root."
        puts "Enter a number"
        num1 = gets.to_f
        puts ("The answer is #{Math.sqrt(num1)}")
    else 
        puts "Invalid selection"
    end

    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this calculator"