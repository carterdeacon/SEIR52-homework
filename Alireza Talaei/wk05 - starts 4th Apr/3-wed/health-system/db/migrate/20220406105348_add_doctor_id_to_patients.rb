class AddDoctorIdToPatients < ActiveRecord::Migration[5.2]
  def change
    add_column :patients, :doctor_id, :integer
  end
end
