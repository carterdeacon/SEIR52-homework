Skifield.destroy_all

Skifield.create :name => 'Mammoth', :country => 'USA', :lifts => 25, :runs => 189.8, :longest => 6, :top => 3369, :base => 2424, :snowfall => 1016, :skied => 'Yes'
Skifield.create :name => 'Rusutsu', :country => 'Japan', :lifts => 18, :runs => 42, :longest => 3.4, :top => 994, :base => 400, :snowfall => 1343, :skied => 'Yes'
Skifield.create :name => 'Silvretta Montafon', :country => 'Austria', :lifts => 36, :runs => 140, :longest => 12, :top => 2430, :base => 700, :snowfall => 873, :skied => 'No'

puts "#{ Skifield.count } skifields created."