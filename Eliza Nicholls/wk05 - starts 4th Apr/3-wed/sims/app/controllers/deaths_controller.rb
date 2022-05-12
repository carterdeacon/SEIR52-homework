class DeathsController < ApplicationController
  def index
    @deaths = Death.all
  end

  def new
  end

  def edit
  end

  def show
  end
end
