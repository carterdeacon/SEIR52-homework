puts "What is your body weight in Kgs?"
weight = gets.chomp.to_f

puts "What is your height in meters?"
height = gets.chomp.to_f

bmi = (weight/height/height).ceil(2)

puts "Your BMI is #{bmi}kg/m^2! You are underweight" if bmi < 18.5

puts "Your BMI is #{bmi}kg/m^2! You are of normal weight" if bmi >= 18.5 && bmi <=24.9

puts "Your BMI is #{bmi}kg/m^2! You are overweight" if bmi >= 25 && bmi <=29.9

puts "Your BMI is #{bmi}kg/m^2! You are obese" if bmi >= 30
