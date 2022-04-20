Mountain.destroy_all #reset data

Mountain.create :name => 'Passo dello Stelvio', :length => 24.1, :avg_gradient => 7.6, :category => 'HC', :elevation_gain => 1832
Mountain.create :name => 'Mortirolo', :length => 11.6, :avg_gradient => 11.2, :category => 'HC', :elevation_gain => 1295
Mountain.create :name => 'Mounte Baldo', :length => 20.2, :avg_gradient => 7.2, :category => 'HC', :elevation_gain => 1453

puts "#{Mountain.count} mountains added."