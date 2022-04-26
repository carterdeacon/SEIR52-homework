class CreateGods < ActiveRecord::Migration[5.2]
  def change
    create_table :gods do |t|
      t.text :name
      t.text :parents
      t.text :domain
      t.text :home
      t.text :symbol
      t.text :sacred_animals
      t.text :retinue
      t.text :other_names
      t.timestamps null: false
    end
  end
end
