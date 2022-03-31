print "Enter loan amount: "
loan = gets.to_i
print "Enter length of time in month: "
time = gets.to_i
print "Enter interest rate: "
rate = gets.to_f/100

a = loan * (rate / 12) * (1 + rate /12) ** time
b = (1 + rate / 12) ** time - 1 

monthly_payment = a/b

puts "Your monthly payment is $#{monthly_payment}"