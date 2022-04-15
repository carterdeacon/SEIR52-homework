class AddCityIdToBuildings < ActiveRecord::Migration[5.2]
  def change
    add_column :buildings, :city_id, :integer
  end
end
