class CreateBuildings < ActiveRecord::Migration[5.2]
  def change
    create_table :buildings do |t|
      t.text :name
      t.text :year
      t.text :height
      t.text :floor
      t.text :image
      t.timestamps
    end
  end
end
