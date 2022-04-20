Course.destroy_all

Course.create(:name => "SEI-ANZ-SEIR52", :start => "2022-03-07", :end => "2022-06-10", :period => "3mths")
Course.create(:name => "SEI-ANZ-SEIR51", :start => "2022-02-18", :end => "2022-08-24", :period => "6mths")
Course.create(:name => "SEI-ANZ-SEIR53", :start => "2022-03-28", :end => "2022-06-30", :period => "3mths")
Course.create(:name => "SEI-ANZ-SEIR50", :start => "2022-01-04", :end => "2022-04-08", :period => "3mths")

puts  "#{ Course.count } courses created."

Student.destroy_all

Student.create(:name => "Taylor Swift", :age => 28, :location => "Adelaide")
Student.create(:name => "Tyshawn Johns", :age => 24, :location => "Brisbane")
Student.create(:name => "Michael Langelo", :age => 38, :location => "Sydney")
Student.create(:name => "Aditya Elton Douglas", :age => 45, :location => "Melbourne")
Student.create(:name => "Abraham M", :age => 27, :location => "Perth")

puts  "#{ Student.count } students created."