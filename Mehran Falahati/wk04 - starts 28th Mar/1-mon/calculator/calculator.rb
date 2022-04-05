def show_menu
    puts "Calculator" #TODO: check out .center to make this look nicer
    puts "=-" * 50 # Budget horizental dividing line
    puts "[a] - addition"
    puts "[s] - subtraction"
    puts "[m] - multiplication"
    puts "[d] - division"
    puts "[e] - exponent"
    puts "[r] - square root"
    # TODO: Add the other operations here (multipy, divide, subtract)
    puts "[q] - quit"
    print "Enter your Choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "Addition"
        print "what is your first number? "
        a = gets.to_i

        print "what is your secount number? "
        b = gets.to_i

        puts "result is #{ a + b }"
        
       # puts "Addition coming soon" #TODO: actually do the addition somehow
    #put additional when clauses for multiply, substract, divide, etc
    when 's'
        puts "Subtraction"
        print "what is your first number? "
        a = gets.to_i

        print "what is your secount number? "
        b = gets.to_i

        puts "result is #{ a - b }"

    when 'm'
        puts "Multiplication"
        print "what is your first number? "
        a = gets.to_i

        print "what is your secount number? "
        b = gets.to_i

        puts "result is #{ a * b }"

    when 'd'
        puts "Division"
        print "what is your first number? "
        a = gets.to_i

        print "what is your secount number? "
        b = gets.to_i

        puts "result is #{ a / b }"

    when 'e'
        puts "Exponent"
        print "what is your first number? "
        a = gets.to_i

        print "what is your secount number? "
        b = gets.to_i

        puts "result is #{ a ** b }"

    when 'r'
        puts "Square root"
        print "what is your number? "
        a = gets.to_i

        puts "result is #{ Math.sqrt(a) }"

    else
        puts "Invalid selection"
    end

    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this calculator!"
