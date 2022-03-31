def show_menu
    puts "BMI Calculator".center(30,"-") 
    puts "==============================="
    puts "|         LET'S GO!           |"
    puts "|=============================|"
    puts "|         [t] - Test          |"
    puts "|         [q] - Quit          |"
    puts "==============================="
    
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice=="q"
   case menu_choice
   when "t"
     print "Enter your weight (kg): "
     weight = gets.to_f
     print "Enter your Height (cm): "
     height = gets.to_f
     bmi = weight/(height * height /10000)

     if bmi <18.5
        puts "Your bmi is #{bmi}-Underweight"
     end
     if bmi >=18.5 && bmi <24.9
        puts "Your bmi is #{bmi}-Healthy"
     end
     if bmi >= 25 && bmi<29.9
        puts "Your bmi is #{bmi}-Overweight"
     end
     if bmi >=30
        puts "Your bmi is #{bmi}-Obese"
     end
     show_menu
     menu_choice = gets.chomp.downcase
    end
end
