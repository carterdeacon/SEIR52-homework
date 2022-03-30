
puts "Mortgage Repayment Calculator".center(10, "-")
puts "=-" * 40
puts "Enter your Loan Amount: "
loan_amount = gets.chomp.to_f

puts "What is your annual rate of interest in percent?: "
interest_rate = gets.chomp.to_f/100

puts "What is your loan term in years?: "
loan_term = gets.chomp.to_f


# repayment= (loan_amount * (interest_rate / 12) * (1 + (interest_rate / 12)**(12*(loan_term)))) / ((1 + (interest_rate / 12)**(12*(loan_term))) - 1)

repayment = (loan_amount * (interest_rate / 12) * ((1+(interest_rate/12))**(12*loan_term))) / (((1+(interest_rate/12))**(12*loan_term))-1)
# puts "Your estimated montly repayments are $#{repayment}"

puts "your monthly repayment is #{repayment.ceil(2)}"