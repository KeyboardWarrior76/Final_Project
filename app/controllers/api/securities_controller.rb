class Api::SecuritiesController < ApplicationController

  before_action :set_project

  def index
    render json: @project.securities
  end

  def create
    @security = @project.securities.new(security_params)
    if @security.save
      render json: @security
    else
      render json: {errors: @security.errors}, status: :unproccessable_entity
    end
  end

  def update
    @security = @project.securities.find(params[:id])
    if @security.update(security_params)
      render json: @security
    else
      render json: {errors: @security.errors}, status: :unproccessable_entity
    end
  end

  def destroy
    @project.securities.find(params[:id]).destroy
    render json: {message: 'security has been wrecked, bro'}
  end

  private

  def set_project
    @project = Project.find(params[:project_id])
  end

  def security_params
    params.require(:security).permit(:certificate, :factor_authentication, :dos_protection)
  end
end
