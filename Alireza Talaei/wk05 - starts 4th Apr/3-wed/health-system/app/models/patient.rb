class Patient < ActiveRecord::Base
    belongs_to :doctor, :optional => true
end