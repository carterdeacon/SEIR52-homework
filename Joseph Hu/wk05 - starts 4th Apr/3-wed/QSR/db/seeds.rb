Chain.destroy_all

Chain.create(:name => "Mcdonalds", :founder => "Ray Croc", :founded => '1940-05-15', :locations => '38695')
Chain.create(:name => "Kentucky Fried Chicken", :founder => "Solonel Harland Sanders", :founded => '1930-03-20', :locations => '24104')
Chain.create(:name => "Subway", :founder => "Fred DeLuca", :founded => '1965-08-28', :locations => '37540')

puts "#{ Chain.count } chains created."

Food.destroy_all

Food.create(:name => "Big Mac", :ingredients => 'Bun, beef patties, lettuce, special sauce', :kilojoules => '2300')
Food.create(:name => "Zinger Burger", :ingredients => 'zinger patty, bun', :kilojoules => '1817')
Food.create(:name => "Meatball Sub", :ingredients => 'meatballs, cheese, bread roll', :kilojoules => '2008')

puts "#{ Food.count } foods created."