# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Author.destroy_all

Author.create(:name => 'JJ roling', :nationality => 'english')

puts "#{ Author.count } authors created."

Book.destroy_all

Book.create(:name => 'harry potter', :year => '1996')

puts "#{ Book.count } books created."