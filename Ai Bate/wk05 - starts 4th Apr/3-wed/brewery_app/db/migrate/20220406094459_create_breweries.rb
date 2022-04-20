class CreateBreweries < ActiveRecord::Migration[5.2]
  def change
    create_table :breweries do |t|
      t.text :name
      t.text :state
      t.string :phone
      t.text :logo
      t.text :web
      t.timestamps
    end
  end
end
