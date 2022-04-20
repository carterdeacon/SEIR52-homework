class CreateCourses < ActiveRecord::Migration[5.2]
  def change
    create_table :courses do |t|
      t.text :name
      t.date :start
      t.date :end
      t.text :period
      t.timestamps
    end
  end
end
