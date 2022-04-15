class Food < ActiveRecord::Base 
    belongs_to :chain, :optional => true
end