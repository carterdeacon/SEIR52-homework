class Handsomespoon < ActiveRecord::Base
    belongs_to :oatmeal, :optional => true
end 