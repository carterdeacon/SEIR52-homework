# # Calculator

# ### Explanation
# - You will be building a calculator.  A calculator can perform multiple arithmetic operations.  Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.

# ### Specification:
# - A user should be given a menu of operations
# - A user should be able to choose from the menu
# - A user should be able to enter numbers to perform the operation on
# - A user should be shown the result
# - This process should continue until the user selects a quit option from the menu

# #### Phase 1
# - Calculator functionality
# - Calculator should be able to do basic arithmetic (+,-, *, /)

# #### Phase 2
# - Advanced Calculator functionality
# - Calculator should be able to do basic arithmetic (exponents, square roots)



# # Bonus
# ## Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)

# ## BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight

# ## Trip Calculator
# Calculate a trip time and cost given inputs for
# - distance
# - miles per gallon
# - price per gallon
# - speed in miles per hour


def show_menu
    puts "=-" * 40 # Budget horizontal dividing line
    puts "Calculator" # TODO: check out .center to make this look nicer
    puts "=-" * 40 # Budget horizontal dividing line
    puts "[a] - add"
    puts "[s] - subtract"
    puts "[m] - multiply"
    puts "[d] - divide"
    puts "[e] - exponent"
    puts "[r] - square root"
    # TODO: Add the other operations here (multiply, divide, subtract)
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice =  gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You chose addition"
        puts "Please enter numbers you want to add separated by a space"
        nums_add = gets.chomp
        adds_arr = nums_add.split(" ")
        addition = adds_arr.map(&:to_f)
        puts "The answer is #{addition.sum}\n\n"
    when 's'
        puts "You chose subtraction"
        puts "Please enter numbers you want to subtract separated by a space (num1 - num2 - num3..."
        nums_sub = gets.chomp
        sub_arr = nums_sub.split(" ")
        subtraction = sub_arr.map(&:to_f)
        puts "The answer is #{subtraction.reduce(:-) }\n\n"
    when 'm'
        puts "You chose multiplication"
        puts "Please enter numbers you want to multiply separated by a space"
        nums_mul = gets.chomp
        mul_arr = nums_mul.split(" ")
        multiplication = mul_arr.map(&:to_f)
        puts "The answer is #{multiplication.reduce(:*) }\n\n"
    when 'd'
        puts "You chose division"
        puts "Please enter numbers you want to divide separated by a space (num1 / num2)"
        nums_div = gets.chomp
        div_arr = nums_div.split(" ")
        division = div_arr.map(&:to_f)
        puts "The answer is #{division.reduce(:/) }\n\n"
    when 'e'
        puts "You chose exponent"
        puts "Please enter number"
        num_ex = gets.chomp
        puts "Please enter exponential number (power)"
        num_power = gets.chomp
        result_ex = num_ex ** num_power
        puts "The answer is #{ result_ex.to_f }\n\n"
    when 'r'
        puts "You chose square root"
        puts "Please enter number"
        num_sq = gets.chomp.to_f
        result_sq = Math.sqrt(num_sq)
        puts "The answer is #{ result_sq.to_f }\n\n"
    else
        puts "Invalid selection. You plump."
    end

    show_menu
    menu_choice = gets.chomp.downcase

end

puts "Thanks for using this crappy calculator!"

