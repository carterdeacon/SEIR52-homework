class CreateBeers < ActiveRecord::Migration[5.2]
  def change
    create_table :beers do |t|
      t.text :name
      t.text :description
      t.text :image
      t.float :abv
      t.timestamps
    end
  end
end
