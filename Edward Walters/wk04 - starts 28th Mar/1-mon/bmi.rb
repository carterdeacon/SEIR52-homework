
height = 0
weight = 0
until height > 0 && weight > 0
    puts "=>" * 50
    print "Enter your height in m: "
    height = gets.to_f
    print "Enter your weight in kg: "
    weight = gets.to_f
end

puts "Your height is #{ height }m"
puts "Your weight is #{ weight }kg"
bmi = weight / height**2 * 10000
puts "Your BMI is #{ bmi.round(2) }"





