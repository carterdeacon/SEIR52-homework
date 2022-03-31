# input for loan amount
def loan_amount
	print 'insert loan amount: '
	amount = gets.to_f
end
# input for loan term
def loan_term
	print 'insert loan term in years: '
	amount = gets.to_i
end
# input for interest rate
def rate
	print 'insert rate with 2 decimal places: '
	amount = gets.to_f
end
# calculate the monthly repayments
def calc
	amount = loan_amount
	term = loan_term
	yearly_int = amount * (rate / 100)
	total_int = yearly_int * term
	total = amount + total_int
	monthly = total / (term * 12)
	puts "total monthly payment is: $#{monthly.round(2)}"
end
def menu
	puts 'MORTGAGE CALCULATOR'
	puts '=-' * 40
	puts 'use your loan amount - loan term - interest rate. To roughly guess your monthly repayments'

	calc
end
menu
