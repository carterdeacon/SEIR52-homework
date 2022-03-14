// Create a program that models a simple subway system.
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

const Line = {
    "N" : ["Time Square", "34th", "28th_N", "23rd_N", "Union Square", "8th_N"],
    "L" : ["8th_L", "6th", "Union Square", "3rd", "1st"],
    "6" : ["Grand Central", "33rd", "28th_6", "23rd_6", "Union Square", "Astor Place"]
}

const planTrip = function(a, b, c, d) { // Sample input ("N", "Time Square", "6", "33rd")
    let line_a = Line[a];
    let line_c = Line[c];
    

    if (line_a.includes(b)) {
        b = b
    } else { b += `_${a}`}

    if (line_c.includes(d)) {
        d = d
    } else { d += `_${c}`}

    if (line_a == line_c) {
        let start = line_a.indexOf(b);
        let end = line_a.indexOf(d);
        if (start < end) {
            t_r = line_a.slice(start + 1, end + 1)
        } else if (start > end) {
            t_r = line_a.slice(end, start).reverse()
        }
        let total_l = t_r.length;
        let p = t_r.join(", ");
        console.log("You must travel through the following stops on the " + a + " line: " + p + ".");
        console.log(`${total_l} stops in total.`)
    }

    if (line_a != line_c) {
        let u_a = line_a.indexOf("Union Square");
        let u_c = line_c.indexOf("Union Square");
        let start = line_a.indexOf(b);
        let end = line_c.indexOf(d);
        if (start < u_a) {
            t_r_a = line_a.slice(start + 1, u_a + 1)
        } else if (start > u_a) {
            t_r_a = line_a.slice(u_a, s).reverse()
        }
        let total_la = t_r_a.length;
        let p_a = t_r_a.join(", ");

        if (u_c < end) {
            t_r_c = line_c.slice(u_c + 1, end + 1)
        } else if (u_c > end) {
            t_r_c = line_c.slice(end, u_c).reverse()
        }
        let total_lc = t_r_c.length;
        let p_c = t_r_c.join(", ");
        let total_l = total_la + total_lc;

        console.log("You must travel through the following stops on the " + a + " line: " + p_a + ".")
        console.log("Change at Union Square.")
        console.log("Your journey continues through the following stops: " + p_c + ".")
        console.log(`${total_l} stops in total.`)

    }
}

planTrip("N", "Time Square", "L", "8th")