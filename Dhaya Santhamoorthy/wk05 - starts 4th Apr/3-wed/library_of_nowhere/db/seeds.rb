# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Author.destroy_all

Author.create(:name => 'Dan Brown', :nationality => 'American', :dob => '1879-02-22', :period => '20th century', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Dan_Brown_bookjacket_cropped.jpg/440px-Dan_Brown_bookjacket_cropped.jpg')
Author.create(:name => 'John Grisham', :nationality => 'American', :dob => '1912-02-07', :period => '20th century', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Grisham_John_by_C_Harrison_.jpg/400px-Grisham_John_by_C_Harrison_.jpg')
Author.create(:name => 'Nassim Nicholas Taleb', :nationality => 'Lebanese', :dob => '1915-11-21', :period => '20th century', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Taleb_mug.JPG/440px-Taleb_mug.JPG')
Author.create(:name => 'Benjamin Graham', :nationality => 'American', :dob => '1952-04-22', :period => '20th century', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Benjamin-Graham-fundamental.jpg/440px-Benjamin-Graham-fundamental.jpg')
Author.create(:name => 'J.R.R. Tolkien', :nationality => 'American', :dob => '1920-07-24', :period => '20th century', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/J._R._R._Tolkien%2C_1940s.jpg/440px-J._R._R._Tolkien%2C_1940s.jpg')
Author.create(:name => 'Stephen King', :nationality => 'American', :dob => '1921-07-26', :period => '20th century', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Stephen_King%2C_Comicon.jpg/440px-Stephen_King%2C_Comicon.jpg')


puts "#{ Author.count } authors created."

Book.destroy_all

Book.create(:title => 'Da Vinci code', :year => '2004', :genre => 'Mystery Thriller', :image => 'http://books.google.com/books/content?id=YuDl2Wl651AC&printsec=frontcover&img=1&zoom=1&source=gbs_api')
Book.create(:title => 'A Time to Kill', :year => '1992', :genre => 'Legal Thriller', :image => 'http://books.google.com/books/content?id=4qVGAFRByvIC&printsec=frontcover&img=1&zoom=1&source=gbs_api')
Book.create(:title => 'The Whistler', :year => '2017', :genre => 'Legal Thriller', :image => 'http://books.google.com/books/content?id=5ZQnDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api')
Book.create(:title => 'The Black Swan', :year => '2008', :genre => 'Non-Fiction', :image => 'http://books.google.com/books/content?id=Wu1MJmle10YC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api')
Book.create(:title => 'The Shining', :year => '2007', :genre => 'Non-Fiction', :image => 'http://books.google.com/books/content?id=P_FlAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api')

puts "#{ Book.count } books created."