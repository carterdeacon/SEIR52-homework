class CreateBeers < ActiveRecord::Migration[5.2]
  def change
    create_table :beers do |t|
        t.text :name
        t.text :image
        t.text :abv
        t.text :style
        t.text :standard
        t.timestamps
    end
  end
end
