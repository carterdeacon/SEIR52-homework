Island.destroy_all

Island.create :name => 'Indonesia', :language => "Indonesian", :capital => "Jakarta"
Island.create :name => 'Japan', :language => "Japanese", :capital => "Tokyo"
Island.create :name => 'Philippines', :language => "Filipino", :capital => "Manila"

puts "#{Island.count} islands created."