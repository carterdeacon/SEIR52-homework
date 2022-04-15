Console.destroy_all

Console.create( :name => 'Playstation', :period => '90s', :release_date => ' 3-12-1994', :sold => '102.49Million', :image => 'https://upload.wikimedia.org/wikipedia/commons/3/39/PSX-Console-wController.jpg')

Console.create( :name => 'Nintendo 64', :period => '90s', :release_date => '23-6-1996', :sold => '32.93Millon', :image => 'https://upload.wikimedia.org/wikipedia/commons/1/11/N64-Console-Set.jpg')

Console.create( :name => 'Playstation 2', :period => '2000s', :release_date => '4-3-2000', :sold => '155Million', :image => 'https://upload.wikimedia.org/wikipedia/commons/1/1c/PS2-Versions.jpg')

Console.create( :name => 'Playstation 3', :period => '2000s', :release_date => '11-11-2006', :sold => '87.4Million', :image => 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Sony-PlayStation-3-2001A-wController-L.jpg')

Console.create( :name => 'Playstation 4', :period => '2010s', :release_date => '15-11-2013', :sold => '116.9Million', :image => 'https://upload.wikimedia.org/wikipedia/commons/7/71/Sony-PlayStation-4-PS4-wDualShock-4.jpg')

Console.create( :name => 'Playstation 5', :period => '20s', :release_date => '12-11-2020', :sold => '17.3Million', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/PlayStation_5_and_DualSense_with_transparent_background.png/1200px-PlayStation_5_and_DualSense_with_transparent_background.png')

Console.create( :name => 'Xbox', :period => '2000s', :release_date => '15-11-2001', :sold => '24Million', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Xbox-console.jpg/1200px-Xbox-console.jpg')

Console.create( :name => 'Xbox 360', :period => '2000s', :release_date => '22-11-2005', :sold => '84Million', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Microsoft-Xbox-360-Pro-Flat-wController-L.jpg/250px-Microsoft-Xbox-360-Pro-Flat-wController-L.jpg')

Console.create( :name => 'Xbox One', :period => '2010s', :release_date => '22-11-2013', :sold => '51Million', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Microsoft-Xbox-One-S-Console-wController-L.jpg/300px-Microsoft-Xbox-One-S-Console-wController-L.jpg')

Console.create( :name => 'Xbox Series X/S', :period => '20s', :release_date => '10-11-2020', :sold => '12Million', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Xbox_Series_S_with_controller.jpg/220px-Xbox_Series_S_with_controller.jpg')

Console.create( :name => 'Nintendo GameCube', :period => '2000s', :release_date => '14-11-2001', :sold => '21.74Million', :image => 'https://upload.wikimedia.org/wikipedia/commons/d/d1/GameCube-Set.jpg')

Console.create( :name => 'Nintendo Wii', :period => '2000s', :release_date => '19-11-2006', :sold => '101.63Million', :image => 'https://upload.wikimedia.org/wikipedia/commons/1/14/Wii-console.jpg')

Console.create( :name => 'Nintendo Wii U', :period => '2010s', :release_date => '18-11-2012', :sold => '13.56Million', :image => 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Wii_U_Console_and_Gamepad.png')

Console.create( :name => 'Nintendo Switch', :period => '2010s', :release_date => '3-3-2017', :sold => '103.54Million', :image => 'https://upload.wikimedia.org/wikipedia/commons/7/73/Nintendo_Switch_Portable.png')

puts "#{ Console.count } consoles created"