class CreateReleases < ActiveRecord::Migration[5.2]
  def change
    create_table :releases do |t|
      t.text :title
      t.text :catalog
      t.text :year
      t.text :image
      t.timestamps
    end
  end
end
