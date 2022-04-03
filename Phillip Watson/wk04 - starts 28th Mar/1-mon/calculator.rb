def show_menu
    puts "Calculator" #TODO: Check out . center to make this look nicer
    puts "=-" * 40 # budget horizontal dividing line
    puts "[A] - Addition"
    puts "[S] - Subtraction"
    puts "[M] - Multiplication"
    puts "[D] - Division"
    puts "[R] - SqaureRoot"
    puts "[P] - PowerOf"
    puts "[Q] - Quit"
    print " Enter your choice:"
end 
    # TODO: Add the other operations here ( *, /, -)
show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        print "Enter Your first number: "
        num1 = gets.chomp().to_f
        print "Enter your second number: "
        num2 = gets.to_f
        puts (num1 + num2)

    when 's'
        print "Enter Your first number: "
        num1 = gets.chomp().to_f
        print "Enter your second number: "
        num2 = gets.to_f
        puts (num1 - num2)

    when 'm'
        print "Enter Your first number: "
        num1 = gets.chomp().to_f
        print "Enter your second number: "
        num2 = gets.to_f
        puts (num1 * num2)

    when 'd'
        print "Enter Your first number: "
        num1 = gets.chomp().to_f
        print "Enter your second number: "
        num2 = gets.to_f
        puts (num1 / num2)

    when 'r'
        print "Enter Your first number: "
        num1 = gets.chomp().to_f
        puts (num1 * num1)

    when 'p'
        print "Enter Your first number: "
        num1 = gets.chomp().to_f
        puts (num1 * num1)
        
        
        
        
    
        #print "You Choose Subtraction:"
        
         #TODO: Actually do the addition somehow
        #puts additional when clauses for * , /, -
       # puts "Invalid selection. you idiot."
    end

    show_menu
    menu_choice = gets.chomp.downcase
end 

puts "Thanks for using this Crappy calculator"

