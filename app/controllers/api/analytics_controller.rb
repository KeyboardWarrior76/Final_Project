class Api::AnalyticsController < ApplicationController

  before_action :set_project

  def index
    render json: @project.analytics
  end

  def create
    @analytic = @project.analytics.new(analytic_params)
    if @analytic.save
      render json: @analytic
    else
      render json: {errors: @analytic.errors}, status: :unproccessable_entity
    end
  end

  def update
    @analytic = @project.analytics.find(params[:id])
    if @analytic.update(analytic_params)
      render json: @analytic
    else
      render json: {errors: @analytic.errors}, status: :unproccessable_entity
    end
  end

  def destroy
    @project.analytics.find(params[:id]).destroy
    render json: {message: 'analytic has been wrecked, bro'}
  end

  private

  def set_project
    @project = Project.find(params[:project_id])
  end

  def analytic_params
    params.require(:analytic).permit(:email_pass, :facebook, :twitter, :google, :linkedin, :github, :invitation, :multi_analytic, :subdomain, :custom)
  end
end
