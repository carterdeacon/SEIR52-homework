Mountain.destroy_all #gets rid of previous sample data

Mountain.create(
    :name => 'Mount Everest',
    :image => 'https://i.imgur.com/TBqhWRe.jpg',
    :ranking => 1,
    :height => 8848,
    :country => 'China',
    :ascent => 1953
)

Mountain.create( 
    :name => 'Nanga Parbat',
    :image => 'https://i.imgur.com/6nFWoW2.jpg',
    :ranking => 9,
    :height => 8126,
    :country => 'Pakistan',
    :ascent => 1953
)

Mountain.create(
    :name => 'Nanda Devi',
    :image => 'https://i.imgur.com/TR2SnTU.jpg',
    :ranking => 23,
    :height => 7816,
    :country => 'India',
    :ascent => 1936
)

puts "#{Mountain.count} mountains created"