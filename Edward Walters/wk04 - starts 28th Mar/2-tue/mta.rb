require 'pry'
# Helper function to remove '(On <linename>)' for the purpose of comparing input station names. e.g. '28th (On N)' returns '28th'

def remove_station_suffix (stn_name)
    if stn_name.include?('(')
        return stn_name[0, stn_name.index('(') - 1]
    else
        return stn_name
    end
end

def traverse_line_array(start_index, end_index, array) 
    stations_visited = []
    if start_index < end_index
        array[start_index + 1, end_index].each do | stn |
            stations_visited << stn
        end
    else
        array[end_index, start_index].each do | stn |
            stations_visited << stn
        end
        stations_visited.reverse!
    end
end

def plan_trip (start_line_input, start_station, end_line_input, end_station)
    line_N = ["Times Square", "34th", "28th (on N)", "23rd (on N)", "Union Square", "8th (on N)"]

    line_6 = ["Grand Central", "33rd", "28th (on 6)", "23rd (on 6)", "Union Square", "Astor Place"]

    line_L = ["8th (on L)", "6th", "Union Square", "3rd", "1st"];

    interchange = "Union Square"

    found_start = false

    found_end = false

    output_message = "You must travel through the following stops on the #{ start_line_input } Line: "

    # validate start_line_input from user and initialize start_line_array to the correct Array
    case start_line_input
    when "N"
        start_line_array = line_N
    when "L"
        start_line_array = line_L
    when "6"
        start_line_array = line_6
    else
        return "Error: Line Name does not exist. (Use 'N', 'L' or '6')"  #returns error and exits function
    end
    
    #same for end_line_input
    case end_line_input
    when "N"
        end_line_array = line_N
    when "L"
        end_line_array = line_L
    when "6"
        end_line_array = line_6
    else
        return "Error: Line Name does not exist. (Use 'N', 'L' or '6')" #returns error and exits function
    end

    start_line_array.each do | stn |
        if remove_station_suffix(stn) == start_station
            start_station = stn
            found_start = true
        end
    end

    end_line_array.each do | stn | 
        if remove_station_suffix(stn) == end_station
            end_station = stn
            found_end = true
        end
    end
    
    unless found_start && found_end
        return "Error: Station Name(s) do not exist on train line(s)."
    end
    
    # JOURNEY 
    # Captures the array indexes of the start station and end station - required for traversing array

    start_station_index = start_line_array.index(start_station)
    end_station_index = end_line_array.index(end_station)
    
    if start_line_array == end_line_array
        stations_visited = traverse_line_array(start_station_index, end_station_index, start_line_array)
        output_message += "#{ stations_visited.join(', ') }. \n#{ stations_visited.length } stops in total."
    
    else #multi line journey
        interchange_index = start_line_array.index(interchange)
        
        #first leg of journey from Start Station to INTERCHANGE (Union Square):
        stations_visited = traverse_line_array(start_station_index, interchange_index, start_line_array)
        output_message += "#{ stations_visited.join(', ') }."
        output_message += "\nChange at #{ interchange } to the #{ end_line_input } Line."
        
        # second leg of journey from INTERCHANGE (Union Square) to destination  - extends stationsVisited array
        interchange_index = end_line_array.index(interchange)
        stations_visited << traverse_line_array(interchange_index, end_station_index, end_line_array)
     
        idx = stations_visited.index(interchange)
        stations_visited_2nd_leg_only = stations_visited[idx +1]
        output_message += "\nYour journey continues through the following stops: "
        output_message += "#{ stations_visited_2nd_leg_only.join(', ') }. \n#{ stations_visited.flatten.size } stops in total."
    end
end

puts plan_trip("6", "Grand Central", "L", "8th")




