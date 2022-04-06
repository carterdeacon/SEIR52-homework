# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Mountain.destroy_all

Mountain.create :name => 'Niseko', :country => 'Japan', :runs => 61, :beginner => 30, :intermediate => 40, :advanced => 30
Mountain.create :name => 'Hakuba', :country => 'Japan', :runs => 200, :beginner => 20, :intermediate => 40, :advanced => 40
Mountain.create :name => 'Whistler Blackcomb', :country => 'Canada', :runs => 200, :beginner => 20, :intermediate => 55, :advanced => 25
Mountain.create :name => 'Revelstoke', :country => 'Canada', :runs => 75, :beginner => 12, :intermediate => 43, :advanced => 45

puts "#{ Mountain.count } ski mountains created."