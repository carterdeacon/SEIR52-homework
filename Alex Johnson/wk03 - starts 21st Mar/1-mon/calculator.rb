def add (a,b)
   result = a + b
   return result
end
def subtract (a,b)
    a - b
end

def multiply (a,b)
    a * b
end 

def divide (a,b)
    a / b
end 

def show_menu
    puts "=-" * 40
    puts "calculator".center(80, padstr = ' ')  #TODO: checkout .center to make this look nicer
    puts "=-" * 40
    puts "[a] - addition"
    puts "[s] - subtraction"
    puts "[m] - multiplication"
    puts "[d] - division"
    puts "[q] - quit"
    print "Enter your choice: " 
end

show_menu
menu_choice  = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "you chose addition"
        print "Enter addend 1: "
        a = gets.to_i
        print "Enter addend 2: "
        b = gets.to_i
        puts "the sum of #{ a } and #{ b } is: #{ add(a,b) }"
        show_menu
        menu_choice = gets.chomp.downcase
    when 's'
        puts "you chose subtraction"
        print "Enter addend 1: "
        a = gets.to_i
        print "Enter addend 2: "
        b = gets.to_i
        puts "the sum of #{ a } minus #{ b } is: #{ subtract(a,b) }"
        show_menu
        menu_choice = gets.chomp.downcase
    when 'm'
        puts "you chose multiplication"
        print "Enter factor 1: "
        a = gets.to_i
        print "Enter factor 2: "
        b = gets.to_i
        puts "the sum of #{ a } times #{ b } is: #{ multiply(a,b) }"
        show_menu
        menu_choice = gets.chomp.downcase
    when 'd'
        puts "you chose division"
        print "Enter dividend: "
        a = gets.to_i
        print "Enter divisor: "
        b = gets.to_i
        puts "the sum of #{ a } divided by #{ b } is: #{ divide(a,b) }"
        show_menu
        menu_choice = gets.chomp.downcase
    else 
        puts "invalid"

        show_menu
        menu_choice = gets.chomp.downcase
    end

    puts "thanks mate"
end









=begin    
# Calculator

### Explanation
- You will be building a calculator.  A calculator can perform multiple arithmetic operations.  
  Your function should allow the user to choose which operation is expected, enter in the values 
  to perform the operation on, and ultimately view the result.

### Specification:
- A user should be given a menu of operations
- A user should be able to choose from the menu
- A user should be able to enter numbers to perform the operation on
- A user should be shown the result
- This process should continue until the user selects a quit option from the menu

#### Phase 1
- Calculator functionality
- Calculator should be able to do basic arithmetic (+,-, *, /)

#### Phase 2
- Advanced Calculator functionality
- Calculator should be able to do basic arithmetic (exponents, square roots)



# Bonus
## Mortgage Calculator
Calculate the monthly required payment given the other variables as input (look up the necessary variables)

## BMI Calculator
Calculate the body mass index (BMI) for an individual, given their height and weight

## Trip Calculator
Calculate a trip time and cost given inputs for
- distance
- miles per gallon
- price per gallon
- speed in miles per hour
=end