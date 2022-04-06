class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token # Only for handwritten POST forms
end
