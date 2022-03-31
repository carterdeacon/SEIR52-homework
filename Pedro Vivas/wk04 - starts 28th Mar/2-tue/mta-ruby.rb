$subway = {
    "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

def planTrip(lineOn, stopOn, lineOff, stopOff)
    lineOnC = $subway[lineOn]
    lineOffC = $subway[lineOff]
    onIndex 
    puts lineOnC[1]
end

puts planTrip("N", 1, 2, 3)
