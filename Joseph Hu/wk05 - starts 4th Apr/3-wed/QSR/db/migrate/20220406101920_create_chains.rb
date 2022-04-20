class CreateChains < ActiveRecord::Migration[5.2]
  def change
    create_table :chains do |t|
      t.text :name
      t.text :founder
      t.date :founded
      t.integer :locations
      t.text :logo
      t.timestamps
    end
  end
end
