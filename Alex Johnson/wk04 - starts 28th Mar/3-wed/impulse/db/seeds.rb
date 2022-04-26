Artist.destroy_all

Artist.create(:name => 'Kai Winding', :born => 'Aarhus, Denmark', :dob => '1922-05-18', :instrument => 'Trombone', :image => 'https://upload.wikimedia.org/wikipedia/commons/3/32/GottliebKaiWinding.jpg')
Artist.create(:name => 'Ray Charles', :born => 'Albany, Georgia, USA', :dob => '1930-09-30', :instrument => 'Piano', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Ray_Charles_classic_piano_pose.jpg/800px-Ray_Charles_classic_piano_pose.jpg')
Artist.create(:name => 'Gil Evans', :born => 'Toronto, Canada', :dob => '1912-05-13', :instrument => 'Piano', :image => 'https://jazz.fm/app/uploads/2015/July/01/2015_July_01_gil-evans.jpg')
Artist.create(:name => 'Oliver Nelson', :born => 'St. Louis, Missouri, USA', :dob => '1932-06-04', :instrument => 'Saxophone', :image => 'https://upload.wikimedia.org/wikipedia/en/7/72/Oliver_Edward_Nelson.jpg')
Artist.create(:name => 'John Coltrane', :born => 'Hamlet, Nth. Caorlina, USA', :dob => '1926-09-23', :instrument => 'Saxophone', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/John_Coltrane_in_1963.jpg/800px-John_Coltrane_in_1963.jpg')
Artist.create(:name => 'Art Blakey', :born => 'Pittsburgh, Pennsylvania, USA', :dob => '1919-10-11', :instrument => 'Drums', :image => 'https://upload.wikimedia.org/wikipedia/commons/0/02/Art_Blakey.jpg')
Artist.create(:name => 'Max Roach', :born => 'Newland, Nth. Carolina, USA', :dob => '1924-01-10', :instrument => 'Drums', :image => 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Max_Roach.jpg')

puts "#{ Artist.count } artists created."


Release.destroy_all

Release.create(:title => 'The Great Kai & JJ', :catalog => 'A(S) 1', :year => '1961', :image => 'https://upload.wikimedia.org/wikipedia/en/e/e7/The_Great_Kai_%26_J_J.jpg')
Release.create(:title => 'Genius + Soul = Jazz', :catalog => 'A(S) 2', :year => '1961', :image => 'https://upload.wikimedia.org/wikipedia/en/5/5e/GeniusPlusSoulEqualsJazz_RayCharles.jpg')
Release.create(:title => 'The Incredible Kai Winding Trombones', :catalog => 'A(S) 3', :year => '1961', :image => 'https://upload.wikimedia.org/wikipedia/en/4/4f/The_Incredible_Kai_Winding_Trombones.jpg')
Release.create(:title => 'Out Of The Cool', :catalog => 'A(S) 4', :year => '1961', :image => 'https://upload.wikimedia.org/wikipedia/en/d/dd/Out_of_the_Cool.jpg')
Release.create(:title => 'The Blues and the Abstract Truth', :catalog => 'A(S) 5', :year => '1961', :image => 'https://upload.wikimedia.org/wikipedia/en/7/7b/The_Blues_and_the_Abstract_Truth_%28Oliver_Nelson_album_-_cover_art%29.jpg')
Release.create(:title => 'Africa/Brass', :catalog => 'A(S) 6', :year => '1961', :image => 'https://upload.wikimedia.org/wikipedia/en/d/de/ColtraneAfricaBrassCover.jpg')
Release.create(:title => 'Art Blakey!!!!! Jazz Messengers !!!!!', :catalog => 'A(S) 7', :year => '1961', :image => 'https://upload.wikimedia.org/wikipedia/en/a/a4/Blakey_Impulse%21_cover.jpg')
Release.create(:title => 'Percussion Bitter Sweet', :catalog => 'A(S) 8', :year => '1961', :image => 'https://upload.wikimedia.org/wikipedia/en/b/b2/Percussion_Bitter_Sweet.jpg')
Release.create(:title => 'Into The Hot', :catalog => 'A(S) 9', :year => '1962', :image => 'https://upload.wikimedia.org/wikipedia/en/6/6e/Into_the_Hot.jpg')
Release.create(:title => 'Live! At the Village Vanguard', :catalog => 'A(S) 10', :year => '1962', :image => 'https://upload.wikimedia.org/wikipedia/en/5/5e/ColtraneVillageVanguardLPcover.jpg')

puts "#{ Release.count } releases created."













