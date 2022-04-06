# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.


def menu

    puts "Welcome to the calculator"
    puts " "
    puts "1 - Addition"
    puts "2 - Subtraction"
    puts "3 - Multiplication"
    puts "4 - Division"
    puts "5 - Quit Calculator"
    puts " "
    puts "Choose your option: "
    $chouces = gets.chomp

end

def add (a, b)

    a_string = a.to_s.chomp
    b_string = b.to_s.chomp
       a_int = a.chomp.to_i
       b_int = b.chomp.to_i
       total = a_int + b_int
       puts a_string << "+" << b_string << " =#{total}"
       puts " "

end

def subtract(a, b)

    a_string = a.to_s.chomp
    b_string = b.to_s.chomp
    a_int = a.chomp.to_i
    b_int = b.chomp.to_1
    total = a_string << "-" << b_string << ' #{total}'

end

def multiply (a, b)

    a_string = a.to_s.chomp
    b_string = b.to_s.chomp
    a_int = a.chomp.to_i
    b_int = b.chomp.to_i
    total = a_int * b_int
    puts a_string << "*" << b_string << " =#{total}"
    puts " "

end

def devided (a, b)

    a_string = a.to_s.chomp
    b_string = b.to_s.chomp
    a_int = a.chomp.to_i
    b_int = b.chomp.to_i
    total = b_int / a_int
    puts b_string << "/" << a_string << "=#{total}"
    puts
end
























 




if firstIn == ""
# show_menu
# menu_choice = gets.chomp.downcase

# until menu_choice == 'q'
#     case menu_choice
#     when 'a'
#         puts "You chose addition!"
#         puts "Addition coming soon" # TODO: actually do the addition somehow
#     # put additional when clauses for multiply, subtract, divide, etc
#     else
#         puts "Invalid selection. You idiot."
#     end

#     show_menu
#     menu_choice = gets.chomp.downcase
# end

# puts "Thanks for using this crappy calculator!"