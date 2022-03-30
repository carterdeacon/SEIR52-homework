require 'pry'

# MTA Lab


# Train Lines

train = {
    "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "six" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
}


# User Input 
print "Which line will you be travelling on: N, L or six? "
startLine = gets.chomp

print "Which station will you be boarding on line #{startLine}: "
p train[startLine]

firstStop = gets.chomp

start = train[startLine].index(firstStop)
p start

print "Which line will you be travelling on to your destination: N, L or six? "
endLine = gets.chomp

print "Which station will you be getting off at on line #{endLine}: "
p train[endLine]

endStop = gets.chomp


finish = train[endLine].index(endStop)
p finish

remaining_array = []
intersection = train[startLine].index('Union Square')
intersection2 = train[endLine].index('Union Square')
remaining_array2 = []

if startLine == endLine
    if start < finish
        i = start + 1
        until i == finish + 1
            remaining_array << train[startLine][i]
            i += 1
        end
    
        puts "Please travel through the following stops on the #{startLine} line: #{remaining_array.join(", ")}."
    end

    elsif start > finish
        i = start - 1
        until i == finish - 1
            remaining_array << train[startLine][i]
            i -= 1
        end
    
        puts "Please travel through the following stops on the #{startLine} line: #{remaining_array.join(", ")}."
    end

    
if startLine != endLine
    if start < intersection
        i = start + 1
        until i == intersection + 1
            remaining_array << train[startLine][i]
            i += 1
        
        end

        puts "Please travel through the following stops on the #{startLine} line: #{remaining_array.join(", ")}."
        puts "Change at Union Square."

        if finish < intersection2
            i = intersection2 - 1
            until i == start - 1
                remaining_array2 << train[startLine][i]
                i -= 1
            end

        puts "Please travel through the following stops on the #{endLine} line: #{remaining_array2.join(", ")}."

        end
        


