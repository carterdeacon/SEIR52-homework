  
class Pokemon < ActiveRecord::Base
    belongs_to :master, :optional => true
end