class Picture < ActiveRecord::Base
    belongs_to :studio, :optional => true
end