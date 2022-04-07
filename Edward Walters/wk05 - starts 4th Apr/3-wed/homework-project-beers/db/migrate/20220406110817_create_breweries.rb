class CreateBreweries < ActiveRecord::Migration[5.2]
  def change
    create_table :breweries do |t|
      t.text :name
      t.text :city
      t.text :country
      t.text :year_founded
      t.text :website
      t.text :photo
      t.timestamps
    end
  end
end
