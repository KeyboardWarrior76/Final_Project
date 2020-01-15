class Api::AppsController < ApplicationController

  before_action :set_project

  def index
    render json: @project.apps
  end

  def create
    @app = @project.apps.new(app_params)
    if @app.save
      render json: @app
    else
      render json: {errors: @app.errors}, status: :unproccessable_entity
    end
  end

  def update
    @app = @project.apps.find(params[:id])
    if @app.update(app_params)
      render json: @app
    else
      render json: {errors: @app.errors}, status: :unproccessable_entity
    end
  end

  def destroy
    @project.apps.find(params[:id]).destroy
    render json: {message: 'app has been wrecked, bro'}
  end

  private

  def set_project
    @project = Project.find(params[:project_id])
  end

  def app_params
    params.require(:app).permit(:ui_level, :size)
  end
end
