class CreateBurgers < ActiveRecord::Migration[5.2]
  def change
    create_table :burgers do |t|
      t.text :name
      t.text :ingredients
      t.float :price
      t.text :image
      t.integer :bar_id
    end
  end
end
