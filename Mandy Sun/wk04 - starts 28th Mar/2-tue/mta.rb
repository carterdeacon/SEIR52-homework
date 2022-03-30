
all_train_info = {
        "N"=>["Times Square", "34th", "N_28th", "N_23rd", "Union Square", "N_8th"],
        "L"=>["L_8th", "6th", "Union Square", "3rd", "1st"],
        "6"=>["Grand Central", "33rd", "6_28th", "6_23rd", "Union Square", "Astor Place"]  
}

def show_menu
    puts "There are 3 lines : N, L, 6"
    puts "-----------------------------------------------------"
    puts "The N line has the following stops: Times Square, 34th, N_28th, N_23rd, Union Square, and N_8th "
    puts "-----------------------------------------------------"
    puts "The L line has the following stops: L_8th, 6th, Union Square, 3rd, and 1st                      "
    puts "-----------------------------------------------------"
    puts "The 6 line has the following stops: Grand Central, 33rd, 6_28th, 6_23rd, Union Square, and Astor Place"
    puts "-----------------------------------------------------"
    puts "[G]-Let's go!"
    puts "[Q]-quit"
    puts "-----------------------------------------------------"
    print "Enter your choice: "
end

def side_menu
    puts "-----------------------------------------------------"
    puts "[G]-Let's go!"
    puts "[Q]-quit"
    puts "-----------------------------------------------------"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.upcase

until menu_choice=="Q"
    case menu_choice
    when 'G'

       print "Enter your start line: "
       start_line = gets.chomp.upcase
       print "Enter your start stop: "
       start_stop = gets.chomp
       print "Enter your end line: "
       end_line = gets.chomp.upcase
       print "Enter your end stop: "
       end_stop = gets.chomp
     
      #find the stoptrain and endtrain as well as the start stop and end stop
      start_train_stops_array=all_train_info[start_line]
      end_train_stops_array=all_train_info[end_line]
      start_stop_index=start_train_stops_array.find_index(start_stop)
      end_stop_index=end_train_stops_array.find_index(end_stop)
      

      #case1 no train line transition
      if start_line == end_line
        if start_stop_index < end_stop_index
            trip_stops_array=start_train_stops_array[start_stop_index, end_stop_index]
            stops_num=end_stop_index-start_stop_index
        end
        if start_stop_index > end_stop_index
            trip_stops_array=start_train_stops_array[end_stop_index, start_stop_index].reverse()
            stops_num=start_stop_index-end_stop_index
        end
        stop_info = trip_stops_array.join(", ")
        puts "You must travel the following stops on Line_#{start_line}: #{stop_info}."
        puts "There are #{stops_num} stops in total!"
      end

      
      if start_line != end_line
         start_train_transition_index=start_train_stops_array.find_index("Union Square")
         end_train_transition_index=end_train_stops_array.find_index("Union Square")
        
         #the first trains info
         if start_stop_index < start_train_transition_index
            first_trip_stops_array=start_train_stops_array[start_stop_index, start_train_transition_index]
            stops_num_first=start_train_transition_index-start_stop_index
         end
         if start_stop_index > start_train_transition_index
            first_trip_stops_array=start_train_stops_array[start_train_transition_index, start_stop_index].reverse()
            stops_num_first=start_stop_index-start_train_transition_index
         end  
         

         stop_info_first = first_trip_stops_array.join(", ")
         puts "You must travel through the following stops on the #{start_line} line: #{stop_info_first}."
         puts "Change at Union Square to #{end_line} line."

         #the second trains info
         if end_stop_index < end_train_transition_index
            second_trip_stops_array=end_train_stops_array[start_stop_index, start_train_transition_index]
            stops_num_second=end_train_transition_index-end_stop_index
         end
         if end_stop_index > end_train_transition_index
            second_trip_stops_array=end_train_stops_array[end_train_transition_index, end_stop_index].reverse()
            stops_num_second=end_stop_index-end_train_transition_index
         end 
         stop_info_second = second_trip_stops_array.join(", ")
         puts "Your journey continues through the following stops: #{stop_info_second}."
         puts "#{stops_num_second + stops_num_first} stops in total"
        end
    end 
   side_menu
   menu_choice = gets.chomp.upcase
end

