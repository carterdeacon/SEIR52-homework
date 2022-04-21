Patient.destroy_all

Patient.create(:name => 'Sara', :family => 'Dzad', :dob => '1991-02-14', :disease => 'Arthritis', :image => 'https://www.fillmurray.com/395/495')
Patient.create(:name => 'John', :family => 'Smith', :dob => '1975-03-24', :disease => 'Blind Color', :image => 'https://www.fillmurray.com/390/490')
Patient.create(:name => 'Gordon', :family => 'Wallace', :dob => '1960-05-04', :disease => 'Diabetes', :image => 'https://www.fillmurray.com/400/500')

puts "#{ Patient.count } patients created."

Doctor.destroy_all

Doctor.create(:name => 'Alireza', :family => 'Talaei', :dob => '1985-04-26', :speciality => 'Surgon', :image => 'https://www.fillmurray.com/600/700')
Doctor.create(:name => 'Zhilian', :family => 'Yue', :dob => '1952-06-21', :speciality => 'Eye specialist', :image => 'https://www.fillmurray.com/605/705')

puts "#{ Doctor.count } doctors created"