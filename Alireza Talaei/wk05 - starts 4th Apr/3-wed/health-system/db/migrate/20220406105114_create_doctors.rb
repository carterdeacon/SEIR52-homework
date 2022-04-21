class CreateDoctors < ActiveRecord::Migration[5.2]
  def change
    create_table :doctors do |t|
      t.text :name
      t.text :family
      t.date :dob
      t.text :speciality
      t.text :image
      t.timestamps
    end
  end
end
