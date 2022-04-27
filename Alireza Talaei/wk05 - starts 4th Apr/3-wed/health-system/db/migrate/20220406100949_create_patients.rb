class CreatePatients < ActiveRecord::Migration[5.2]
  def change
    create_table :patients do |t|
      t.text :name
      t.text :family
      t.date :dob
      t.text :disease
      t.text :image
      t.timestamps
    end
  end
end
