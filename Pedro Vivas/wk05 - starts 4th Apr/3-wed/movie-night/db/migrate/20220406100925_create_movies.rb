class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.text :title
      t.text :poster
      t.text :genre
      t.date :release
      t.text :synopsis
      t.timestamps
    end
  end
end
