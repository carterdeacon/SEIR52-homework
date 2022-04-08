class AddOatmeatIdToHandsomespoons < ActiveRecord::Migration[5.2]
  def change
    add_column :handsomespoons, :oatmeal_id, :integer
  end
end
