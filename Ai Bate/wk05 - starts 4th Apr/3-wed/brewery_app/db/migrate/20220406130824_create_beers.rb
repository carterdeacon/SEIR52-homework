class CreateBeers < ActiveRecord::Migration[5.2]
  def change
    create_table :beers do |t|
      t.text :name
      t.text :style
      t.text :abv
      t.text :image
      t.timestamps
    end
  end
end
