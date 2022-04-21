Ocean.destroy_all

Ocean.create :name => 'Pacific', :depth => 3970, :color => 'Blue', :temperature => 3.5, :marinelife => 'Sea Otters'
Ocean.create :name => 'Atlantic', :depth => 3646, :color => 'Blue', :temperature => -1.2, :marinelife => 'Ghost Crabs'
Ocean.create :name => 'Indian', :depth => 3741, :color => 'Blue', :temperature => 19, :marinelife => 'Sea Turtles'

puts "#{ Ocean.count } oceans create."