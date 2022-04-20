# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bar.destroy_all

Bar.create(name: 'Twin Peaks', location: 'USA', store_count: 130, style: 'cowboy theme', image: "https://api.twinpeaksrestaurant.com/wp-content/uploads/TP-WEB_18-245-Jeans-1-2.jpg")
Bar.create(name: 'Wendys', location: 'USA', store_count: 130, style: 'takeout', image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Wendy%27s_full_logo_2012.svg/640px-Wendy%27s_full_logo_2012.svg.png")

puts "#{ Bar.count } artists created."

Burger.destroy_all

Burger.create(name: 'Billionair bacon', ingredients: 'bacon, bread, sugar, onion, cheese, beef patty, special sauce', price: 10)
Burger.create(name: 'Baconator', ingredients: 'bacon, bread, cheese, beef patty, bbq sauce', price: 5)

puts '#{ Burger.count } burgers created.'