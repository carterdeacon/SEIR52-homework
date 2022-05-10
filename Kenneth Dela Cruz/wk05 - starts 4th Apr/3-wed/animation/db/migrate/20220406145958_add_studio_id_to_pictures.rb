class AddStudioIdToPictures < ActiveRecord::Migration[5.2]
  def change
    add_column :pictures, :studio_id, :integer
  end
end
