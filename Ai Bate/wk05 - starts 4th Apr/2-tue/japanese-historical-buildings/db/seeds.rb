Castle.destroy_all

Castle.create :name => 'Osaka Castle', :prefecture => 'Osaka', :who => 'Hideyoshi Toyotomi'
Castle.create :name => 'Edo Castle', :prefecture => 'Tokyo', :who => 'Ieyasu Tokugawa'
Castle.create :name => 'Matsumoto Castle', :prefecture => 'Nagano', :who => 'Ogasawara family'

puts "#{ Castle.count } castles created."