#BMI Calculator

def show_menu
    puts" BMI Calculator" 
    puts "-"*20 
    puts "Please enter [y] to continue or [q] to quit"
end

def get_inputs 
    puts "Please enter your weight (kg):  "
    weight = gets.to_f
    puts "Please enter your height (m): "
    height = gets.to_f
    return weight, height
end

continue_is_true = 'y'
until continue_is_true == 'q' 
    show_menu
    continue_is_true = gets[0].downcase
    weight, height = get_inputs()
    BMI = (weight / (height**2)).round(1)
    puts "Your BMI is #{BMI}"
end
