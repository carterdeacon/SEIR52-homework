def show_menu
    puts "Calculator" #Todo: check out .center to make this look nicer
    puts "=-" * 40
    puts "[a] - addition"
    puts "[s] - subtraction"
    puts "[m] - multiplication"
    puts "[d] - division"
    puts "[e] - exponents"
    puts "[sqr] - square root"
    puts "[q] - quit"
    print "Enter your choice: "
end

def sum(num1, num2)
    result = num1 + num2
    return "The sum of both numbers is #{result}."
end

def subtract(num1, num2)
    result = num1 - num2
    return "#{num1} - #{num2} = #{result}"
end

def multiply(num1, num2)
    result = num1 * num2
    return "#{num1} x #{num2} = #{result}"
end

def divide(num1, num2)
    result = num1 / num2
    return "#{num1} divided by #{num2} = #{result}"
end

def exponent(num1, num2)
    result = num1 ** num2
    return "#{num1} to the power of #{num2} = #{result}"
end

def square_root(num)
    result = Math.sqrt(num)
    return "The square root of #{num} is #{result}"
end


show_menu
menu_choice = gets.chomp.downcase

until menu_choice == "q"
    case menu_choice
    when 'a'
        puts "You chose addition! Enter the first number: "
        num1 = gets.chomp.to_f
        puts "Enter the second number: "
        num2 = gets.chomp.to_f
        puts sum(num1, num2)
    when 's'
        puts "You chose subtraction! Enter the first number: "
        num1 = gets.chomp.to_f
        puts "Enter the second number: "
        num2 = gets.chomp.to_f
        puts subtract(num1, num2)
    when 'm'
        puts "You chose multiplication! Enter the first number: "
        num1 = gets.chomp.to_f
        puts "Enter the second number: "
        num2 = gets.chomp.to_f
        puts multiply(num1, num2)
    when 'd'
        puts "You chose divison! Enter the first number: "
        num1 = gets.chomp.to_f
        puts "Enter the second number"
        num2 = gets.chomp.to_f
        puts divide(num1, num2)
    when 'e'
        puts "Enter the base number: "
        num1 = gets.chomp.to_f
        puts "Enter the power number: "
        num2 = gets.chomp.to_f
        puts exponent(num1, num2)
    when 'sqr'
        puts "Enter the number you wish to find the square root of: "
        num = gets.chomp.to_f
        puts square_root(num)
    else
        puts "Invalid selection, try again." 
    end
    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator"