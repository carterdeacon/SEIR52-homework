class CreateDrivers < ActiveRecord::Migration[5.2]
  def change
    create_table :drivers do |t|
      t.text :gname
      t.text :surname
      t.date :dob
      t.text :nationality
      t.url :image
      t.integer :team_id
      t.timestamps
    end
  end
end
