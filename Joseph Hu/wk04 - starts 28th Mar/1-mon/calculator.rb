def show_menu
    puts "Calculator".center(10, "-")
    puts "=-" * 40
    puts "[a] - addition"
    puts "[s] - subtraction"
    puts "[d] - division"
    puts "[m] - multiplication"
    puts "[sr] - square root"
    puts "[e] - exponent"
    puts "[q] - quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "you chose addition"
        puts 'Enter the first number'
        num1 = gets.chomp.to_f
        puts 'how many numbers do you want to add?'
        numbers = gets.chomp.to_i
        numbers.times do |i|
            puts 'Enter a number: '
            num2 = gets.chomp.to_f
            num1 += num2
        end
        puts "The answer is #{num1}"
    when 's'
        puts 'you chose subtraction'
        puts 'Enter the first number'
        num1 = gets.chomp.to_f
        puts 'how many numbers do you want to subtract?'
        numbers = gets.chomp.to_f
        numbers.times do
            puts 'Enter a number: '
            num2 = gets.chomp.to_f
            num1 -= num2
        end
        puts "The answer is #{num1}"
    when 'd'
        puts 'you chose division'
        puts 'Enter the first number'
        num1 = gets.chomp.to_f
        puts 'how many numbers do you want to divide?'
        numbers = gets.chomp.to_i
        numbers.times do
            puts 'Enter a number: '
            num2 = gets.chomp.to_f
            num1 /= num2
        end
        puts "The answer is #{num1}"
    when 'm'
        puts 'you chose multiplication'
        puts 'Enter the first number'
        num1 = gets.chomp.to_f
        puts 'how many numbers do you want to multiply?'
        numbers = gets.chomp.to_i
        numbers.times do
            puts 'Enter a number: '
            num2 = gets.chomp.to_f
            num1 *= num2
        end
        puts "The answer is #{num1}"
    when 'sr'
        puts 'you chose Square Root'
        puts 'Enter a number'
        num1 = gets.chomp.to_f
        puts 'how many times would you like to square root the number?'
        numbers = gets.chomp.to_i
        numbers.times {num1 = Math.sqrt(num1)}
        puts "The answer is #{num1}"
    when 'e'
        puts 'you chose exponent'
        puts 'Enter a number'
        num1 = gets.chomp.to_f
        puts 'What exponentiation would you like?'
        numbers = gets.chomp.to_i
        puts "The answer is #{num1**numbers}"
    else
        puts "invalid selection you idiot"
    end
    show_menu
    menu_choice = gets.chomp.downcase
end
#after we process their choice we need to show the menu again and 

puts "Thanks for using this crappy calculator!"
