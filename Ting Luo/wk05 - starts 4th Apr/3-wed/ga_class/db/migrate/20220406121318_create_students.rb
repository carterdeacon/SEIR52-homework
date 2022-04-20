class CreateStudents < ActiveRecord::Migration[5.2]
  def change
    create_table :students do |t|
      t.text :name
      t.integer :age
      t.text :location
    end
  end
end
