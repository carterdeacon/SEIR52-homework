class OceansController < ApplicationController
    def index
        # get all the planets
        @oceans = Ocean.all
    end
end