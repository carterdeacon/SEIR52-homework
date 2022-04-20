class CreateBars < ActiveRecord::Migration[5.2]
  def change
    create_table :bars do |t|
      t.text :name
      t.text :location
      t.integer :store_count
      t.text :style
      t.float :rating
      t.text :image
    end
  end
end
