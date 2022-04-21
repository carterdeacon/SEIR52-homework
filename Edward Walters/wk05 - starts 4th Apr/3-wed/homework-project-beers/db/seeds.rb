# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Brewery.destroy_all

Brewery.create(:name => "Carlton & United", :city => "Melbourne", :country => "Australia", :year_founded => "1907", :website => "https://cub.com.au", :photo => "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Carlton_%26_United_Breweries_logo.svg/340px-Carlton_%26_United_Breweries_logo.svg.png")

Brewery.create(:name => "Little Creatures", :city => "Fremantle", :country => "Australia", :year_founded => "2000", :website => "https://littlecreatures.com.au/agegate/", :photo => "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/WTFr_Nov_2011_gnangarra-9.jpg/440px-WTFr_Nov_2011_gnangarra-9.jpg")


puts "#{ Brewery.count } breweries created"

Beer.destroy_all

Beer.create(:name => "Carlton Dry", :description => "Carlton Dry is a super refreshing - full strength lager specifically brewed to be smooth and uncomplicated.", :image => "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Carlton_Dry_Bottle.jpg/440px-Carlton_Dry_Bottle.jpg", :abv => 4.5)

Beer.create(:name => "Little Creatures Pale Ale", :description => " An American Pale Ale (5.2% alc/vol), brewed with Cascade (aroma) and Chinook (bittering) whole hop flowers, self-propagated yeast with a secondary bottle fermentation, and Australian malts.", :image => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT513DYSZTNRrnKBxvFGz-QR3GSQ1R-e2fgejAK3__8-sIqnxleRLC0Jdy2u8lzX8Rir6Y&usqp=CAU", :abv => 5.2)

puts "#{ Beer.count } beers created"
