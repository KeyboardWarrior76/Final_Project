class Api::CatagoriesController < ApplicationController
  before_action :set_project

  def index
    render json: @project.get_categories
  end

  def create
    categories = @project.create_categories(params)
    if categories
      render json: catagories
    else
      render json: {errors: 'Could Not Create Data'}, status: :unproccessable_entity
    end
  end

  private
    def set_project
      @project = Project.find(params[:project_id])
    end
end
