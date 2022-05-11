# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Death.create(:deathtype => 'Fire', :game => 'The Sims', :description => 'Enclose them into a 4x4 room without an exit, and add a fireplace and a couch. Have the Sim light the fireplace and then sit in the couch, and add furniture around to prevent them from standing up.')

puts "#{ Death.count } deaths created"