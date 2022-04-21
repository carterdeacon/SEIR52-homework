Driver.destroy_all

Driver.create(:gname => "Max", :surname => "Verstappen", :dob => "1997-09-30", :nationality => "Dutch", :image => "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Max_Verstappen_2017_Malaysia_3.jpg/220px-Max_Verstappen_2017_Malaysia_3.jpg", :team_id => 1)

p "#{Driver.count} drivers created"

Team.destroy_all

Team.create(:name => "Red Bull Racing", :website => "https://www.redbullracing.com/int-en/")

p "#{Team.count} teams created"