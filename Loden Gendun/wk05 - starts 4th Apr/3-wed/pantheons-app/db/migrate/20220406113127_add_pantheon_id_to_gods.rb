class AddPantheonIdToGods < ActiveRecord::Migration[5.2]
  def change
    add_column :gods, :pantheon_id, :integer
  end
end
