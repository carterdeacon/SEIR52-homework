states = {
    :NewSouthWales => "NSW",
    :Queensland => "QLD",
    :Victoria => "VIC",
    :NorthernTerritory => "NT"
}

puts states

puts states["New South Wales"]
puts states["Queensland"]
puts states[:Victoria]
puts states[4]

#Symbols
:hotdogs #Produces the same object ID for each version

#Iterating hashes

states.each do |key, value|
    puts "#{keys} is #{value}"
end
