class CreateFoods < ActiveRecord::Migration[5.2]
  def change
    create_table :foods do |t|
      t.text :name
      t.text :category
      t.text :ingredients
      t.integer :kilojoules
      t.integer :chain_id
      t.text :image
      t.timestamps
    end
  end
end
