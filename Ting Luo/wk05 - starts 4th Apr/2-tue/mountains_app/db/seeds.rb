Mountain.destroy_all

Mountain.create :name=> "Mount Everest", :elevation=>8848.86, :country=>"China and Nepal"
Mountain.create :name=> "Mount Fuji", :elevation=>3776.25, :country=>"Japan"
Mountain.create :name=> "Mount Kilimanjaro", :elevation=>5895, :country=>"Tanzania"

puts "#{Mountain.count} mountains created."