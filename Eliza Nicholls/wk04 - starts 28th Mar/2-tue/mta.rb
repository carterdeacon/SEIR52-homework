
N = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
L = ['8th', '6th', 'Union Square', '3rd', '1st'];
six = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']; 

myTrip = [{N 'Times Square'}, {six 'Astor Place'}]
# N[0] times square ----> N[4] union square six[4] ----> Astor Place six[5]

direction = 
N.reverse
L.reverse
six.reverse

unless N.include?(myTrip)
    N << six
    N[5] = N[6]
    N.flatten
#or
    N.concat(six)
    # :'(  !!!
    N.delete #delete everything between Union Square's. 

end

# how do you even run a function? :'( !!!!

# get line.start and line.end stop = myTrip 
# unless myTrip == N | L | six
# split myTrip back to 'line.start and line.stop'
# return line.start LINE and line.stop LINE
# concat the LINE's and delete whats between Union Squares.
# or keep [index at line.start .. Union Square]
# & keep [index at Union Square .. line.end]
# puts THAT array.
# counts THAT array. therefor, thus, hencely, hereby'th that is the list of stops. number of stops.
# alert CHANGE at union square WHENEVER union square is 'iterated' over/on/blooped in the array. .



    








