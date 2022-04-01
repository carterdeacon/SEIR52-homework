require 'pry'

# MTA Lab


# Train Lines

train = {
    "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "six" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
}


N = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
L = ["8th", "6th", "Union Square", "3rd", "1st"]
six = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]


# User Input 
print "Which line will you be travelling on: N, L or six? "
startLine = gets.chomp

print "Which station will you be boarding on line #{startLine}: "
p case startLine
when 'N'
    N

when 'L'
    L

when 'six'
    six

end

firstStop = gets.chomp

p case startLine
when 'N'
    N.index(firstStop)

when 'L'
    L.index(firstStop)

when 'six'
    six.index(firstStop)

end


print "Which line will you be travelling on to your destination: N, L or six? "
endLine = gets.chomp

print "Which station will you be getting off at on line #{endLine}: "
p case endLine
when 'N'
    N

when 'L'
    L

when 'six'
    six

end

endStop = gets.chomp


p case endLine
when 'N'
    N.index(endStop)

when 'L'
    L.index(endStop)

when 'six'
    six.index(endStop)

end


if startLine == 'N' && startLine == endLine
    if N.index(endStop) - N.index(firstStop) == N.length - 1
        puts "Please travel through the following stops on the N line: #{N[1..5]}"

    elsif N.index(firstStop) - N.index(endStop) == N.length - 1
            puts "Please travel through the following stops on the N line: #{N[0..4].reverse}"
        
    elsif N.index(firstStop) < N.index(endStop)
        puts "Please travel through the following stops on the N line: #{N[N.index(firstStop)+1..N.index(endStop)]}"

    elsif N.index(firstStop) > N.index(endStop)
        puts "Please travel through the following stops on the N line: #{N[N.index(endStop)..N.index(firstStop)-1].reverse}"

    end

elsif startLine == 'L' && startLine == endLine
    if L.index(endStop) - L.index(firstStop) == L.length - 1
        puts "Please travel through the following stops on the L line: #{L[1..4]}"

    elsif L.index(firstStop) - L.index(endStop) == L.length - 1
        puts "Please travel through the following stops on the L line: #{L[0..3].reverse}"

    elsif L.index(firstStop) < L.index(endStop)
        puts "Please travel through the following stops on the L line: #{L[L.index(firstStop)+1..L.index(endStop)]}"
    elsif L.index(firstStop) > L.index(endStop)
        puts "Please travel through the following stops on the L line: #{L[L.index(endStop)..L.index(firstStop)-1].reverse}"
    end

elsif startLine == 'six' && startLine == endLine
    if six.index(endStop) - six.index(firstStop) == six.length - 1
        puts "Please travel through the following stops on the six line: #{six[1..5]}"

    elsif six.index(firstStop) - six.index(endStop) == six.length - 1
        puts "Please travel through the following stops on the six line: #{six[0..4].reverse}"

    elsif six.index(firstStop) < six.index(endStop)
        puts "Please travel through the following stops on the six line: #{six[(six.index(firstStop)+1)..six.index(endStop)]}"

    elsif six.index(firstStop) > six.index(endStop)
        puts "Please travel through the following stops on the six line: #{six[six.index(endStop)..six.index(firstStop)-1].reverse}"

    end   

elsif startLine =='N' && endLine == 'L'
    puts "Please travel through the following stops on the N line: #{N[N.index(firstStop)+1..N.index('Union Square')]}"
    puts "Change at Union Square."
    puts "Please travel through the following stops on the L line: #{L[L.index('Union Square')+1..L.index(endStop)]}"

elsif startLine =='N' && endLine == 'six'
    puts "Please travel through the following stops on the N line: #{N[N.index(firstStop)+1..N.index('Union Square')]}"
    puts "Change at Union Square."
    puts "Please travel through the following stops on the L line: #{six[six.index('Union Square')+1..six.index(endStop)]}"


end 





binding.pry


