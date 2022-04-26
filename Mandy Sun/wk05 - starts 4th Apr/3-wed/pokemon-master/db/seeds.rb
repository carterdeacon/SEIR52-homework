Master.destroy_all

Master.create(:name => 'Ash Ketchum', :alias => 'Satoshi', :gender => 'Male', :image => 'https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=29145')
Master.create(:name => 'Misty Williams', :alias => 'Kasumi', :gender => 'Female', :image => 'https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=29145')
Master.create(:name => 'Brock Harrison', :alias => 'Takeshi', :gender => 'Male', :image => 'https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=29145')

puts "#{Master.count} masters create"

Pokemon.destroy_all

Pokemon.create(:name => 'Bulbasaur', :category => 'Seed', :abilities => 'Overgrow', :image => 'https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=29145')
Pokemon.create(:name => 'Charmander', :category => 'Lizard', :abilities => 'Blaze', :image => 'https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=29145')
Pokemon.create(:name => 'Squirtle', :category => 'Tiny Turtle', :abilities => 'Torrent', :image => 'https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=29145')

puts "#{Pokemon.count} pokemons create"