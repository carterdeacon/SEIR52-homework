# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Ocean.destroy_all
Ocean.create :name => 'Pacific Ocean', :area => 168723000, :average_depth => 3970
Ocean.create :name => 'Atlantic Ocean', :area => 85133000, :average_depth => 3646
Ocean.create :name => 'Indian Ocean', :area => 70560000, :average_depth => 3741

puts "#{ Ocean.count} planets created."