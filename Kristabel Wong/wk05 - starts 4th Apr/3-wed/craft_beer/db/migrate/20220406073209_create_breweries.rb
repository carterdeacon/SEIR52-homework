class CreateBreweries < ActiveRecord::Migration[5.2]
  def change
    create_table :breweries do |t|
        t.text :name
        t.text :country
        t.text :state
        t.text :suburb
        t.text :image
        t.text :website
        t.timestamps
    end
  end
end
