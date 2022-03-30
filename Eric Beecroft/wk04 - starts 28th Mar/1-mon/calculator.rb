# CALCULATOR
#  You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.

# Specification:
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu

# Phase 1
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)

# Phase 2
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)

def show_menu
    puts "CALCULATOR"
    puts "=-" * 40 # Budget horizontal dividing line
    puts "[a] - Addition".center(25) # TO DO: Add the other operations here (multiply, divide, subtract)
    puts "[s] - Subtraction".center(28)
    puts "[m] - Multiplication".center(30)
    puts "[d] - Division".center(25)
    puts "[e] - Exponents".center(25)
    puts "[r] - Square Root".center(27)
    puts "[q] - Quit".center(20)
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "--" * 20
        puts "You chose addition!"
        print "Enter your first number: "
        a = gets.to_f
        print "Enter your second number: "
        b = gets.to_f
        sum = a + b
        puts "==" * 20
        puts "#{ a } + #{ b } = #{ sum }"
        puts "--" * 40
        
    when 's'
        puts "--" * 20
        puts "You chose subtraction!"
        print "Enter your first number: "
        a = gets.to_f
        print "Enter your second number: "
        b = gets.to_f
        sum = a - b
        puts "==" * 20
        puts "#{ a } - #{ b } = #{ sum }"
        puts "--" * 40

    when 'm'
        puts "--" * 20
        puts "You chose multiplication!"
        print "Enter your first number: "
        a = gets.to_f
        print "Enter your second number: "
        b = gets.to_f
        sum = a * b
        puts "==" * 20
        puts "#{ a } x #{ b } = #{ sum }"
        puts "--" * 40

    when 'd'
        puts "--" * 20
        puts "You chose division!"
        print "Enter your first number: "
        a = gets.to_f
        print "Enter your second number: "
        b = gets.to_f
        sum = a / b
        puts "==" * 20
        puts "#{ a } / #{ b } = #{ sum }"
        puts "--" * 40

    when 'e'
        puts "--" * 20
        puts "You chose exponents!"
        print "Enter a number: "
        a = gets.to_f
        print "Enter your second number: "
        b = gets.to_f
        sum = a ** b
        puts "==" * 20
        puts "#{ a } to the power of #{ b } = #{ sum }"
        puts "--" * 40

    when 'r'
        puts "--" * 20
        puts "You chose square root!"
        print "Enter a number: "
        a = gets.to_f
        sum = Math.sqrt(a)
        puts "==" * 20
        puts "Square root of #{ a } = #{ sum }"
        puts "--" * 40
    
    else
        puts "Invalid selection. You idiot."
    end

    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator!"