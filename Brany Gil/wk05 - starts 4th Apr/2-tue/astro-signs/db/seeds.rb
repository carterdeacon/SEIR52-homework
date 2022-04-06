
Starsign.destroy_all

Starsign.create :name => 'Pices', :planet => 'Neptune'
Starsign.create :name => 'Sagittarius', :planet => 'Jupiter'
Starsign.create :name => 'Scorpio', :planet => 'Pluto'

puts "#{ Starsign.count } starsigns created."