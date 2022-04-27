Pantheon.destroy_all

Pantheon.create(:name => 'Greek', :country => 'Greece')
Pantheon.create(:name => 'Hindu', :country => 'India')
Pantheon.create(:name => 'Japanese', :country => 'Japan')
Pantheon.create(:name => 'Native American', :country => 'America')
Pantheon.create(:name => 'Roman', :country => 'Rome')
Pantheon.create(:name => 'Norse', :country => 'Norway, Sweden, Denmark')

puts "#{Pantheon.count} pantheons created."

God.destroy_all

God.create(:name => 'Ares', :parents => 'Zeus, Hera', :domain => 'war, courage, battlelust', :home => 'Mount Olympus', :symbol => 'Helm', :sacred_animals => 'Serpent', :retinue => 'Deimus, Phobus, Enyo', :other_names => 'Enyalius')
God.create(:name => 'Apollo', :parents => 'Zeus, Leto', :domain => 'music, prophecy, healing, archery', :home => 'Mount Olympus', :symbol => 'lyre, bow', :sacred_animals => 'swan, raven', :retinue => 'Muses', :other_names => 'Phoebus')
God.create(:name => 'Zeus', :parents => 'Cronus and Rhea', :domain => 'sky, weather, kings, fate', :home => 'Mount Olympus', :symbol => 'lightning bolt', :sacred_animals => 'eagle, bull', :retinue => 'Hermes, Nike, Cratus, Themis, Moirae, Horae', :other_names => 'Cronides, Cronion')
God.create(:name => 'Hades', :parents => 'Cronus, Rhea', :domain => 'the dead, the underworld', :home => 'Hades', :symbol => 'royal sceptre, cornucopia', :sacred_animals => 'screech-owl', :retinue => 'Judges of the Dead, the Erinyes, Cerberus', :other_names => 'Pluton, Aidoneus')
God.create(:name => 'Shiva', :parents => '', :domain => 'destruction, time, arts, yoga, meditation', :home => 'Mount Kailash', :symbol => 'Lingam, Crescent Moon, Damaru (Drum), Vasuki', :sacred_animals => '', :retinue => '', :other_names => 'Shankara, Bholenath, Maheshwara, Mahadeva, Adiyogi Rudra, Sadashiva, Batara Guru, Mahavatar Babaji')

puts "#{God.count} gods created."
