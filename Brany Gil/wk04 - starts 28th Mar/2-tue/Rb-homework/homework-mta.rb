require 'pry'


# Activity
# Create a program that models a simple subway system.

# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:


train_lines_hash  = {
"line N" => ["Times Square", "34th, 28th", "23rd", "Union Square", "8th"],
"line L" => ["8th", "6th", "Union Square", "3rd", "1st"],
"Line 6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}


p train_lines_hash

p "What will be the first line?"

starting_line = gets().chomp()

p "Where are you starting from? "

starting_line = gets().chomp()

p "Where will be the second line"

second_line = gets().chomp()

p "Where are you going to?"

final_point = gets().chomp()


starting_point_index = train_lines_hash[starting_line].index starting_point
union_square_first_line_index = train_lines_hash[starting_line].index "Union Square"


# 

