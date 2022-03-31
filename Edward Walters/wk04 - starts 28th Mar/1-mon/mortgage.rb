loan_amount = 0
annual_interest_percent = 0
loan_length = 0

until loan_amount != 0 && annual_interest_percent != 0 && loan_length !=0 
    puts "**" * 50
    print "Please Enter Loan amount in Dollars: "
    loan_amount = gets.to_f
    print "Please enter interest rate % e.g. 4.5: "
    annual_interest_percent = gets.to_f
    print "Please enter length of mortgage in years: "
    loan_length = gets.to_f
end

p = loan_amount
r = annual_interest_percent / 100 / 12  #periodic interest rate
n = loan_length * 12  # number of periods

payment_monthly =  p * r / (1 - ( 1 + r) **(-n) )

puts "Your monthly payment is: $#{ payment_monthly.round(2) }"
