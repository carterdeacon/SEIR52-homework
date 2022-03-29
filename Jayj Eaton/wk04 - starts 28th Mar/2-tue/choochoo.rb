# fuckin choo choo

$lines = {
    'n' => ["Times square", "34th", "28th", "23rd", "Union square", "8th"],
    'l' => ["8th", "6th", "Union square", "3rd", "1st"],
    's' => ["Grand central", "33rd", "28th", "23rd", "Union square", "Astor place"],
};

# menu
puts "welcome to The New York Subway 2.0"
puts "=-=-" *20
#  line on
print "Which line will u be boarding at? ( n - l - s ): "
line_on = gets.chomp.downcase
puts "=-=-" *20
# station on
print $lines[line_on]
puts " Which station will u be boarding at?"
station_on = gets.chomp.capitalize
puts "=-=-" *20
# line off
print "Which line will u be exiting at? ( n - l - s ): "
line_off = gets.chomp.downcase
puts "=-=-" *20
# station off
print $lines[line_off]
puts " Which station will u be exiting at?"
station_off = gets.chomp.capitalize
puts "=-=-" *20

puts line_on
puts station_on
puts line_off
puts station_off