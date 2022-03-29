def show_menu
    puts "Calculator".center(80)
    puts "=-" * 40 # Budget horizontal dividing line
    puts "[a] - Addition"
    puts "[s] - Subtract"
    puts "[m] - Multiply"
    puts "[d] - Divide"
    puts "[x] - Exponent"
    puts "[r] - Square root"
    puts "[q] - Quit"
    print "Enter your choice: "
end

def get_input
    print "Enter your first number: "
    a = gets.to_i
    print "Enter your second number: "
    b = gets.to_i
    return a, b
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        num = get_input()
        puts "#{num[0]} + #{num[1]} = #{num[0] + num[1]}"
    when 's'
        num = get_input()
        puts "#{num[0]} - #{num[1]} = #{num[0] - num[1]}"
    when 'm'
        num = get_input()
        puts "#{num[0]} * #{num[1]} = #{num[0] * num[1]}"
    when 'd'
        num = get_input()
        puts "#{num[0]} / #{num[1]} = #{num[0] / num[1]}"
    when 'e'
        num = get_input()
        puts "#{num[0]} ^ #{num[1]} = #{num[0] ** num[1]}"
    when 'sq'
        print "Enter your number: "
        a = gets.to_i
        puts "√ #{a} = #{Math.sqrt(a)}"
    else
        puts "Invalid selection. You idiot."
    end

    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator!"