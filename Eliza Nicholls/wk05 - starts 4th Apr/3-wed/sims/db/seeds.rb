# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Death.destroy_all

Death.create(:deathtype => 'poopin', :game => 'The Sims', :description => 'poopin is the both the surest and the simplest method. To achieve this, create a 3x3 or larger pool and make the Sim get in. Then remove all the ladders, as Sims in The Sims cannot climb out of pools without ladders. Then wait until all their motives drop down and they will eventually drown. Strangely, a Sim can enter a pool that doesnt have a ladder. ')
Death.create(:deathtype => 'Fire', :game => 'The Sims', :description => 'Enclose them into a 4x4 room without an exit, and add a fireplace and a couch. Have the Sim light the fireplace and then sit in the couch, and add furniture around to prevent them from standing up.')

Simobject.destroy_all
Object.create(:name => 'Pool Ladder', :itemtype => 'Build object', :description => 'A pool ladder to get sims in and out of pool.' )