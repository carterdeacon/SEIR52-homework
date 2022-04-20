Mountain.destroy_all

Mountain.create :name=> 'Everest', :height => 290, :country =>"Nepal"
Mountain.create :name=> 'K2', :height => 250, :country=>'Pakistan'
Mountain.create :name=> 'Andes', :height=> 200, :country=>'Argentina'


puts "#{Mountain.count} mountains created"