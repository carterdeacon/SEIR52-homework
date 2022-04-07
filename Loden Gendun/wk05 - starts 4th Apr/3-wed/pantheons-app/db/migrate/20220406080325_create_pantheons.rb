class CreatePantheons < ActiveRecord::Migration[5.2]
  def change
    create_table :pantheons do |t|
      t.text :name
      t.text :country
      t.timestamps null: false
    end
  end
end
