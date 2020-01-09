class Api::DateLocationsController < ApplicationController

  before_action :set_project

  def index
    render json: @project.date_locations
  end

  def create
    @date_location = @project.date_locations.new(date_location_params)
    if @date_location.save
      render json: @date_location
    else
      render json: {errors: @date_location.errors}, status: :unproccessable_entity
    end
  end

  def update
    @date_location = @project.date_locations.find(params[:id])
    if @date_location.update(date_location_params)
      render json: @date_location
    else
      render json: {errors: @date_location.errors}, status: :unproccessable_entity
    end
  end

  def destroy
    @project.date_locations.find(params[:id]).destroy
    render json: {message: 'date_location has been wrecked, bro'}
  end

  private

  def set_project
    @project = Project.find(params[:project_id])
  end

  def date_location_params
    params.require(:date_location).permit(:calendar, :display, :map_display, :booking)
  end
end
