class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.text :name
      t.text :position
      t.integer :age
      t.text :height
      t.integer :weight
      t.text :college
      t.text :nationality
      t.integer :salary
      t.text :image
      t.timestamps
    end
  end
end
