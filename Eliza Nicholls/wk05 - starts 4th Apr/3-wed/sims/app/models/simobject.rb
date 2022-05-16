class Simobject < ActiveRecord::Base
    belongs_to :death, :optional => true
end