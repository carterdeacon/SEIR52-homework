Studio.destroy_all

Studio.create(:name => 'MAPPA', :founded => '2011-06-14', :headquarters => 'Suginami, Tokyo, Japan', :employees => '310', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/MAPPA_Logo.svg/440px-MAPPA_Logo.svg.png')
Studio.create(:name => 'TV Tokyo', :founded => '2010-10-01', :headquarters => 'Minato, Tokyo, Japan', :employees => '1422', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/TV_Tokyo_logo_20110629.svg/440px-TV_Tokyo_logo_20110629.svg.png')

puts "#{ Studio.count } studios created."


Picture.destroy_all

Picture.create(:name => 'Naruto', :genre => 'Fantasy, Action, Comedy', :image => 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg', :gif => 'https://media3.giphy.com/media/2y98KScHKeaQM/200.gif' )
Picture.create(:name => 'Jujutsu Kaisen', :genre => 'Dark Fantasy, Action, Supernatural', :image => 'https://upload.wikimedia.org/wikipedia/en/4/46/Jujutsu_kaisen.jpg', :gif => 'https://c.tenor.com/nDw7rJeHdaMAAAAd/jujutsu-kaisen.gif' )
Picture.create(:name => 'Tengen Toppa Gurren Laggan', :genre => 'Mecha, Adventure, Comedy, Drama', :image => 'https://upload.wikimedia.org/wikipedia/en/2/20/Gurren_Lagann_key_visual.jpg', :gif => 'https://animesher.com/orig/1/156/1564/15640/animesher.com_tengen-toppa-gurren-lagann-gif-1564046.gif' )

puts "#{ Picture.count } motion pictures created."