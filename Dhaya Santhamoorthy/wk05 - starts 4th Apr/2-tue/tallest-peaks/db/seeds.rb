# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Mountain.destroy_all

Mountain.create :name => "Everest", :country => "Nepal", :elevation => 8848
Mountain.create :name => "K2", :country => "Pakistan", :elevation => 8611
Mountain.create :name => "Kangchenjunga", :country => "India", :elevation => 8586

puts "#{ Mountain.count } mountains created"