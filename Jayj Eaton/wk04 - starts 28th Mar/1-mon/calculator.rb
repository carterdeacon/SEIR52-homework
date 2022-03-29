def show_menu
	puts 'CALCULATOR' #look into .center
	puts '=-' * 40
	puts 'A = addition'
	puts 'S = subtraction'
	puts 'M = multiply'
	puts 'D = divide'
	puts 'R = sqroot'
	puts 'P = power'
	puts 'Q = quit program'
	puts '=-' * 40
	print 'Choose operator: '
end

show_menu
operator = gets.chomp.upcase

# addition function
def addition(first, second)
	result = first + second
	puts "#{first} + #{second} = #{result}"
	print show_menu
end
# subtraction
def subtraction(first, second)
	result = first - second
	puts "#{first} - #{second} = #{result}"
	print show_menu
end
# multiply
def multiply(first, second)
	result = first * second
	puts "#{first} * #{second} = #{result}"
	print show_menu
end
# divide
def divide(first, second)
	result = first / second
	puts "#{first} / #{second} = #{result}"
	print show_menu
end
# sqrt
def sqrt(first)
	result = Math.sqrt(first)
	puts "sqrt of #{first} = #{result}"
	print show_menu
end
# power
def power(first, second)
	result = first**second
	puts "#{first} power of #{second} = #{result}"
	print show_menu
end

# dryer get numbers
def first
	print 'first number: '
	first = gets.to_f
end

def second
	print 'second number: '
	second = gets.to_f
end
until operator == 'Q'
	case operator
	when 'A'
		puts 'addition selected'
		addition(first, second)
	when 'S'
		puts 'subtraction selected'
		subtraction(first, second)
	when 'M'
		puts 'multiply selected'
		multiply(first, second)
	when 'D'
		puts 'divide selected'
		divide(first, second)
	when 'R'
		puts 'sqrt selected only 1 input'
		sqrt(first)
	when 'P'
		puts 'power selected'
		power(first, second)
	else
		'invalid operator'
	end
	operator = gets.chomp.upcase
end
# when quit
puts 'thanks for nothing!'.upcase
