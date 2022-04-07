# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

City.destroy_all

City.create(:name => 'Paris', :country => 'France', :population => '13024518', :image => 'https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg', :metropolitan_area=> 18940.7)
City.create(:name => 'London', :country => 'United Kingdom', :population => '8909081', :image => 'https://upload.wikimedia.org/wikipedia/commons/3/3a/London_from_a_hot_air_balloon.jpg', :metropolitan_area => 8382.0)
City.create(:name => 'New York City', :country => 'United States', :population => '19979477', :image => 'https://upload.wikimedia.org/wikipedia/commons/4/41/Lower_Manhattan_from_Jersey_City_November_2014_panorama_2.jpg', :metropolitan_area => 13318.8)
City.create(:name => 'Hong Kong', :country => 'China', :population => '7500700', :image => 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Hong_Kong_Harbour_Night_2019-06-11.jpg', :metropolitan_area => 1106.42)
City.create(:name => 'Tokyo', :country => 'Japan', :population => '14043239', :image => 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg', :metropolitan_area => 2194.07)

puts "#{ City.count} cities created."

Building.destroy_all

Building.create(:name => 'Empire State Building', :year => '1931', :height => '381', :image => 'https://upload.wikimedia.org/wikipedia/commons/b/be/Empire_State_Building_From_Rooftop_2019-10-05_19-11_%28cropped%29.jpg', :floor=> '103')
Building.create(:name => 'One World Trade Center', :year => '1931', :height => '541.3', :image => 'https://upload.wikimedia.org/wikipedia/commons/8/8f/New_York_%2833224081040%29.jpg', :floor=> '94')
Building.create(:name => 'The Shard', :year => '2014', :height => '309.6', :image => 'https://upload.wikimedia.org/wikipedia/commons/1/17/%27The_Shard%27_from_below_London_Bridge.jpg', :floor=> '95')
Building.create(:name => 'Eiffel Tower', :year => '1889', :height => '324', :image => 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg', :floor=> '3')
Building.create(:name => 'International Commerce Center', :year => '2010', :height => '484', :image => 'https://upload.wikimedia.org/wikipedia/commons/e/e5/International_Commerce_Centre_201008.jpg', :floor=> '118')
Building.create(:name => 'Tokyo Skytree', :year => '2012', :height => '634', :image => 'https://upload.wikimedia.org/wikipedia/commons/8/84/Tokyo_Skytree_2014_%E2%85%A2.jpg', :floor=> '160')

puts "#{ Building.count} cities created."