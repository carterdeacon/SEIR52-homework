# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Sailor.destroy_all

Sailor.create :name => 'Usagi Tsukino', :identity =>"Sailor Moon", :residency =>"Azabu-Juban, Minato ward; Tokyo, Japan"
Sailor.create :name => 'Ami Mizuno', :identity =>"Sailor Mercury", :residency =>"Azabu-Juuban, Minato ward; Tokyo, Japan"
Sailor.create :name => 'Minako Aino', :identity =>"Sailor Venus", :residency =>"London, England (former); Shiba Koen, Minato ward; Tokyo, Japan (current)"


puts "#{ Sailor.count } sailors created."
