Mountain.destroy_all

Mountain.create :name => 'Himalaya', :height => 8849
Mountain.create :name => 'Everest', :height => 9000

puts "#{Mountain.count} montain created"