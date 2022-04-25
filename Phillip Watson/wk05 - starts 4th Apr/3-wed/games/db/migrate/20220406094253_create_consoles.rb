class CreateConsoles < ActiveRecord::Migration[5.2]
  def change
    create_table :consoles do |t|
      t.text :name
      t.text :period
      t.text :release_date
      t.text :sold
      t.text :image
      t.timestamps
    end
  end
end
