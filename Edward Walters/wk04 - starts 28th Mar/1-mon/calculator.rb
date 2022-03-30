def show_menu
    puts "Calculator".center(80) 
    print_line_break 
    puts "[a] - addition"
    puts "[s] - subtraction"
    puts "[m] - multiplication"
    puts "[d] - division"
    puts "[e] - exponent"
    puts "[r] - squareroot"
    puts "[q] - quit"
    print "Enter your choice: "
end

def add
    print_line_break 
    ask_for_initial_number
    display_current_number
    print "Number to add please: "
    $number += gets.to_f
    puts "Total: #{ $number.round($rounding_val) }"
    print_line_break 
end

def subtract
    print_line_break 
    ask_for_initial_number
    display_current_number
    print "Number to subtract please: "
    $number -= gets.to_f
    puts "Total: #{ $number.round($rounding_val) }"
    print_line_break   
end

def multiply
    print_line_break 
    ask_for_initial_number
    display_current_number
    print "Number to multiply please: "
    $number *= gets.to_f
    puts "Total: #{ $number.round($rounding_val) }"
    print_line_break     
end

def divide
    print_line_break 
    ask_for_initial_number
    display_current_number
    print "Number to divide please: "
    input_num = gets.to_f
    
    if input_num == 0
        puts "Error: Cannot divide by zero. Re-enter number"
        divide
    end
    
    $number /= input_num
    puts "Total: #{ $number.round($rounding_val) }"
    print_line_break 
end

def exponent
    print_line_break 
    ask_for_initial_number
    display_current_number
    print "Exponent please: "
    $number **= gets.to_f
    puts "Total: #{ $number.round($rounding_val) }"
    print_line_break     
end

def root
    print_line_break 
    ask_for_initial_number
    display_current_number
    $number = Math.sqrt($number)
    puts "Total: #{ $number.round($rounding_val) }"
    print_line_break     
end

# helper functions
def  ask_for_initial_number
    unless $number
        print "Initial number please: "
        $number = gets.to_f
    end
end

def display_current_number 
    puts "Current total: #{ $number.round($rounding_val) }"
end

def print_line_break 
    puts "=-" * 40
end



$number = nil
$rounding_val = 8

show_menu
menu_choice = gets.chomp.downcase

until menu_choice === 'q'
    case menu_choice
    when 'a'
        puts "You chose addition"
        add
    when 's'
        puts "You chose subtraction"
        subtract
    when 'm'
        puts "You chose multiplication"
        multiply
    when 'd'
        puts "You chose division"
        divide
    when 'e'
        puts "You chose exponent"
        exponent
    when 'r'
        puts "You chose square root"
        root
    else 
        puts "Invalid selection. You idiot"
    end

    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator!"


