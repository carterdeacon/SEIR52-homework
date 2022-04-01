#Mortgage-calculator
def show_menu
    puts "Monthly Mortgage Repayment Calculator"
    puts "-" * 20
    puts "Please enter [y] to continue or [q] to quit"
end

def mortgage_input
    puts "Please enter your Principal loan amount: "
    amount_input = gets.to_f
    puts "Interest rate (without % symbol): "
    interest_rate_input = gets.to_f
    puts "Length of loan: "
    loan_length_input = gets.to_f

    return amount_input, interest_rate_input, loan_length_input
end



continue_is_true = 'y'
until continue_is_true == 'q' 
    show_menu
    continue_is_true = gets[0].downcase
    borrowed_money, interest_rate, loan_term = mortgage_input()

    monthly_interest = (interest_rate / 100) /12
    length_of_loan = loan_term * 12
    exponent_operator = (monthly_interest + 1) ** length_of_loan
    first_dividend = monthly_interest * exponent_operator
    second_dividend = exponent_operator - 1
    division = first_dividend / second_dividend
    quotas = borrowed_money * division

    puts "Your monthly mortage payment is $#{quotas.to_i}"
end 

