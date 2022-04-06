class CreatePokemons < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemons do |t|
      t.text :name
      t.text :category
      t.text :abilities
      t.text :image
      t.integer :master_id
      t.timestamps null:false
    end
  end
end
