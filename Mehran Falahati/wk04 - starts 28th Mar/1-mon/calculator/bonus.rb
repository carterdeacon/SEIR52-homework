def show_menu
    puts "Calculator"
    puts "=-" * 50 
    puts "[b] - BMI"
    puts "[m] - Mortgage"
    puts "[t] - Trip calculator"
    puts "[q] - quit"
    print "Enter your Choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'b'
        puts "BMI"
        print "What is your height (in m)? "
        a = gets.to_f
        a = a ** 2

        print "What is your weight (in kg)? "
        b = gets.to_f

        puts "resualt is #{ b / a }"

    when 'm'
        puts "Mortgage calculator"
        print "Loan amount: "
        a = gets.to_i

        print "Length of time (in months): "
        b = gets.to_i

        print "Interest rate: "
        c = gets.to_i
        c = (c / 100) / 12 

        puts "result is #{ a * [c(1 + c) ** b / ((1 + c) ** b) - 1] }"

    when 't'
        puts "Trip Calculator"
        print "distance: "
        a = gets.to_i

        print "100 Miles per gallon: "
        b = gets.to_i
        b = b / 100

        print "Price per gallon: "
        c = gets.to_i

        print "Speed in miles per hour: "
        d = gets.to_i

        puts "the trip time will be #{ a / d } and costs will be #{ (b * c) * a } "

        
    else
        puts "Invalid selection"
    end

    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this calculator!"
