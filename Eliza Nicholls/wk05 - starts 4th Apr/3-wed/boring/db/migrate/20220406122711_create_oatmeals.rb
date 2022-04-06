class CreateOatmeals < ActiveRecord::Migration[5.2]
  def change
    create_table :oatmeals do |t|
      t.text :name
      t.text :vibe
      t.text :image
    end
  end
end
