print "Enter your height in cm: "
height = gets.to_f
print "Enter your weight in kg: "
weight = gets.to_f

bmi = weight / ((height /100) ** 2)
puts "Your BMI is #{bmi}"