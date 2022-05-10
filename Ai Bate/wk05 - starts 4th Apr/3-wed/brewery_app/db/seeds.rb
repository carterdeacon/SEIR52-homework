Brewery.destroy_all

Brewery.create(:name => 'Wolf of the Willows', :state => 'Victoria', :phone => '(03)9587 2480', :logo =>'https://cdn.shopify.com/s/files/1/0363/3761/4980/files/WOW_FullLogo_jpeg_1_500x.jpg?v=1601539459', :web => 'https://www.wolfofthewillows.com.au/' )
Brewery.create(:name => '2 Brothers', :state => 'Victoria', :phone => '(03)9553 1177',:logo =>'https://2brothers.com.au/wp-content/uploads/2021/10/2-brothers-brewery.png', :web => 'http://www.2brothers.com.au/' )
Brewery.create(:name => 'Thunder Road Brewing', :state => 'Victoria', :phone => '1800 831 817', :logo =>'https://thunderroadbrewing.com/wp-content/uploads/2022/02/Thunderblacklogo-150x150.png', :web => 'http://www.thunderroadbrewing.com/' )
Brewery.create(:name => 'Molly Rose', :state => 'Victoria', :phone => 'No phone', :logo =>'https://cdn.shopify.com/s/files/1/0465/6706/3708/files/MRB_Logotype_Horizontal_ac6ccd4a-6e28-41b2-abc0-2f53f56629e0_400x.png?v=1623129864', :web => 'https://mollyrosebrewing.com/' )

puts "#{ Brewery.count } breweries created."


Beer.destroy_all

Beer.create(:name => 'XPA - EXTRA PALE ALE', :style => 'PALE ALE', :abv => '4.7', :image =>'https://cdn.shopify.com/s/files/1/0363/3761/4980/products/XPA-Can_900x.png?v=1620364518')
Beer.create(:name => 'BEACH SUNNIES HAZY', :style => 'IPA', :abv => '6.5',:image =>'https://2brothers.com.au/wp-content/uploads/2022/03/summi-150x150.jpg' )
Beer.create(:name => 'Collingwood Draught', :style => 'Draught', :abv => '4.6', :image =>'https://thunderroadbrewing.com/wp-content/uploads/2022/02/COLLINGWOOD-Mock-Up-copyv1.png' )
Beer.create(:name => 'Kuro', :style => 'Japanese Dark Lager', :abv => '6.0', :image =>'https://cdn.shopify.com/s/files/1/0465/6706/3708/products/kuro_540x.png?v=1624417034' )

puts "#{ Beer.count } beers created."
