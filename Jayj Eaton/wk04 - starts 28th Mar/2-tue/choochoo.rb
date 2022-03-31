# fuckin choo choo
$lines = {
    'n' => ["Times square n", "34th n", "28th n", "23rd n", "Union square", "8th n"],
    'l' => ["8th l", "6th l", "Union square", "3rd l", "1st l"],
    's' => ["Grand central s", "33rd s", "28th s", "23rd s", "Union square", "Astor place s"],
};
# ------------- menu -----------
puts "welcome to The New York Subway 2.0"
puts "=-=-" *20
#  line on
print "Which line will u be boarding at? ( n - l - s ): "
line_on = gets.chomp.downcase
puts "=-=-" *20
# station on
print " Which station will u be boarding at?"
station_on = gets.chomp.capitalize
puts "=-=-" *20
# line off
print "Which line will u be exiting at? ( n - l - s ): "
line_off = gets.chomp.downcase
puts "=-=-" *20
# station off
print " Which station will u be exiting at?"
station_off = gets.chomp.capitalize
puts "=-=-" *20
#  ------------- start of line logic ------------  
def line_change (station_on, line_on, station_off, line_off)
    start_index = $lines[line_on].index(station_on) 
    start_change = $lines[line_on].index('Union square') 
    finish_index = $lines[line_off].index(station_off) 
    finish_change = $lines[line_off].index('Union square') 
    # first half array in order
    if start_index < start_change
        first_half = $lines[line_on][start_index..start_change]
    else 
        first_half = $lines[line_on][start_change..start_index].reverse
    end
    # second half array in order
    if finish_index > finish_change
        second_half = $lines[line_off][finish_change..finish_index]
    else
        second_half = $lines[line_off][finish_index..finish_change].reverse
    end
    trip = first_half | second_half # pipe to remove duplicate stop
    puts "your trip includes the following stops #{trip}"
    # puts 'fuck my life'
end
def same_line (station_on, station_off, line_on, line_off)
    start_index = $lines[line_on].index(station_on)
    finish_index = $lines[line_off].index(station_off)
    if  start_index <= finish_index
        journey = $lines[line_on][start_index..finish_index]
        puts "your journey was the following stops: #{journey}"
    else
        journey = $lines[line_on][finish_index..start_index].reverse
        puts "your journey was the following stops: #{journey}" 
    end  
end
# line change logic for later
if line_on == line_off
    same_line(station_on, station_off, line_on, line_off)
else
    line_change(station_on, line_on, station_off, line_off)
end