class CreateHandsomespoons < ActiveRecord::Migration[5.2]
  def change
    create_table :handsomespoons do |t|
      t.text :name
      t.text :material
      t.text :image
    end
  end
end
