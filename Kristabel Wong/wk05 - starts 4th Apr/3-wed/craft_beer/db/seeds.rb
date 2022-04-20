# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Brewery.destroy_all

Brewery.create(:name => 'Balter Brewing', :country => 'Australia', :state => 'Queensland', :suburb => 'Currumbin Waters', :image => 'https://s3-ap-southeast-2.amazonaws.com/craftypint/crafty/beer/Balter-Brewers-beer-logo-2692-1.png', :website => 'https://www.balter.com.au/')
Brewery.create(:name => 'Philter Brewing', :country => 'Australia', :state => 'New South Wales', :suburb => 'Marrickville', :image => 'https://www.newtownjets.com/wp-content/uploads/2021/10/Philter-Seductively-Beer-Philter-28th-October-2021-web-2.jpg', :website => 'https://www.philterbrewing.com/')
Brewery.create(:name => 'The Grifter Brewing Co', :country => 'Australia', :state => 'New South Wales', :suburb => 'Marrickville', :image => 'https://beercrawl.com.au/images/bigBeer/brewery/100/grifter-brewing-1614216749.png', :website => 'https://thegrifter.com.au/')
Brewery.create(:name => 'Mountain Culture Beer Co', :country => 'Australia', :state => 'New South Wales', :suburb => 'Katoomba', :image => 'https://cdn.shopify.com/s/files/1/0010/9631/9036/files/logo_350x.png?v=1584945914', :website => 'https://mountainculture.com.au/')
Brewery.create(:name => 'Moon Dog Craft Brewery', :country => 'Australia', :state => 'Victoria', :suburb => 'Abbotsford', :image => 'https://i0.wp.com/craftbeerreviewer.com/wp-content/uploads/Moon-Dog-new-logo.png', :website => 'https://moondogbrewing.com.au/')
Brewery.create(:name => 'Garage Project', :country => 'New Zealand', :state => 'North Island', :suburb => 'Aro Valley', :image => 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Garage_Project_logo.svg/1200px-Garage_Project_logo.svg.png', :website => 'https://garageproject.co.nz/')

puts "#{ Brewery.count } breweries created."


Beer.destroy_all

Beer.create(:name => 'XPA', :image => 'https://www.balter.com.au/_images/about/Balter-DotCom-Beers-XPA.jpg', :abv => '5', :style => 'Extra Pale Ale', :standard => '1.5')
Beer.create(:name => 'Hazy', :image => 'https://www.balter.com.au/Balter-DotCom-Beers-HAZY.jpg', :abv => '6', :style => 'Indian Pale Ale', :standard => '1.6')
Beer.create(:name => 'XPA', :image => 'https://images.squarespace-cdn.com/content/v1/5f02a05e3fd0f73427e1c669/1608030154258-SPK5HWLQ58KP6KV28Q4X/PB-XPA-clean-054.jpg?format=750w', :abv => '4.2', :style => 'Extra Pale Ale', :standard => '1.2')
Beer.create(:name => 'Hazy Pale', :image => 'https://images.squarespace-cdn.com/content/v1/5f02a05e3fd0f73427e1c669/1617049115593-H5Q6RZ2939LIW32TI0HG/philter+hazy+pale+-+product1.jpg?format=750w', :abv => '5.3', :style => 'Indian Pale Ale')
Beer.create(:name => 'Serpents Kiss', :image => 'https://cdn.shopify.com/s/files/1/1735/9443/products/SerpentsSingle_WhiteBackground_16_600x.jpg?v=1614658232', :abv => '4.9', :style => 'Pilsner', :standard => '1.4')
Beer.create(:name => 'Status Quo', :image => 'https://cdn.shopify.com/s/files/1/0377/2320/9860/products/Status_Quo_Mountain_Culture_600x600_crop_center.jpg?v=1616380659', :abv => '5.2', :style => 'Pale Ale', :standard => '1.5')

puts "#{ Beer.count } beers created."