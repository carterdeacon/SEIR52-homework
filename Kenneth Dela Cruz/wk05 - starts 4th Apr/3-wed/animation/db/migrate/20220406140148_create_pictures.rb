class CreatePictures < ActiveRecord::Migration[5.2]
  def change
    create_table :pictures do |t|
      t.text :name
      t.text :genre
      t.text :image 
      t.text :gif
      t.timestamps #created_at, updated_at
    end
  end
end
