def show_menu
    puts" Calculator" 
    puts "-"*20 
    puts "[a] - addition"
    puts "[s] - subtraction"
    puts "[m] - multiply"
    puts "[d] - divide"
    puts "[e] - exponents"
    puts "[sr] - square roots"
    puts "[q] - Quit"
    print "Enter your choice: "
end

def get_inputs(mode)
    puts "You chose #{mode}!"
    puts "Please enter first number: "
    num_1 = gets.to_f
    puts "Please enter second number: "
    num_2 = gets.to_f
    return num_1, num_2
end

menu_choice = 'x'
until menu_choice == 'q'
    show_menu
    menu_choice=gets.chomp.downcase
    case menu_choice
    when 'a'
        num_1, num_2 = get_inputs("addition")
        puts "#{num_1} + #{num_2}  = #{num_1 + num_2}"
    when 's'
        num_1, num_2 = get_inputs("subtraction")
        puts "#{num_1} - #{num_2}  = #{num_1 - num_2}"
    
    when 'm'
        num_1, num_2 = get_inputs("multiply")
        puts "#{num_1} * #{num_2}  = #{num_1 * num_2}"
    
    when 'd'
        num_1, num_2 = get_inputs("divide")
        puts "#{num_1} / #{num_2}  = #{num_1 / num_2}"

    when 'e'
        num_1, num_2 = get_inputs("exponent")
        puts "#{num_1} ** #{num_2}  = #{num_1 ** num_2}"
    
    when 'sr'
        puts "You chose square root!"
        puts "Please enter the number: "
        num_1 = gets.to_i
        puts "The square root of #{num_1} = #{Math.sqrt(num_1)}"
    
    
    else
        puts "Invalid selection."
    end

end
puts "Thanks for using this calculator"

