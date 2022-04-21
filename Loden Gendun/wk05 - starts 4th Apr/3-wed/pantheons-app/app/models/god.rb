class God < ActiveRecord::Base
    belongs_to :pantheon, :optional => true
end
