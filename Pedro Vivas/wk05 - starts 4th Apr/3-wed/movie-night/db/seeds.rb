Movie.destroy_all

Movie.create(:title => 'The Matrix', :poster => 'https://i.imgur.com/3twH6IX.png', :genre => 'Action, Sci-fi', :release => '2007-03-15', :synopsis => 'asdsad wasdf hfghf  sdafdf dsdf')
Movie.create(:title => 'John Wick', :poster => 'https://i.imgur.com/pFY68Nk.png', :genre => 'Action, Thirller', :release => '2015-02-03', :synopsis => 'Dog dies, guy kills everybody')
Movie.create(:title => 'John Wick 2', :poster => 'https://i.imgur.com/HXFGYyZ.png', :genre => 'Action, Thirller', :release => '2017-02-10', :synopsis => 'ldaodnh ioh adf b acjviughadgf asfdjhla;f')
Movie.create(:title => 'Event Horison', :poster => 'https://i.imgur.com/JhseLCa.png', :genre => 'Horror, Sci-fi', :release => '2006-04-18', :synopsis => 'fadfasdf hflad hfa ajdfha fdohsdass')
Movie.create(:title => 'Jurassic Park', :poster => 'https://imgur.com/3db94204-8c09-4cfa-bc59-d0481c404f0e', :genre => 'Action, Adventure', :release => '1993-06-11', :synopsis => 'aasdf i  hlgfhg yugf lahg gdf lhk dhfg lh u')
Movie.create(:title => 'Star Wars', :poster => 'https://imgur.com/0e78e073-2f57-4044-93fb-7cd16527c784', :genre => 'Adventure, Sci-fi', :release => '1977-03-25', :synopsis => 'adfghk jkhf jhfdjfh ifu nafsdf uag eye')
Movie.create(:title => 'Raiders of the Lost Ark', :poster => 'https://i.imgur.com/miR4UAM.png', :genre => 'Action, Adventure', :release => '1981-06-12', :synopsis => 'fkgf fk udbv ,bvaruyg uvvfu luaiygf sdhfbh sdfbf g ads')
Movie.create(:title => 'Blade Runner', :poster => 'https://i.imgur.com/Z1b6WlG.png', :genre => 'Mystery, Sci-fi', :release => '2001-10-30', :synopsis => 'iygfyg nb iygfiyuweg uy jjfaiyuf t bf h ywe db iyao fsd')

puts "#{Movie.count } movies created"

Actor.destroy_all

Actor.create(:name => 'Keanu Reeves', :photo => 'https://i.imgur.com/6Uk8fzo.png', :birthplace => 'Beirut, Lebanon', :dob => '1964-09-02')
Actor.create(:name => 'Lawrence Fishbourne', :photo => 'https://i.imgur.com/5PHXjuv.png', :birthplace => 'Georgia, USA', :dob => '1961-07-30')
Actor.create(:name => 'Sam Neil', :photo => 'https://i.imgur.com/5yHpHhY.png', :birthplace => 'Northern Ireland, UK', :dob => '1947-09-14')
Actor.create(:name => 'Harrison Ford', :photo => 'https://i.imgur.com/6mvHdNe.png', :birthplace => 'Chicago, Illinois, USA', :dob => '1942-7-13')
#Actor.create(:name => '', :photo => '', :birthplace => '', :dob => '')


puts "#{ Actor.count } actors created"

Director.destroy_all

Director.create(:name => 'Steven Spielbreg', :photo => 'https://i.imgur.com/mIhdCaQ.png', :birthplace => 'Ohio, USA', :dob => '1956-12-18')
Director.create(:name => 'George Lucas', :photo => 'https://i.imgur.com/pEM40b7.png', :birthplace => 'Modesto, California, USA', :dob => '1944-05-14')
Director.create(:name => 'The Wachowskis', :photo => 'https://i.imgur.com/Qtz3WtO.png', :birthplace => 'Chicago, Illinois, USA', :dob => '1965-06-21')
Director.create(:name => 'Chad Stahelski', :photo => 'https://i.imgur.com/hRdc7LA.png', :birthplace => 'Palmer, Massachusets, USA', :dob => '1968-09-20')
Director.create(:name => 'Ridley Scott', :photo => 'https://i.imgur.com/XraWvmv.png', :birthplace => 'England, UK', :dob => '1937-11-30')
#Director.create(:name => '', :photo => '', :birthplace => '', :dob => '')


puts "#{ Director.count } directors created"

#Associations
puts ""