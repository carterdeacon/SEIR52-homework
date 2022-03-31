def show_menu()
    puts "Calculator" #check out .center to make this look nicer
    puts "=-" * 20 # dividing line
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[q] - Quit"
    print "Enter your choice: "
end

$num1 = 0
$num2 = 0
def getNumbers()
    puts "input first number: "
    $num1 = gets.chomp.to_i
    puts "input second number: "
    $num2 = gets.chomp.to_i
end

show_menu()
menu_choice = gets.chomp.downcase()
getNumbers()

until menu_choice == 'q'
    ans = ''
    case menu_choice
    when 'a'
        ans = "#{$num1} + #{$num2} = #{$num1 + $num2}"
    when 's'
        ans = "#{$num1} - #{$num2} = #{$num1 - $num2}"
    when 'm'
        ans = "#{$num1} * #{$num2} = #{$num1 * $num2}"
    when 'd'
        ans = "#{$num1} / #{$num2} = #{$num1.to_f / $num2.to_f}"
    else
        ans = "invalid input. Try again."
    end
    puts
    puts "=-" * 20
    puts ans
    puts "=-" * 20
    puts "press any key to continue"
    gets

    show_menu()
    menu_choice = gets.chomp.downcase()
    if (menu_choice != 'q')
        getNumbers()
    end
end
puts "Leaving Calculator"