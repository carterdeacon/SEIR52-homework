class CreateStudios < ActiveRecord::Migration[5.2]
  def change
    create_table :studios do |t|
      t.text :name
      t.date :founded
      t.text :headquarters
      t.integer :employees
      t.text :image
      t.timestamps # created_at, updated_at
    end
  end
end
