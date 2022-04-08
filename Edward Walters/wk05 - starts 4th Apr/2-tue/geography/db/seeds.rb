# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Mountain.destroy_all
Mountain.create :name => "Everest", :country => "Nepal", :height => 8848, :prominence_rank => 1, :photo => "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/240px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg", :first_climbed_year => 1953, :first_climbed_by => "Tenzing Norgay & Edmund Hillary"

Mountain.create :name => "K2", :country => "Pakistan", :height => 8611, :prominence_rank => 2, :photo => "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/K2_2006b.jpg/272px-K2_2006b.jpg", :first_climbed_year => 1954, :first_climbed_by => "Lino Lacedelli % Achille Compagnoni"

puts "#{ Mountain.count } mountains exist in database"