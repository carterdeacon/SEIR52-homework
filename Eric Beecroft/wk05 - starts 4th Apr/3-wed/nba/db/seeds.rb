Player.destroy_all

Player.create(:name => 'Luka Doncic', :position => 'PG', :age => 23, :height => '6"7', :weight => '230', :nationality => 'Slovenian', :salary => 10174391, :image => 'https://media.newyorker.com/photos/5ddd58812ebfed0009e3080a/master/pass/Thomas-LukaDoncic-1.jpg')
Player.create(:name => 'LeBron James', :position => 'SF', :age => 37, :height => '6"9', :weight => '250', :nationality => 'USA', :salary => 41180544, :image => 'https://library.sportingnews.com/2021-12/lebron-james-los-angeles-lakers_kej02uf93prj18vqxkh8dfnqk.png')

puts "#{ Player.count } players created."