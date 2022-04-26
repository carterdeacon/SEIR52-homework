class Burger < ActiveRecord::Base
    belongs_to :bar, :optional => true
end