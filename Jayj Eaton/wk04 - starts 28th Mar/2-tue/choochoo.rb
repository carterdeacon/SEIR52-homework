# fuckin choo choo

$lines = {
    'n' => ["Times square", "34th", "28th", "23rd", "Union square", "8th"],
    'l' => ["8th", "6th", "Union square", "3rd", "1st"],
    's' => ["Grand central", "33rd", "28th", "23rd", "Union square", "Astor place"],
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

#  ------------- start of logic ------------ index, 
def line_change (station_on, line_on, station_off, line_off)
    start_index = $lines[line_on].index(station_on) #<--- replace with station_on and line on
    start_change = $lines[line_on].index('Union square') #<--- replace with station_off and line off
    finish_index = $lines[line_off].index(station_off) #<--- replace with station_off and line off
    finish_change = $lines[line_off].index('Union Square') #<--- replace with station_off and line off

    puts 'fuck my life'
    p start_index
    p start_change
    p finish_index
    p finish_change
end

def same_line (station_on, station_off)
    start_index = $lines['n'].index('23rd') #<--- replace with station_on and line on
    finish_index = $lines['n'].index('Times square') #<--- replace with station_off and line off
    if  start_index < finish_index
        journey = $lines['n'][start_index..finish_index]
        puts "your journey was the following stops: #{journey}"
    else
        journey = $lines['n'][finish_index..start_index].reverse
        puts "your journey was the following stops: #{journey}" 
    end  
end

# line change logic for later
if line_on == line_off
    same_line(station_on, station_off)
end
    
if line_on != line_off
    line_change(station_on, line_on, station_off, line_off)
end

# # temp call for logic