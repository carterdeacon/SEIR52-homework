Mountain.destroy_all

Mountain.create :name => 'Everest', :height => 8848, :country => 'Nepal'
Mountain.create :name => 'K2', :height => 8611, :country => 'Pakistan'
Mountain.create :name => 'Kangchenjunga', :height => 8586, :country => 'Nepal'

puts " #{ Mountain.count } mountains created "



