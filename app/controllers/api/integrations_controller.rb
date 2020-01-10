class Api::IntegrationsController < ApplicationController

  before_action :set_project

  def index
    render json: @project.integrations
  end

  def create
    @integration = @project.integrations.new(integration_params)
    if @integration.save
      render json: @integration
    else
      render json: {errors: @integration.errors}, status: :unproccessable_entity
    end
  end

  def update
    @integration = @project.integrations.find(params[:id])
    if @integration.update(integration_params)
      render json: @integration
    else
      render json: {errors: @integration.errors}, status: :unproccessable_entity
    end
  end

  def destroy
    @project.integrations.find(params[:id]).destroy
    render json: {message: 'integration has been wrecked, bro'}
  end

  private

  def set_project
    @project = Project.find(params[:project_id])
  end

  def integration_params
    params.require(:integration).permit(:third_party, :messaging, :api_integrate, :phone_number)
  end
end
