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

# Bonus
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
    puts "Calculator" # TODO: check out .center to make this look nicer
    puts "=-" * 40 #Budget horizontal dividing line
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[e] - Exponent"
    puts "[r] - Square root" 
    puts "[bmi] - Body Mass Index"
    puts "[trip] - Trip Calculator"
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu

menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You chose addition!"
        print "Enter a number: "
        a = gets.to_f

        print "Enter another number:"
        b = gets.to_f
        puts a + b

    when 's'
        puts "You chose subtraction"
        print "Enter a number: "
        a = gets.to_f

        print "Enter another number:"
        b = gets.to_f
        puts a - b

    when 'm'
        puts "You chose multiplication"
        print "Enter a number: "
        a = gets.to_f

        print "Enter another number:"
        b = gets.to_f
        puts a * b
    
    when 'd'
        puts "You chose division"
        print "Enter a number: "
        a = gets.to_f

        print "Enter another number:"
        b = gets.to_f
        puts a / b

    when 'e'
        puts "You chose exponential"
        print "Enter a number: "
        a = gets.to_f

        print "Enter another number:"
        b = gets.to_f
        puts a ** b

    when 'r'
        puts "You chose square root"
        print "Enter a number: "
        a = gets.to_f

        puts Math.sqrt(a)

    when 'bmi'
        puts "You chose to find out your BMI"
        print "Enter your height in cm: "
        height = gets.to_f / 100

        print "Enter your weight in kg: "
        weight = gets.to_f
        bmi =  weight / height**2

        if bmi < 18.5
            puts "Your bmi is #{bmi} and you are in the underweight range."

        elsif bmi > 18.5 && bmi < 24.9 
            puts "Your bmi is #{bmi} and you are in the healthy weight range."

        elsif bmi > 25 && bmi < 29.9
            puts "Your bmi is #{bmi} and you are in the overweight range."

        elsif bmi > 30 && bmi < 39.9
            puts "Your bmi is #{bmi} and you are in the obese range."

        end

    when 'trip'
        puts "You have chosen to calculate trip time and cost"
        print "Enter the distance: "
        km = gets.to_f

        print "We will need your car's average L per 100km. Please enter litres: "
        litres = gets.to_f
        fuelEfficiency = 100/litres
        totalFuel = km / fuelEfficiency

        print "Please enter the average price per L: $"
        price = gets.to_f
        totalPrice = (price * totalFuel).round(2)

        print "Please enter the average speed in km/hr: "
        speed = gets.to_f
        time = (km / speed).round(2)

        puts "Your trip will cost $#{totalPrice} and will take #{time} hours."

    else 
        puts "Invalid selectiton. You idiot"
    end

    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator"