class CreateDeaths < ActiveRecord::Migration[5.2]
  def change
    create_table :deaths do |t|
      t.text :deathtype
      t.text :game
      t.text :image
      t.text :description
    end
  end
end
