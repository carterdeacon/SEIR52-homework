class CreateAuthors < ActiveRecord::Migration[5.2]
  def change
    create_table :authors do |t|
      t.text :name
      t.text :nationality
      t.date :dob
      t.text :period
      t.text :image
      t.timestamps # created_at, updated_at -- two columns created automatically
    end
  end
end
