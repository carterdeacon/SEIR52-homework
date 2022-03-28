def show_menu
    puts "Calculator" # TODO: check out .center to make this look nicer
    puts "=-" * 80 # Budget horizontal dividing line
    puts "[a] - addition"
    puts "[s] - subtraction"
    puts "[m] - multiplication"
    puts "[d] - division"
    puts "[e] - Exponent"
    puts "[sq] - Square root"
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

def get_input
    puts "Enter your first number:"
    num1 = gets.to_f
    puts "Enter your second number:"
    num2 = gets.to_f
    return num1, num2
end

until menu_choice == "q"
    case menu_choice
    when "a"        
    puts "You chose addition!"
    input_nums = get_input
    puts "#{input_nums[0]} + #{input_nums[1]} = #{ input_nums[0] + input_nums[1] }"
    when "s"   
    puts "You chose subtraction!"     
    input_nums = get_input
    puts "#{input_nums[0]} - #{input_nums[1]} = #{ input_nums[0] - input_nums[1] }"
    when "m"  
    puts "You chose multiplication!"      
    input_nums = get_input
    puts "#{input_nums[0]} * #{input_nums[1]} = #{ input_nums[0] * input_nums[1] }"
    when "d"   
    puts "You chose division!"     
    input_nums = get_input
    puts "#{input_nums[0]} / #{input_nums[1]} = #{ input_nums[0] / input_nums[1] }"
    when "e"   
    puts "You chose exponents!"     
    input_nums = get_input
    puts "#{input_nums[0]} ^ #{input_nums[1]} = #{ input_nums[0] ** input_nums[1] }"
    when "sq"      
    puts "You chose square roots!"   
    puts "Enter your number:"
    num = gets.to_f
    puts "√#{num} = #{Math.sqrt(num)}"
    
    else
        puts "Invalid selection."
    end
    
    show_menu
    menu_choice = gets.chomp.downcase
    
end

puts "Thanks for using this crappy calculator"