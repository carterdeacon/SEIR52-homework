class AddBreweryIdToBeers < ActiveRecord::Migration[5.2]
  def change
    add_column :beers, :brewery_id, :integer
  end
end
