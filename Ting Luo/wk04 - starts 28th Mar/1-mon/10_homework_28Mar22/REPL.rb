# # Bonus Challenge

# ## Do-It-Yourself Ruby REPL

# Try to create your own Ruby REPL (Read Evaluate Print Loop) program.

# It should show a prompt, read some Ruby code from the user, `eval`uate their code, print the result and loop back to the start.

def custom_REPL 
    puts "Welcome to Ruby REPL"
    while true
        print "> "
        input = gets.chomp
        output = eval(input)
        puts "#{output}"
    end 
end 
custom_REPL

# ### Sample Session

# ```
# $ ruby repl.rb
# Welcome to Ruby REPL
# > 2 + 7
# 9
# > "some" + "string"
# "somestring"
# >
# ```