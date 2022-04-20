class Student < ActiveRecord::Base
    belongs_to :course, :optional=>true
end