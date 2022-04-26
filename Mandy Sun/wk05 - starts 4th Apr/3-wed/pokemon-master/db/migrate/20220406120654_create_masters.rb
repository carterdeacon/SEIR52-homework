class CreateMasters < ActiveRecord::Migration[5.2]
  def change
    create_table :masters do |t|
      t.text :name
      t.text :alias
      t.text :gender
      t.text :image
      t.timestamps null:false
    end
  end
end
