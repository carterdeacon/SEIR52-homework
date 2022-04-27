# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# Examples:

#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Mountain.destroy_all # to reset seed/data

Mountain.create(name: 'Everest', location: 'Himalayas', height: 8848)
Mountain.create(name: 'Whistler', location: 'Canada', height: 2180)
Mountain.create(name: 'Breckenridge', location: 'Colorado', height: 3962)

puts 'created mountains in seed data file'