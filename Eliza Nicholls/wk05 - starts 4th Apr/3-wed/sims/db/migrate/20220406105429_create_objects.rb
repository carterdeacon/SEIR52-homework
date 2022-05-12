class CreateSimobjects < ActiveRecord::Migration[5.2]
  def change
    create_table :simobjects do |t|
      t.text :name
      t.text :itemtype
      t.text :image
      t.text :description
    end
  end
end
