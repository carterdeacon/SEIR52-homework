class Building < ActiveRecord::Base
    belongs_to :city, :optional => true

end