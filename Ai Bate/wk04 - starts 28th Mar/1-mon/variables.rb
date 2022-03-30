# ## The Fortune Teller

# Why pay a fortune teller when you can just program your fortune yourself?

# - Store the following into variables: number of children, partner's name, geographic location, job title.
# - Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

print "Type number of children: "
num_children = gets.chomp.to_i
print "Type your partner's name: "
partner_name = gets.chomp.capitalize
print "Type your geographic location: "
geographic_location = gets.chomp.capitalize
print "Type your job titile: "
job_titile = gets.chomp

puts "You will be a #{job_titile} in #{geographic_location}, and married to #{partner_name} with #{num_children} kids."

# Forgot how old someone is? Calculate it!

# - Store the current year in a variable.
# - Store their birth year in a variable.
# - Calculate their 2 possible ages based on the stored values.
# - Output them to the screen like so: "They are either NN or NN", substituting the values.
